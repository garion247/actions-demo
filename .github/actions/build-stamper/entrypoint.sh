#!/bin/bash
set -euo pipefail

APP_NAME="${INPUT_APP_NAME:?app-name is required}"
OUTPUT_FILE="${INPUT_OUTPUT_FILE:-build-stamp.json}"

STAMP=$(jq -n \
  --arg app "$APP_NAME" \
  --arg sha "$GITHUB_SHA" \
  --arg ref "$GITHUB_REF" \
  --arg run "$GITHUB_RUN_NUMBER" \
  --arg ts "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  '{app:$app, sha:$sha, ref:$ref, run:$run|tonumber, built_at:$ts}')

echo "$STAMP" > "$GITHUB_WORKSPACE/$OUTPUT_FILE"
echo "Wrote build stamp:"
echo "$STAMP" | jq .

echo "stamp-path=$OUTPUT_FILE" >> "$GITHUB_OUTPUT"
