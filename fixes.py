#!/usr/bin/env python3
"""Apply proofreading fixes across all blog posts and FAQ data."""

import os

BASE = "/Users/henrik/.openclaw/workspace/skinchange-website/src/app/[lang]/blog"

# Each entry: (filepath, old_fragment, new_fragment)
# old_fragment must be unique enough to find exactly

FIXES = [
    # HERPES ZOSTER
    ("herpes-zoster-shingles/page.tsx",
     "?'Helingssfase:' ?",
     "?'Helingsfase:' ?"),

    # ACNE
    ("acne/page.tsx",
     "'In this article we explain exactly",
     "'In this article, we explain exactly"),
    ("acne/page.tsx",
     "Reduce sugar and dairy, manage stress,",
     "Reduce sugar and dairy intake, manage stress,"),
    ("acne/page.tsx",
     "the person's age and skin type",
     "a person's age and skin type"),

    # CELLULITIS
    ("cellulitis/page.tsx",
     "the inner layer of skin",
     "the deeper layer of skin below the epidermis"),
    ("cellulitis/page.tsx",
     "Avoid putting pressure or tightness around",
     "Avoid applying pressure or constriction around"),
    ("cellulitis/page.tsx",
     "Hurtig diagnose og behandling er afgørende",
     "Tidlig diagnose og behandling er afgørende"),

    # CONTACT DERMATITIS
    ("contact-dermatitis/page.tsx",
     "I denne artikel forklarer vi præcis hvad kontaktdermatitis",
     "I denne artikel forklarer vi præcist hvad kontaktdermatitis"),
    ("contact-dermatitis/page.tsx",
     "In this article we explain exactly what contact dermatitis",
     "In this article, we explain exactly what contact dermatitis"),
    ("contact-dermatitis/page.tsx",
     "Brug lunkent vand i stedet for varmt vand, og",
     "Brug lunkent i stedet for varmt vand, og"),

    # ECZEMA
    ("eczema-atopic-dermatitis/page.tsx",
     "the person's age and skin type",
     "a person's age and skin type"),
    ("eczema-atopic-dermatitis/page.tsx",
     "mælk, æg, nødder, gluten) som",
     "mælk, æg, nødder og glutenholdige produkter) som"),

    # HERPES SIMPLEX
    ("herpes-simplex-virus/page.tsx",
     "not a sign of poor hygiene",
     "not a reflection of poor hygiene"),
    ("herpes-simplex-virus/page.tsx",
     "danner sår, som efterfølgende dækkes af en skorpe.",
     "danner sår, som efterfølgende dækkes af skorper."),
    ("herpes-simplex-virus/page.tsx",
     "reducere stigma.",
     "mindske stigmaet."),

    # ROSACEA
    ("rosacea/page.tsx",
     "In this article we explain exactly what rosacea",
     "In this article, we explain exactly what rosacea"),
    ("rosacea/page.tsx",
     "Reduce sugar and dairy, manage stress,",
     "Reduce sugar and dairy intake, manage stress,"),

    # SCABIES
    ("scabies/page.tsx",
     "In this article we explain exactly what scabies",
     "In this article, we explain exactly what scabies"),

    # SEBORRHEIC DERMATITIS
    ("seborrheic-dermatitis/page.tsx",
     "In this article we explain exactly what seborrheic dermatitis",
     "In this article, we explain exactly what seborrheic dermatitis"),

    # TINEA
    ("tinea-infections-ringworm/page.tsx",
     "In this article we explain exactly what tinea",
     "In this article, we explain exactly what tinea"),
    ("tinea-infections-ringworm/page.tsx",
     "will typically spread and can be transferred to others",
     "will typically worsen and can be transferred to others"),

    # URTICARIA
    ("urticaria-hives/page.tsx",
     "In this article we explain exactly what urticaria",
     "In this article, we explain exactly what urticaria"),

    # VITILIGO
    ("vitiligo/page.tsx",
     "In this article we explain exactly what vitiligo",
     "In this article, we explain exactly what vitiligo"),
    ("vitiligo/page.tsx",
     "skin that has lost its colour",
     "skin which has lost its colour"),
]


def get_full_path(filepath):
    if filepath.startswith("src/"):
        return f"/Users/henrik/.openclaw/workspace/skinchange-website/{filepath}"
    return f"{BASE}/{filepath}"


def apply_fixes():
    # Group by file
    fixes_by_file = {}
    for item in FIXES:
        filepath, old, new = item
        fixes_by_file.setdefault(filepath, []).append((old, new))

    for filepath, pairs in fixes_by_file.items():
        full = get_full_path(filepath)
        if not os.path.exists(full):
            print(f"SKIP (not found): {full}")
            continue

        with open(full, encoding="utf-8") as f:
            content = f.read()

        original = content
        for old, new in pairs:
            if old not in content:
                print(f"  NOT FOUND in {filepath}: {repr(old[:80])}")
                continue
            content = content.replace(old, new)

        if content != original:
            with open(full, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Fixed: {filepath} ({len(pairs)} change(s))")
        else:
            print(f"No change: {filepath}")

    print("\nDone.")

if __name__ == "__main__":
    apply_fixes()
