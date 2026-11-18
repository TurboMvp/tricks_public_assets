#!/usr/bin/env node
// Builds <trick-id>/index.json for every top-level folder that has a templates/ directory.
// Usage: node scripts/build-index.mjs           write index.json files
//        node scripts/build-index.mjs --check   exit 1 if any index.json is missing or stale
// Node >= 22, no dependencies.
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((e) => !e.name.startsWith('.'))
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    .flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));

const entry = (file) => {
  const buf = readFileSync(file);
  return { sha256: createHash('sha256').update(buf).digest('hex'), size: buf.length };
};

const group = (dir) => {
  const files = {};
  let bytes = 0;
  for (const f of walk(dir)) {
    const e = entry(f);
    files[relative(dir, f).split(sep).join('/')] = e;
    bytes += e.size;
  }
  return { files, bytes };
};

const build = (trick) => {
  const tdir = join(root, trick, 'templates');
  const out = { schema: 1, trick, bases: {} };
  const sections = {};
  const heroshots = {};
  for (const e of readdirSync(tdir, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1))) {
    if (!e.isDirectory() || e.name.startsWith('.')) continue;
    if (e.name === '_heroshots') {
      for (const f of walk(join(tdir, e.name))) {
        const name = relative(join(tdir, e.name), f).split(sep).join('/');
        heroshots[name.replace(/\.[^.]+$/, '')] = { path: `templates/_heroshots/${name}`, ...entry(f) };
      }
    } else if (e.name === 'sections-library') {
      sections.value = group(join(tdir, e.name));
    } else {
      out.bases[e.name] = group(join(tdir, e.name));
    }
  }
  if (sections.value) out['sections-library'] = sections.value;
  out.heroshots = heroshots;
  return JSON.stringify(out, null, 2) + '\n';
};

const tricks = readdirSync(root, { withFileTypes: true })
  .filter((e) => e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules')
  .map((e) => e.name)
  .filter((n) => existsSync(join(root, n, 'templates')) && statSync(join(root, n, 'templates')).isDirectory())
  .sort();

let stale = 0;
for (const t of tricks) {
  const path = join(root, t, 'index.json');
  const next = build(t);
  if (check) {
    const cur = existsSync(path) ? readFileSync(path, 'utf8') : null;
    if (cur !== next) {
      console.error(`${t}/index.json is ${cur === null ? 'missing' : 'stale'}. Run: node scripts/build-index.mjs`);
      stale++;
    } else console.log(`${t}/index.json is up to date`);
  } else {
    writeFileSync(path, next);
    console.log(`wrote ${t}/index.json`);
  }
}
if (!tricks.length) console.log('no <trick-id>/templates/ folders found');
process.exit(stale ? 1 : 0);
