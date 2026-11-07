#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STATIC_DIR="$PROJECT_DIR"
: "${OPENCODE_WEB_DIR:?OPENCODE_WEB_DIR must point to worker metadata storage}"
: "${RUNTIME_DIR:?RUNTIME_DIR must point to the worker runtime}"
PORT="${PORT:-3000}"
export PORT

cd "$PROJECT_DIR"
/usr/bin/time -p test -f "$STATIC_DIR/index.html"

# This project is plain HTML/CSS/JS with no package manifest or build step.
/usr/bin/time -p mkdir -p "$OPENCODE_WEB_DIR"
/usr/bin/time -p env PROJECT_DIR="$PROJECT_DIR" STATIC_DIR="$STATIC_DIR" node -e 'const fs=require("node:fs"); const path=require("node:path"); fs.writeFileSync(path.join(process.env.OPENCODE_WEB_DIR,"deployment-output.json"), JSON.stringify({project:process.env.PROJECT_DIR,directory:process.env.STATIC_DIR}))'

# Keep the worker's static server in the foreground for controller lifecycle management.
exec /usr/bin/time -p node "$RUNTIME_DIR/scripts/default-start.mjs"
