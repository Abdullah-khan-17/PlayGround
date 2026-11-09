#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
: "${OPENCODE_WEB_DIR:?OPENCODE_WEB_DIR must point to worker metadata storage}"
PORT="${PORT:-3000}"
STATIC_DIR="$PROJECT_DIR/dist"
export PORT

cd "$PROJECT_DIR"
/usr/bin/time -p npm ci --no-audit --no-fund
/usr/bin/time -p npm run build
/usr/bin/time -p test -f "$STATIC_DIR/index.html"
/usr/bin/time -p mkdir -p "$OPENCODE_WEB_DIR"
/usr/bin/time -p env PROJECT_DIR="$PROJECT_DIR" STATIC_DIR="$STATIC_DIR" OPENCODE_WEB_DIR="$OPENCODE_WEB_DIR" node -e 'const fs=require("node:fs");const path=require("node:path");fs.writeFileSync(path.join(process.env.OPENCODE_WEB_DIR,"deployment-output.json"),JSON.stringify({project:path.resolve(process.env.PROJECT_DIR),directory:path.resolve(process.env.STATIC_DIR)}))'

# Keep the static preview server in the foreground for controller lifecycle management.
exec /usr/bin/time -p npm run preview -- --host 0.0.0.0 --port "$PORT" --strictPort
