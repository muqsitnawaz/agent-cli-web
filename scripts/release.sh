#!/usr/bin/env bash
# release.sh — deploy agent-cli-web to Cloudflare Pages.
#
# Defaults to dry-run. Pass --confirm to actually deploy.
#
# Required env (inject via `agents secrets exec cloudflare -- scripts/release.sh ...`):
#   CLOUDFLARE_ACCOUNT_ID    Cloudflare account id
#   CLOUDFLARE_API_TOKEN     CF API token with Pages:Edit + Workers:Edit
#
# Usage:
#   scripts/release.sh                          # dry run
#   scripts/release.sh --confirm                # build + deploy
#   scripts/release.sh --skip-build --confirm   # re-deploy existing out/
#   scripts/release.sh --skip-tests --confirm   # skip tests
set -euo pipefail
cd "$(dirname "$0")/.."

ROOT="$(pwd)"
CONFIRM=0
SKIP_BUILD=0
SKIP_TESTS=0
PROJECT_NAME="agents-cli-web"
CUSTOM_DOMAIN="agents-cli.sh"

for arg in "$@"; do
  case "$arg" in
    --confirm)     CONFIRM=1 ;;
    --skip-build)  SKIP_BUILD=1 ;;
    --skip-tests)  SKIP_TESTS=1 ;;
    -h|--help)
      sed -n '2,15p' "$0"
      exit 0
      ;;
    *)
      echo "unknown flag: $arg"
      exit 1
      ;;
  esac
done

# Cheap pre-flight checks first.

VERSION=$(node -p "require('./package.json').version")
echo "[release] version: $VERSION"

if ! grep -q "^## $VERSION" CHANGELOG.md 2>/dev/null; then
  echo "[release] error: no CHANGELOG.md entry for $VERSION — add '## $VERSION — YYYY-MM-DD' section first"
  exit 1
fi

if ! command -v wrangler >/dev/null 2>&1; then
  echo "[release] error: wrangler not installed. install with: bun add -g wrangler"
  exit 1
fi

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "[release] error: CLOUDFLARE_API_TOKEN not set"
  echo "[release] run: agents secrets exec cloudflare -- scripts/release.sh $*"
  exit 1
fi

# Build (slow step, after cheap checks).
if [[ "$SKIP_BUILD" == "0" ]]; then
  if [[ "$SKIP_TESTS" == "1" ]]; then
    echo "[release] warning: --skip-tests was passed — skipping test suite"
    bun install
    bun run build
  else
    bash scripts/build.sh
  fi
fi

if [[ ! -d out ]]; then
  echo "[release] error: out/ missing — did build run?"
  exit 1
fi

if [[ "$CONFIRM" == "0" ]]; then
  echo ""
  echo "[release] DRY RUN — would deploy:"
  echo "  project:        $PROJECT_NAME"
  echo "  directory:      $ROOT/out ($(du -sh out | cut -f1))"
  echo "  files:          $(find out -type f | wc -l | tr -d ' ')"
  echo "  custom domain:  $CUSTOM_DOMAIN (pattern A: root=docs, /install.sh=script)"
  echo "  version:        $VERSION"
  echo ""
  echo "[release] re-run with --confirm to actually deploy."
  exit 0
fi

echo "[release] deploying to Cloudflare Pages..."
wrangler pages deploy out --project-name="$PROJECT_NAME" --branch=main --commit-dirty=true

echo ""
echo "[release] deployed."
echo "[release] verify: curl -fsSL https://$CUSTOM_DOMAIN | head -20"
echo "[release] verify install script: curl -fsSL https://$CUSTOM_DOMAIN/install.sh | head -20"
