#!/usr/bin/env bash
# Sync project files → plugin bundle
# Run this after updating the design system, before committing.
#
# What it syncs:
#   - design-system-reference.md (identical in both places)
#   - tokens.css, foundation.css, components.css, icons.js, serve.py
#   - assets/icons/ (all SVGs)
#
# What it does NOT sync:
#   - SKILL.md — the plugin version has different YAML frontmatter and paths.
#     Edit it directly in plugins/effectory-design-system/skills/... if needed.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
SKILL_SRC="$ROOT/.claude/skills/effectory-design-system"
PLUGIN_SKILL="$ROOT/plugins/effectory-design-system/skills/effectory-design-system"
PLUGIN_FILES="$ROOT/plugins/effectory-design-system/design-system-files"

echo "→ Syncing reference doc"
cp "$SKILL_SRC/design-system-reference.md" "$PLUGIN_SKILL/design-system-reference.md"

echo "→ Syncing CSS / JS / serve.py"
for f in tokens.css foundation.css components.css icons.js serve.py; do
  cp "$ROOT/$f" "$PLUGIN_FILES/$f"
done

echo "→ Syncing icons"
rm -rf "$PLUGIN_FILES/assets/icons"
mkdir -p "$PLUGIN_FILES/assets"
cp -R "$ROOT/assets/icons" "$PLUGIN_FILES/assets/icons"

echo "→ Bumping plugin version (patch)"
PLUGIN_JSON="$ROOT/plugins/effectory-design-system/.claude-plugin/plugin.json"
OLD_VERSION=$(grep -o '"version"[[:space:]]*:[[:space:]]*"[^"]*"' "$PLUGIN_JSON" | sed -E 's/.*"([0-9]+\.[0-9]+\.[0-9]+)".*/\1/')
IFS='.' read -r MAJOR MINOR PATCH <<< "$OLD_VERSION"
NEW_VERSION="$MAJOR.$MINOR.$((PATCH + 1))"
# Portable in-place sed (works on macOS and Linux)
sed -i.bak -E "s/\"version\"[[:space:]]*:[[:space:]]*\"$OLD_VERSION\"/\"version\": \"$NEW_VERSION\"/" "$PLUGIN_JSON"
rm "$PLUGIN_JSON.bak"
echo "  $OLD_VERSION → $NEW_VERSION"

echo ""
echo "✓ Plugin bundle in sync (v$NEW_VERSION)."
echo ""
echo "Reminder: if you edited SKILL.md, update it in BOTH places:"
echo "  - $SKILL_SRC/SKILL.md (project)"
echo "  - $PLUGIN_SKILL/SKILL.md (plugin — has frontmatter + plugin paths)"
echo ""
echo "Next: git add . && git commit -m '…' && git push"
