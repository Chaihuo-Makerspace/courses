#!/usr/bin/env node
/**
 * deslop-scan.mjs — REPORT-ONLY slop scanner for this repo. Never auto-fixes.
 *
 * Greps src/ (plus docs/DESIGN.md) for observed "slop tells":
 *   zh marketing clichés, Japanese-flavored words in zh copy,
 *   solid bg-white surfaces, naked hex colors outside the token files.
 *
 * Usage: node scripts/deslop-scan.mjs
 * Exit code is always 0 (report-only); findings are printed, not enforced.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SCAN_DIRS = ['src'];
const SCAN_FILES = ['docs/DESIGN.md'];
const TEXT_EXTENSIONS = new Set(['.astro', '.ts', '.tsx', '.js', '.jsx', '.mjs', '.css', '.md', '.json']);

const RULES = [
  {
    id: 'zh-cliche',
    label: 'zh marketing clichés',
    pattern: /赋能|打造|一站式|全方位|深耕|闭环|轻松实现|轻松掌控|无限可能|之旅/g,
    why: 'AI-flavored zh marketing filler; replace with concrete claims per docs/DESIGN.md voice.',
    // DESIGN.md §5 has to name the banned words in order to ban them.
    exclude: ['docs/DESIGN.md'],
  },
  {
    id: 'zh-japanese-flavor',
    label: 'Japanese-flavored words in zh copy',
    pattern: /学园|物语|匠心|极致|臻选/g,
    why: 'Register drift in zh copy (学园 rename is tracked separately; others are faux-Japanese garnish).',
    exclude: ['docs/DESIGN.md'],
  },
  {
    id: 'bg-white-solid',
    label: 'solid bg-white surface',
    pattern: /bg-white(?![\w/-])/g,
    why: 'DESIGN.md §1.5 bans pure-white surfaces; use bg-background, or bg-white/xx only as translucent ink.',
  },
  {
    id: 'naked-hex',
    label: 'naked hex color',
    pattern: /#[0-9a-fA-F]{3,8}\b/g,
    why: 'DESIGN.md §1: prefer token utilities over literal hex; colors belong in theme.css.',
    exclude: ['src/styles/themes/theme.css', 'src/pages/styleguide.astro'],
  },
];

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) yield* walk(full);
    else if (TEXT_EXTENSIONS.has(extname(entry))) yield full;
  }
}

function extname(name) {
  const i = name.lastIndexOf('.');
  return i === -1 ? '' : name.slice(i);
}

/** Strip non-copy syntax so prose mentions in comments/docs don't false-positive. */
function stripNonCopy(line, inBlockComment) {
  let out = line;
  let inBlock = inBlockComment;
  if (inBlock) {
    const end = out.indexOf('*/');
    if (end === -1) return { text: '', inBlock: true };
    out = out.slice(end + 2);
    inBlock = false;
  }
  out = out.replace(/<!--.*?-->/g, ' ');
  out = out.replace(/\{\/\*.*?\*\/\}/g, ' ');
  out = out.replace(/\/\*.*?\*\//g, ' ');
  const start = out.indexOf('/*');
  if (start !== -1) {
    out = out.slice(0, start);
    inBlock = true;
  }
  return { text: out, inBlock };
}

/** DESIGN.md mentions utilities in inline code (e.g. `bg-white`); prose, not usage. */
function stripInlineCode(line) {
  return line.replace(/`[^`]*`/g, ' ');
}

function collectTargets() {
  const targets = [];
  for (const dir of SCAN_DIRS) {
    try {
      targets.push(...walk(join(ROOT, dir)));
    } catch {
      // scan dir missing — skip
    }
  }
  for (const file of SCAN_FILES) {
    try {
      statSync(join(ROOT, file));
      targets.push(join(ROOT, file));
    } catch {
      // optional doc missing — skip
    }
  }
  return targets;
}

const findings = new Map(RULES.map((r) => [r.id, []]));

for (const file of collectTargets()) {
  const rel = relative(ROOT, file);
  const isMarkdown = rel.endsWith('.md');
  const lines = readFileSync(file, 'utf8').split('\n');
  let inBlock = false;
  lines.forEach((raw, i) => {
    let { text, inBlock: next } = stripNonCopy(raw, inBlock);
    inBlock = next;
    if (isMarkdown) text = stripInlineCode(text);
    if (!text.trim()) return;
    for (const rule of RULES) {
      if (rule.exclude?.includes(rel)) continue;
      rule.pattern.lastIndex = 0;
      if (rule.pattern.test(text)) {
        findings.get(rule.id).push(`${rel}:${i + 1}: ${raw.trim()}`);
      }
    }
  });
}

let total = 0;
for (const rule of RULES) {
  const hits = findings.get(rule.id);
  const count = hits.length;
  total += count;
  console.log(`\n== ${rule.id} — ${rule.label} (${count})`);
  console.log(`   why: ${rule.why}`);
  for (const hit of hits) console.log(`   ${hit}`);
}
console.log(`\n${total} finding(s) across ${RULES.length} rules. Report only — no files modified.`);
process.exit(0);
