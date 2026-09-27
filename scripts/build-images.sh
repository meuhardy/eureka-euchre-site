#!/bin/bash
# Regenerates public/img/ from the iOS repo. Run only when the app's screenshots or icon
# change; the output is committed, so a normal build does not need this.
#
# Source of truth is the iOS repo's submission branch — the same screenshots and icon that
# go to App Store Connect, so the site can never show artwork the store does not.
#
# Usage: scripts/build-images.sh [path-to-ios-repo] [ref]
set -euo pipefail
cd "$(dirname "$0")/.."

REPO="${1:-../Euhardy-euchre}"
REF="${2:-origin/feature/app-store-submission-prep}"
SRC="$(mktemp -d)"
OUT="public/img"
trap 'rm -rf "$SRC"' EXIT

command -v cwebp >/dev/null || { echo "cwebp not found — brew install webp"; exit 1; }
mkdir -p "$OUT"

extract() { git -C "$REPO" show "${REF}:$1" > "$SRC/$2"; }

for n in 1-menu 2-game 3-tutorial 4-stats 5-awards; do
  extract "docs/store/screenshots/iphone-6.9/${n}.jpg" "phone-${n}.jpg"
done
for n in 1-game 2-tutorial 3-stats 4-awards 5-menu; do
  extract "docs/store/screenshots/ipad-13/${n}.jpg" "tablet-${n}.jpg"
done
extract "Eureka Euchre/Eureka Euchre/Assets.xcassets/AppIcon.appiconset/icon_1024.png" "icon.png"

# Phones render at ~224px wide, tablets at ~320px; these widths keep both crisp at 2x
# without shipping the 1MB originals.
for f in "$SRC"/phone-*.jpg; do
  name=$(basename "$f" .jpg | sed 's/phone-[0-9]*-//')
  sips --resampleWidth 600 "$f" --out "$SRC/t.png" >/dev/null 2>&1
  cwebp -quiet -q 80 "$SRC/t.png" -o "$OUT/phone-${name}.webp"
done
for f in "$SRC"/tablet-*.jpg; do
  name=$(basename "$f" .jpg | sed 's/tablet-[0-9]*-//')
  sips --resampleWidth 760 "$f" --out "$SRC/t.png" >/dev/null 2>&1
  cwebp -quiet -q 80 "$SRC/t.png" -o "$OUT/tablet-${name}.webp"
done

sips -Z 512 "$SRC/icon.png" --out "$SRC/i512.png" >/dev/null 2>&1
cwebp -quiet -q 90 "$SRC/i512.png" -o "$OUT/app-icon.webp"
sips -Z 180 "$SRC/icon.png" --out "$OUT/app-icon-180.png" >/dev/null 2>&1
sips -Z 32 "$SRC/icon.png" --out "public/favicon.png" >/dev/null 2>&1

echo "Regenerated $(ls "$OUT" | wc -l | tr -d ' ') files in $OUT ($(du -sh "$OUT" | cut -f1))"
