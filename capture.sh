#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
: "${RUNTIME_DIR:?RUNTIME_DIR must point to the worker runtime}"
: "${CAPTURE_URL:?Set CAPTURE_URL to the exact preview URL}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR to an absolute output directory}"

if [[ "$CAPTURE_DIR" != /* ]]; then
  echo 'CAPTURE_DIR must be an absolute path.' >&2
  exit 1
fi

/usr/bin/time -p test -f "$RUNTIME_DIR/scripts/default-capture.mjs"
/usr/bin/time -p test -f "$HOME/.local/share/omgithub-playwright/linux.json"
/usr/bin/time -p test -f "$HOME/.local/share/omgithub-playwright/display"
/usr/bin/time -p mkdir -p "$CAPTURE_DIR"
CAPTURE_DIR="$(/usr/bin/time -p realpath -m "$CAPTURE_DIR")"
case "$CAPTURE_DIR/" in
  "$PROJECT_DIR/"*)
    echo 'CAPTURE_DIR must be outside the project source tree.' >&2
    exit 1
    ;;
esac

# The runtime capture implementation owns and closes its Chromium instance,
# distinguishes temporary navigation/browser errors, and writes the required filenames.
/usr/bin/time -p env \
  CAPTURE_AUTO_START=false \
  CAPTURE_STRICT=1 \
  CAPTURE_READY_SELECTOR='#app > .hero-line' \
  CAPTURE_URL="$CAPTURE_URL" \
  CAPTURE_DIR="$CAPTURE_DIR" \
  node "$RUNTIME_DIR/scripts/default-capture.mjs"
