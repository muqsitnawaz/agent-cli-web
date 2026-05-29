#!/usr/bin/env bash
# install.sh — set up agent-cli-web for local development.
set -euo pipefail
cd "$(dirname "$0")/.."

if ! command -v bun >/dev/null 2>&1; then
  echo "error: bun not installed. install from https://bun.sh"
  exit 1
fi

bun install
echo "done. next: bun run dev"
