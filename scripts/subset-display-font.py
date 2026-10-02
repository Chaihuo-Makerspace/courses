#!/usr/bin/env python3
"""Regenerate public/fonts/SmileySans-Oblique.subset.woff2.

The display font is shipped as a subset holding only the characters the site
uses. Headings fall back to Noto Sans for any character outside the subset,
which shows as a visibly different glyph in the middle of a heading — so rerun
this after copy changes that add new characters to headings.

Usage:
    python3 scripts/subset-display-font.py /path/to/SmileySans-Oblique.ttf

The full font (OFL-1.1) is not kept in the repo; download v2.0.1 from
https://github.com/atelier-anchor/smiley-sans/releases. Needs fontTools and
brotli (`pip install fonttools brotli`).

Character set = every character in the zh copy sources and in the non-CJK
locale dictionaries, plus whatever the current subset already contains (so a
rerun never drops a glyph). Japanese is excluded on purpose: Smiley Sans has
no Japanese kanji forms, and theme.css turns the display face off for `ja`.
"""

import glob
import re
import sys
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public/fonts/SmileySans-Oblique.subset.woff2"


def zh_block(path: str) -> str:
    """The `const zh = {...}` block of a UI dictionary."""
    text = (ROOT / path).read_text(encoding="utf8")
    return text[text.index("const zh") : text.index("\nconst en")]


def collect() -> set[int]:
    chars: set[str] = set()
    sources = [*glob.glob(str(ROOT / "src/data/*.ts"))]
    sources += glob.glob(str(ROOT / "src/pages/**/*.astro"), recursive=True)
    sources += glob.glob(str(ROOT / "src/components/**/*.astro"), recursive=True)
    sources += [str(ROOT / "src/pages/llms.txt.ts")]
    # Latin-script locales: accented letters and typographic punctuation.
    sources += [str(ROOT / f"src/i18n/module-{loc}.ts") for loc in ("en", "es", "pt")]
    for path in sources:
        chars.update(Path(path).read_text(encoding="utf8"))
    for path in ("src/i18n/translations.ts", "src/i18n/data-translations.ts"):
        chars.update(zh_block(path))
        # en / es / pt UI strings sit after the zh block; kana is filtered below.
        chars.update((ROOT / path).read_text(encoding="utf8"))
    chars.update((ROOT / "src/i18n/chip-translations.ts").read_text(encoding="utf8"))
    kana = re.compile(r"[぀-ヿ]")
    codepoints = {ord(c) for c in chars if not kana.match(c) and not c.isspace()}
    codepoints.update(range(0x20, 0x7F))
    if OUT.exists():
        codepoints.update(TTFont(OUT, lazy=True).getBestCmap().keys())
    return codepoints


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    source = TTFont(sys.argv[1])
    available = source.getBestCmap().keys()
    wanted = collect()
    covered = sorted(wanted & available)
    options = subset.Options()
    options.flavor = "woff2"
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.notdef_outline = True
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=covered)
    subsetter.subset(source)
    source.flavor = "woff2"
    source.save(OUT)
    missing = "".join(chr(c) for c in sorted(wanted - available) if 0x4E00 <= c <= 0x9FFF)
    print(f"wrote {OUT.relative_to(ROOT)}: {len(covered)} glyphs, {OUT.stat().st_size // 1024} KB")
    if missing:
        print(f"not in Smiley Sans at all ({len(missing)}): {missing}")


if __name__ == "__main__":
    main()
