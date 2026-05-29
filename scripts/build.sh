#!/usr/bin/env bash
# build.sh — install deps, run tests, produce a static export at out/.
set -euo pipefail
cd "$(dirname "$0")/.."

bun install
bash scripts/test.sh
bun run build

if [[ ! -d out ]]; then
  echo "error: out/ not produced. is next.config.ts set to output: 'export'?"
  exit 1
fi

echo "build ok: out/ ($(du -sh out | cut -f1), $(find out -type f | wc -l | tr -d ' ') files)"
