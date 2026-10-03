# Chinese Text Handling

## Quote escaping

Chinese full-width quotes `""` `''` inside `.astro` frontmatter or inline
JS expressions can trip the parser. Use template literals or escape:

```ts
// ✅ safe — template literal
const title = `获得柴火官方认证证书，并进入"柴火人才库"`;

// ❌ can break depending on surrounding context
const title = "获得"柴火人才库"";
```

Plain string literals in `.ts` data files (e.g. `src/data/modules.ts`) are
fine — the constraint is specifically `.astro` frontmatter and inline JS
expressions inside `.astro` templates.

## Punctuation

- Use Chinese punctuation (，。：、！？) for Chinese content.
- Use half-width punctuation only for code, numbers, or mixed-English
  contexts.
- Em-dash: `——` in Chinese, `—` in English.
- Mid-dot for list/series: ` · ` (with surrounding spaces).

## Brand naming (be consistent)

| Surface | Use |
|---|---|
| Chrome (Navbar / Footer / `<title>`) | 柴火创客学院 |
| Formal copy (about, hero subtitles, llms.txt heading) | 柴火创客学院 |
| Ecosystem reference | 柴火创客生态（Seeed Studio + 柴火创客空间） |
| English | Chaihuo Maker Academy |
| Japanese | 柴火創客学院 |

The brand word is **学院**, not 学园. 学园 is the Japanese word 学園
(gakuen) written in simplified characters. The Japanese locale keeps the
proper noun in its original form (柴火創客学院) instead of localising it to
学園.

## Borrowed-register words (日语腔 / 翻译腔 / 黑话)

Treat these as copy defects in zh text, the same way the brand name was:

- Japanese-flavoured: 学园、物语、匠心、匠人、职人、臻选、严选、极致
- English calques: 魔法时刻 (magic moment)、之旅 (journey)、解锁 (unlock)、
  拥抱 (embrace)、无缝 (seamless)、旗舰入口 (flagship)
- Consulting jargon: 赋能、打造、一站式、助力、抓手、轻松实现；闭环 in a
  marketing sense (control loops and grasp loops are fine)
- Template devices: 「零…门槛」 used as a refrain, one quote or footnote
  reused across modules
- Slogans built on a negation: 「不是 X，而是 Y」「不提供 X」. Say what we do.

Say the plain thing instead: what the learner does, on which hardware, in
how long. The full voice spec is in `docs/DESIGN.md` §5; `pnpm deslop`
reports the mechanical subset.

## Brand phrases — keep, do not "plain-language" them

These are the owner's wording for the Pioneer / Base programme. A copy pass
must not replace them with neutral terms such as 教学合作者 or 本地讲师:

- 先锋官是柴火招募的**点火人**
- 把创客教育的火点到更多地方
- 没有先锋官，就没有基地；有了基地，先锋官才有自己的主场。

The last one is a paired slogan, not a negation-built self-description, so
the rule above does not apply to it. Translations: en *Igniters*, ja
火付け役; es / pt use a phrase (quienes llevan la llama / quem leva a
chama), not a coined noun.

## Core narrative

> 我们培养人掌握新技术整合能力，让团队自己能把解决方案部署落地。

授人以渔. Copy says what we teach and what the learner's own team can build
and deploy afterwards. Do not write it as a negation ("不提供解决方案"), and
do not write Chaihuo as the party that delivers the solution for the client.
