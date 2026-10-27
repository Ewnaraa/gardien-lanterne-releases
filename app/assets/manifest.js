/* =====================================================================
   MANIFESTE DES ASSETS — Gardien de la Lanterne
   Chaque élément visuel du jeu est listé ici avec ses fichiers.
   Priorité d'affichage : art (illustration définitive) > concept (découpe de planche, statique) > placeholder.
   Pour brancher une illustration : déposer le PNG dans le dossier indiqué et renseigner « art ».
   Fichier généré par tools/build_assets.py : modifier « art » ici ou dans l'outil.
   ===================================================================== */
registerAssetData('manifest', {
 "version": 1,
 "exportScale": 2,
 "useConceptStandIns": false,
 "entities": {
  "ombre": {
   "name": "Ombre-revenant",
   "folder": "characters/enemies/shadow_revenant/",
   "concept": "characters/enemies/shadow_revenant/CONCEPT_shadow_revenant.png",
   "placeholder": "characters/enemies/shadow_revenant/PLACEHOLDER_shadow_revenant.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/ombre_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/ombre_move_r1.webp",
      "anim/ombre_move_r2.webp",
      "anim/ombre_move_r3.webp",
      "anim/ombre_move_r4.webp",
      "anim/ombre_move_r5.webp",
      "anim/ombre_move_r6.webp",
      "anim/ombre_move_r7.webp",
      "anim/ombre_move_r8.webp",
      "anim/ombre_move_r9.webp",
      "anim/ombre_move_r10.webp",
      "anim/ombre_move_r11.webp",
      "anim/ombre_move_r12.webp"
     ],
     "tele": [
      "anim/ombre_tele_r1.webp",
      "anim/ombre_tele_r2.webp",
      "anim/ombre_tele_r3.webp"
     ],
     "attack": [
      "anim/ombre_attack_r1.webp",
      "anim/ombre_attack_r2.webp",
      "anim/ombre_attack_r3.webp",
      "anim/ombre_attack_r4.webp"
     ],
     "hurt": [
      "anim/ombre_hurt_r1.webp",
      "anim/ombre_hurt_r2.webp"
     ],
     "death": [
      "anim/ombre_death_r1.webp",
      "anim/ombre_death_r2.webp",
      "anim/ombre_death_r3.webp",
      "anim/ombre_death_r4.webp",
      "anim/ombre_death_r5.webp"
     ]
    },
    "frames": {
     "anim/ombre_move_r1.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r2.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r3.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r4.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r5.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r6.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r7.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r8.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r9.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r10.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r11.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_move_r12.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_tele_r1.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_tele_r2.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_tele_r3.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_attack_r1.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_attack_r2.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_attack_r3.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_attack_r4.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_hurt_r1.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_hurt_r2.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_death_r1.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_death_r2.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_death_r3.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_death_r4.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     },
     "anim/ombre_death_r5.webp": {
      "w": 241,
      "h": 209,
      "gap": -75.5
     }
    },
    "refH": 91.5,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 14.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   },
   "views": {
    "s": [
     "shadow_revenant_s1.png",
     "shadow_revenant_s2.png",
     "shadow_revenant_s3.png",
     "shadow_revenant_s2.png"
    ],
    "e": [
     "shadow_revenant_e.png"
    ],
    "n": [
     "shadow_revenant_n.png"
    ],
    "ne": [
     "shadow_revenant_ne.png"
    ],
    "nw": [
     "shadow_revenant_nw.png"
    ]
   }
  },
  "spectre": {
   "name": "Spectre",
   "folder": "characters/enemies/specter/",
   "concept": "characters/enemies/specter/CONCEPT_specter.png",
   "placeholder": "characters/enemies/specter/PLACEHOLDER_specter.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/spectre_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/spectre_move_r1.webp",
      "anim/spectre_move_r2.webp",
      "anim/spectre_move_r3.webp",
      "anim/spectre_move_r4.webp",
      "anim/spectre_move_r5.webp",
      "anim/spectre_move_r6.webp",
      "anim/spectre_move_r7.webp",
      "anim/spectre_move_r8.webp",
      "anim/spectre_move_r9.webp",
      "anim/spectre_move_r10.webp",
      "anim/spectre_move_r11.webp",
      "anim/spectre_move_r12.webp"
     ],
     "attack": [
      "anim/spectre_attack_r1.webp",
      "anim/spectre_attack_r2.webp",
      "anim/spectre_attack_r3.webp",
      "anim/spectre_attack_r4.webp"
     ],
     "hurt": [
      "anim/spectre_hurt_r1.webp",
      "anim/spectre_hurt_r2.webp"
     ],
     "death": [
      "anim/spectre_death_r1.webp",
      "anim/spectre_death_r2.webp",
      "anim/spectre_death_r3.webp",
      "anim/spectre_death_r4.webp",
      "anim/spectre_death_r5.webp"
     ],
     "tele": [
      "anim/spectre_tele_r1.webp",
      "anim/spectre_tele_r2.webp",
      "anim/spectre_tele_r3.webp"
     ]
    },
    "frames": {
     "anim/spectre_move_r1.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r2.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r3.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r4.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r5.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r6.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r7.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r8.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r9.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r10.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r11.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_move_r12.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_tele_r1.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_tele_r2.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_tele_r3.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_attack_r1.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_attack_r2.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_attack_r3.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_attack_r4.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_hurt_r1.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_hurt_r2.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_death_r1.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_death_r2.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_death_r3.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_death_r4.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     },
     "anim/spectre_death_r5.webp": {
      "w": 281,
      "h": 198,
      "gap": 0
     }
    },
    "refH": 157.0,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 12.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "chauve": {
   "name": "Chauve-souris",
   "folder": "characters/enemies/bat/",
   "concept": "characters/enemies/bat/CONCEPT_bat.png",
   "placeholder": "characters/enemies/bat/PLACEHOLDER_bat.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/chauve_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/chauve_move_r1.webp",
      "anim/chauve_move_r2.webp",
      "anim/chauve_move_r3.webp",
      "anim/chauve_move_r4.webp",
      "anim/chauve_move_r5.webp",
      "anim/chauve_move_r6.webp",
      "anim/chauve_move_r7.webp",
      "anim/chauve_move_r8.webp",
      "anim/chauve_move_r9.webp",
      "anim/chauve_move_r10.webp",
      "anim/chauve_move_r11.webp",
      "anim/chauve_move_r12.webp"
     ],
     "tele": [
      "anim/chauve_tele_r1.webp",
      "anim/chauve_tele_r2.webp",
      "anim/chauve_tele_r3.webp"
     ],
     "attack": [
      "anim/chauve_attack_r1.webp",
      "anim/chauve_attack_r2.webp",
      "anim/chauve_attack_r3.webp",
      "anim/chauve_attack_r4.webp"
     ],
     "death": [
      "anim/chauve_death_r1.webp",
      "anim/chauve_death_r2.webp",
      "anim/chauve_death_r3.webp",
      "anim/chauve_death_r4.webp",
      "anim/chauve_death_r5.webp"
     ],
     "hurt": [
      "anim/chauve_hurt_r1.webp",
      "anim/chauve_hurt_r2.webp"
     ]
    },
    "frames": {
     "anim/chauve_move_r1.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r2.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r3.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r4.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r5.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r6.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r7.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r8.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r9.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r10.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r11.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_move_r12.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_tele_r1.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_tele_r2.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_tele_r3.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_attack_r1.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_attack_r2.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_attack_r3.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_attack_r4.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_hurt_r1.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_hurt_r2.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_death_r1.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_death_r2.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_death_r3.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_death_r4.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     },
     "anim/chauve_death_r5.webp": {
      "w": 162,
      "h": 165,
      "gap": 0
     }
    },
    "refH": 120.0,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 18.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "cracheur": {
   "name": "Crapaud cracheur",
   "folder": "characters/enemies/spitting_toad/",
   "concept": "characters/enemies/spitting_toad/CONCEPT_spitting_toad.png",
   "placeholder": "characters/enemies/spitting_toad/PLACEHOLDER_spitting_toad.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/cracheur_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/cracheur_move_r1.webp",
      "anim/cracheur_move_r2.webp",
      "anim/cracheur_move_r3.webp",
      "anim/cracheur_move_r4.webp",
      "anim/cracheur_move_r5.webp",
      "anim/cracheur_move_r6.webp",
      "anim/cracheur_move_r7.webp",
      "anim/cracheur_move_r8.webp",
      "anim/cracheur_move_r9.webp",
      "anim/cracheur_move_r10.webp",
      "anim/cracheur_move_r11.webp",
      "anim/cracheur_move_r12.webp"
     ],
     "tele": [
      "anim/cracheur_tele_r1.webp",
      "anim/cracheur_tele_r2.webp",
      "anim/cracheur_tele_r3.webp"
     ],
     "attack": [
      "anim/cracheur_attack_r1.webp",
      "anim/cracheur_attack_r2.webp",
      "anim/cracheur_attack_r3.webp",
      "anim/cracheur_attack_r4.webp"
     ],
     "hurt": [
      "anim/cracheur_hurt_r1.webp",
      "anim/cracheur_hurt_r2.webp"
     ],
     "death": [
      "anim/cracheur_death_r1.webp",
      "anim/cracheur_death_r2.webp",
      "anim/cracheur_death_r3.webp",
      "anim/cracheur_death_r4.webp",
      "anim/cracheur_death_r5.webp"
     ]
    },
    "frames": {
     "anim/cracheur_move_r1.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r2.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r3.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r4.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r5.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r6.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r7.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r8.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r9.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r10.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r11.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_move_r12.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_tele_r1.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_tele_r2.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_tele_r3.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_attack_r1.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_attack_r2.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_attack_r3.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_attack_r4.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_hurt_r1.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_hurt_r2.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_death_r1.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_death_r2.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_death_r3.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_death_r4.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     },
     "anim/cracheur_death_r5.webp": {
      "w": 263,
      "h": 287,
      "gap": -58.9
     }
    },
    "refH": 130.0,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 12.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "noye": {
   "name": "Noyé",
   "folder": "characters/enemies/drowned/",
   "concept": "characters/enemies/drowned/CONCEPT_drowned.png",
   "placeholder": "characters/enemies/drowned/PLACEHOLDER_drowned.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/noye_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/noye_move_r1.webp",
      "anim/noye_move_r2.webp",
      "anim/noye_move_r3.webp",
      "anim/noye_move_r4.webp",
      "anim/noye_move_r5.webp",
      "anim/noye_move_r6.webp",
      "anim/noye_move_r7.webp",
      "anim/noye_move_r8.webp",
      "anim/noye_move_r9.webp",
      "anim/noye_move_r10.webp",
      "anim/noye_move_r11.webp",
      "anim/noye_move_r12.webp"
     ],
     "tele": [
      "anim/noye_tele_r1.webp",
      "anim/noye_tele_r2.webp",
      "anim/noye_tele_r3.webp"
     ],
     "attack": [
      "anim/noye_attack_r1.webp",
      "anim/noye_attack_r2.webp",
      "anim/noye_attack_r3.webp",
      "anim/noye_attack_r4.webp"
     ],
     "hurt": [
      "anim/noye_hurt_r1.webp",
      "anim/noye_hurt_r2.webp"
     ],
     "death": [
      "anim/noye_death_r1.webp",
      "anim/noye_death_r2.webp",
      "anim/noye_death_r3.webp",
      "anim/noye_death_r4.webp",
      "anim/noye_death_r5.webp"
     ]
    },
    "frames": {
     "anim/noye_move_r1.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r2.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r3.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r4.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r5.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r6.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r7.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r8.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r9.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r10.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r11.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_move_r12.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_tele_r1.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_tele_r2.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_tele_r3.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_attack_r1.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_attack_r2.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_attack_r3.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_attack_r4.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_hurt_r1.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_hurt_r2.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_death_r1.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_death_r2.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_death_r3.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_death_r4.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     },
     "anim/noye_death_r5.webp": {
      "w": 346,
      "h": 284,
      "gap": -66.1
     }
    },
    "refH": 190.0,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 10.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "feufollet": {
   "name": "Feu follet",
   "folder": "characters/enemies/will_o_wisp/",
   "concept": "characters/enemies/will_o_wisp/CONCEPT_will_o_wisp.png",
   "placeholder": "characters/enemies/will_o_wisp/PLACEHOLDER_will_o_wisp.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/feufollet_1.png",
   "anim": {
    "states": {
     "move": [
      "anim/feufollet_1.png",
      "anim/feufollet_2.png",
      "anim/feufollet_3.png"
     ],
     "tele": [
      "anim/feufollet_4.png"
     ],
     "attack": [
      "anim/feufollet_5.png"
     ],
     "hurt": [
      "anim/feufollet_6.png"
     ],
     "death": [
      "anim/feufollet_7.png"
     ]
    },
    "frames": {
     "anim/feufollet_1.png": {
      "w": 96,
      "h": 202,
      "gap": 10
     },
     "anim/feufollet_2.png": {
      "w": 93,
      "h": 219,
      "gap": 118
     },
     "anim/feufollet_3.png": {
      "w": 95,
      "h": 176,
      "gap": 63
     },
     "anim/feufollet_4.png": {
      "w": 103,
      "h": 157,
      "gap": 46
     },
     "anim/feufollet_5.png": {
      "w": 166,
      "h": 158,
      "gap": 0
     },
     "anim/feufollet_6.png": {
      "w": 93,
      "h": 176,
      "gap": 6
     },
     "anim/feufollet_7.png": {
      "w": 131,
      "h": 210,
      "gap": 15
     }
    },
    "refH": 212
   }
  },
  "goule": {
   "name": "Goule",
   "folder": "characters/enemies/ghoul/",
   "concept": "characters/enemies/ghoul/CONCEPT_ghoul.png",
   "placeholder": "characters/enemies/ghoul/PLACEHOLDER_ghoul.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/goule_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/goule_move_r1.webp",
      "anim/goule_move_r2.webp",
      "anim/goule_move_r3.webp",
      "anim/goule_move_r4.webp",
      "anim/goule_move_r5.webp",
      "anim/goule_move_r6.webp",
      "anim/goule_move_r7.webp",
      "anim/goule_move_r8.webp",
      "anim/goule_move_r9.webp",
      "anim/goule_move_r10.webp",
      "anim/goule_move_r11.webp",
      "anim/goule_move_r12.webp"
     ],
     "attack": [
      "anim/goule_attack_r1.webp",
      "anim/goule_attack_r2.webp",
      "anim/goule_attack_r3.webp",
      "anim/goule_attack_r4.webp"
     ],
     "death": [
      "anim/goule_death_r1.webp",
      "anim/goule_death_r2.webp",
      "anim/goule_death_r3.webp",
      "anim/goule_death_r4.webp",
      "anim/goule_death_r5.webp"
     ],
     "tele": [
      "anim/goule_tele_r1.webp",
      "anim/goule_tele_r2.webp",
      "anim/goule_tele_r3.webp"
     ],
     "hurt": [
      "anim/goule_hurt_r1.webp",
      "anim/goule_hurt_r2.webp"
     ]
    },
    "frames": {
     "anim/goule_move_r1.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r2.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r3.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r4.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r5.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r6.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r7.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r8.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r9.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r10.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r11.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_move_r12.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_tele_r1.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_tele_r2.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_tele_r3.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_attack_r1.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_attack_r2.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_attack_r3.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_attack_r4.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_hurt_r1.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_hurt_r2.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_death_r1.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_death_r2.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_death_r3.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_death_r4.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     },
     "anim/goule_death_r5.webp": {
      "w": 283,
      "h": 240,
      "gap": -47.2
     }
    },
    "refH": 150.0,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 16.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "golem": {
   "name": "Golem",
   "folder": "characters/enemies/moss_golem/",
   "concept": null,
   "placeholder": "characters/enemies/moss_golem/PLACEHOLDER_moss_golem.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "placeholder",
   "art": null
  },
  "sanglier": {
   "name": "Sanglier",
   "folder": "characters/enemies/spectral_boar/",
   "concept": null,
   "placeholder": "characters/enemies/spectral_boar/PLACEHOLDER_spectral_boar.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "placeholder",
   "art": null
  },
  "squelette": {
   "name": "Squelette",
   "folder": "characters/enemies/skeleton/",
   "concept": null,
   "placeholder": "characters/enemies/skeleton/PLACEHOLDER_skeleton.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "placeholder",
   "art": null
  },
  "roi": {
   "name": "Roi des Ombres",
   "folder": "bosses/shadow_king/",
   "concept": "bosses/shadow_king/CONCEPT_shadow_king.png",
   "placeholder": "bosses/shadow_king/PLACEHOLDER_shadow_king.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/roi_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/roi_move_r1.webp",
      "anim/roi_move_r2.webp",
      "anim/roi_move_r3.webp",
      "anim/roi_move_r4.webp",
      "anim/roi_move_r5.webp",
      "anim/roi_move_r6.webp",
      "anim/roi_move_r7.webp",
      "anim/roi_move_r8.webp",
      "anim/roi_move_r9.webp",
      "anim/roi_move_r10.webp",
      "anim/roi_move_r11.webp",
      "anim/roi_move_r12.webp"
     ],
     "tele": [
      "anim/roi_tele_r1.webp",
      "anim/roi_tele_r2.webp",
      "anim/roi_tele_r3.webp"
     ],
     "attack": [
      "anim/roi_attack_r1.webp",
      "anim/roi_attack_r2.webp",
      "anim/roi_attack_r3.webp",
      "anim/roi_attack_r4.webp"
     ],
     "death": [
      "anim/roi_death_r1.webp",
      "anim/roi_death_r2.webp",
      "anim/roi_death_r3.webp",
      "anim/roi_death_r4.webp",
      "anim/roi_death_r5.webp"
     ],
     "hurt": [
      "anim/roi_hurt_r1.webp",
      "anim/roi_hurt_r2.webp"
     ]
    },
    "frames": {
     "anim/roi_move_r1.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r2.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r3.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r4.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r5.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r6.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r7.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r8.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r9.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r10.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r11.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_move_r12.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_tele_r1.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_tele_r2.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_tele_r3.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_attack_r1.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_attack_r2.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_attack_r3.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_attack_r4.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_hurt_r1.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_hurt_r2.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_death_r1.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_death_r2.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_death_r3.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_death_r4.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     },
     "anim/roi_death_r5.webp": {
      "w": 197,
      "h": 166,
      "gap": -32.5
     }
    },
    "refH": 108.5,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 9.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "sorciere": {
   "name": "Maëlle",
   "folder": "bosses/maelle/",
   "concept": "bosses/maelle/CONCEPT_maelle.png",
   "placeholder": "bosses/maelle/PLACEHOLDER_maelle.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/sorciere_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/sorciere_move_r1.webp",
      "anim/sorciere_move_r2.webp",
      "anim/sorciere_move_r3.webp",
      "anim/sorciere_move_r4.webp",
      "anim/sorciere_move_r5.webp",
      "anim/sorciere_move_r6.webp",
      "anim/sorciere_move_r7.webp",
      "anim/sorciere_move_r8.webp",
      "anim/sorciere_move_r9.webp",
      "anim/sorciere_move_r10.webp",
      "anim/sorciere_move_r11.webp",
      "anim/sorciere_move_r12.webp"
     ],
     "tele": [
      "anim/sorciere_tele_r1.webp",
      "anim/sorciere_tele_r2.webp",
      "anim/sorciere_tele_r3.webp"
     ],
     "attack": [
      "anim/sorciere_attack_r1.webp",
      "anim/sorciere_attack_r2.webp",
      "anim/sorciere_attack_r3.webp",
      "anim/sorciere_attack_r4.webp"
     ],
     "hurt": [
      "anim/sorciere_hurt_r1.webp",
      "anim/sorciere_hurt_r2.webp"
     ],
     "death": [
      "anim/sorciere_death_r1.webp",
      "anim/sorciere_death_r2.webp",
      "anim/sorciere_death_r3.webp",
      "anim/sorciere_death_r4.webp",
      "anim/sorciere_death_r5.webp"
     ]
    },
    "frames": {
     "anim/sorciere_move_r1.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r2.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r3.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r4.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r5.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r6.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r7.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r8.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r9.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r10.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r11.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_move_r12.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_tele_r1.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_tele_r2.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_tele_r3.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_attack_r1.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_attack_r2.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_attack_r3.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_attack_r4.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_hurt_r1.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_hurt_r2.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_death_r1.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_death_r2.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_death_r3.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_death_r4.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     },
     "anim/sorciere_death_r5.webp": {
      "w": 369,
      "h": 297,
      "gap": -55.5
     }
    },
    "refH": 230.5,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 10.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "chevalier": {
   "name": "Chevalier sans tête",
   "folder": "bosses/headless_knight/",
   "concept": "bosses/headless_knight/CONCEPT_headless_knight.png",
   "placeholder": "bosses/headless_knight/PLACEHOLDER_headless_knight.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/chevalier_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/chevalier_move_r1.webp",
      "anim/chevalier_move_r2.webp",
      "anim/chevalier_move_r3.webp",
      "anim/chevalier_move_r4.webp",
      "anim/chevalier_move_r5.webp",
      "anim/chevalier_move_r6.webp",
      "anim/chevalier_move_r7.webp",
      "anim/chevalier_move_r8.webp",
      "anim/chevalier_move_r9.webp",
      "anim/chevalier_move_r10.webp",
      "anim/chevalier_move_r11.webp",
      "anim/chevalier_move_r12.webp"
     ],
     "tele": [
      "anim/chevalier_tele_r1.webp",
      "anim/chevalier_tele_r2.webp",
      "anim/chevalier_tele_r3.webp"
     ],
     "attack": [
      "anim/chevalier_attack_r1.webp",
      "anim/chevalier_attack_r2.webp",
      "anim/chevalier_attack_r3.webp",
      "anim/chevalier_attack_r4.webp"
     ],
     "death": [
      "anim/chevalier_death_r1.webp",
      "anim/chevalier_death_r2.webp",
      "anim/chevalier_death_r3.webp",
      "anim/chevalier_death_r4.webp",
      "anim/chevalier_death_r5.webp"
     ],
     "hurt": [
      "anim/chevalier_hurt_r1.webp",
      "anim/chevalier_hurt_r2.webp"
     ]
    },
    "frames": {
     "anim/chevalier_move_r1.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r2.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r3.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r4.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r5.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r6.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r7.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r8.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r9.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r10.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r11.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_move_r12.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_tele_r1.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_tele_r2.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_tele_r3.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_attack_r1.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_attack_r2.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_attack_r3.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_attack_r4.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_hurt_r1.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_hurt_r2.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_death_r1.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_death_r2.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_death_r3.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_death_r4.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     },
     "anim/chevalier_death_r5.webp": {
      "w": 279,
      "h": 313,
      "gap": -75.5
     }
    },
    "refH": 165.5,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 12.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "mere": {
   "name": "Mère des Ombres",
   "folder": "bosses/shadow_mother/",
   "concept": "bosses/shadow_mother/CONCEPT_shadow_mother.png",
   "placeholder": "bosses/shadow_mother/PLACEHOLDER_shadow_mother.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/mere_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/mere_move_r1.webp",
      "anim/mere_move_r2.webp",
      "anim/mere_move_r3.webp",
      "anim/mere_move_r4.webp",
      "anim/mere_move_r5.webp",
      "anim/mere_move_r6.webp",
      "anim/mere_move_r7.webp",
      "anim/mere_move_r8.webp",
      "anim/mere_move_r9.webp",
      "anim/mere_move_r10.webp",
      "anim/mere_move_r11.webp",
      "anim/mere_move_r12.webp"
     ],
     "tele": [
      "anim/mere_tele_r1.webp",
      "anim/mere_tele_r2.webp",
      "anim/mere_tele_r3.webp"
     ],
     "attack": [
      "anim/mere_attack_r1.webp",
      "anim/mere_attack_r2.webp",
      "anim/mere_attack_r3.webp",
      "anim/mere_attack_r4.webp"
     ],
     "death": [
      "anim/mere_death_r1.webp",
      "anim/mere_death_r2.webp",
      "anim/mere_death_r3.webp",
      "anim/mere_death_r4.webp",
      "anim/mere_death_r5.webp"
     ],
     "hurt": [
      "anim/mere_hurt_r1.webp",
      "anim/mere_hurt_r2.webp"
     ]
    },
    "frames": {
     "anim/mere_move_r1.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r2.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r3.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r4.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r5.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r6.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r7.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r8.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r9.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r10.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r11.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_move_r12.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_tele_r1.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_tele_r2.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_tele_r3.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_attack_r1.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_attack_r2.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_attack_r3.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_attack_r4.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_hurt_r1.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_hurt_r2.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_death_r1.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_death_r2.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_death_r3.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_death_r4.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     },
     "anim/mere_death_r5.webp": {
      "w": 309,
      "h": 302,
      "gap": -50.5
     }
    },
    "refH": 242.5,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 9.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "horreur": {
   "name": "Horreur aux mille yeux",
   "folder": "bosses/thousand_eyes/",
   "concept": "bosses/thousand_eyes/CONCEPT_thousand_eyes.png",
   "placeholder": "bosses/thousand_eyes/PLACEHOLDER_thousand_eyes.png",
   "anchor": [
    0.5,
    1.0
   ],
   "status": "art",
   "art": "anim/horreur_move_r1.webp",
   "anim": {
    "states": {
     "move": [
      "anim/horreur_move_r1.webp",
      "anim/horreur_move_r2.webp",
      "anim/horreur_move_r3.webp",
      "anim/horreur_move_r4.webp",
      "anim/horreur_move_r5.webp",
      "anim/horreur_move_r6.webp",
      "anim/horreur_move_r7.webp",
      "anim/horreur_move_r8.webp",
      "anim/horreur_move_r9.webp",
      "anim/horreur_move_r10.webp",
      "anim/horreur_move_r11.webp",
      "anim/horreur_move_r12.webp"
     ],
     "tele": [
      "anim/horreur_tele_r1.webp",
      "anim/horreur_tele_r2.webp",
      "anim/horreur_tele_r3.webp"
     ],
     "attack": [
      "anim/horreur_attack_r1.webp",
      "anim/horreur_attack_r2.webp",
      "anim/horreur_attack_r3.webp",
      "anim/horreur_attack_r4.webp"
     ],
     "hurt": [
      "anim/horreur_hurt_r1.webp",
      "anim/horreur_hurt_r2.webp"
     ],
     "death": [
      "anim/horreur_death_r1.webp",
      "anim/horreur_death_r2.webp",
      "anim/horreur_death_r3.webp",
      "anim/horreur_death_r4.webp",
      "anim/horreur_death_r5.webp"
     ]
    },
    "frames": {
     "anim/horreur_move_r1.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r2.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r3.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r4.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r5.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r6.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r7.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r8.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r9.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r10.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r11.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_move_r12.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_tele_r1.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_tele_r2.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_tele_r3.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_attack_r1.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_attack_r2.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_attack_r3.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_attack_r4.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_hurt_r1.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_hurt_r2.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_death_r1.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_death_r2.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_death_r3.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_death_r4.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     },
     "anim/horreur_death_r5.webp": {
      "w": 371,
      "h": 294,
      "gap": -75.5
     }
    },
    "refH": 215.5,
    "cycle": [
     "move"
    ],
    "fps": {
     "move": 10.0,
     "attack": 9,
     "hurt": 10
    },
    "source": "3d"
   }
  },
  "guardian": {
   "name": "Le Gardien",
   "folder": "characters/guardian/",
   "format": "sheet",
   "data": [
    "guardian.sheet.js",
    "guardian.anims.js"
   ],
   "placeholder": "characters/guardian/PLACEHOLDER_guardian_sheet.png",
   "status": "art",
   "art": "guardian_sheet.png"
  },
  "ground_forest": {
   "name": "Sol",
   "folder": "environment/forest/",
   "placeholder": "environment/forest/PLACEHOLDER_ground_forest.png",
   "anchor": [
    0,
    0
   ],
   "size": [
    256,
    256
   ],
   "tile": true,
   "lights": [],
   "status": "placeholder",
   "art": null
  },
  "ground_marsh": {
   "name": "Sol",
   "folder": "environment/marsh/",
   "placeholder": "environment/marsh/PLACEHOLDER_ground_marsh.png",
   "anchor": [
    0,
    0
   ],
   "size": [
    256,
    256
   ],
   "tile": true,
   "lights": [],
   "status": "placeholder",
   "art": null
  },
  "ground_cemetery": {
   "name": "Sol",
   "folder": "environment/cemetery/",
   "placeholder": "environment/cemetery/PLACEHOLDER_ground_cemetery.png",
   "anchor": [
    0,
    0
   ],
   "size": [
    256,
    256
   ],
   "tile": true,
   "lights": [],
   "status": "placeholder",
   "art": null
  },
  "forest_tree": {
   "name": "Arbre",
   "folder": "environment/forest/",
   "placeholder": "environment/forest/PLACEHOLDER_forest_tree.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    131,
    190
   ],
   "lights": [],
   "status": "art",
   "art": "forest_tree.png"
  },
  "forest_grass": {
   "name": "Herbe",
   "folder": "environment/forest/",
   "placeholder": "environment/forest/PLACEHOLDER_forest_grass.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    34,
    27
   ],
   "lights": [],
   "status": "art",
   "art": "forest_grass.png"
  },
  "forest_fern": {
   "name": "Fougère",
   "folder": "environment/forest/",
   "placeholder": "environment/forest/PLACEHOLDER_forest_fern.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    24,
    40
   ],
   "lights": [],
   "status": "art",
   "art": "forest_fern.png"
  },
  "forest_rock": {
   "name": "Rocher",
   "folder": "environment/forest/",
   "placeholder": "environment/forest/PLACEHOLDER_forest_rock.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    30,
    23
   ],
   "lights": [],
   "status": "art",
   "art": "forest_rock.png"
  },
  "forest_mushroom": {
   "name": "Champignon",
   "folder": "environment/forest/",
   "placeholder": "environment/forest/PLACEHOLDER_forest_mushroom.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    18,
    14
   ],
   "lights": [
    [
     0,
     -0.6,
     22,
     "110,225,240"
    ]
   ],
   "status": "art",
   "art": "forest_mushroom.png"
  },
  "forest_roots": {
   "name": "Racines",
   "folder": "environment/forest/",
   "placeholder": "environment/forest/PLACEHOLDER_forest_roots.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    40,
    29
   ],
   "lights": [],
   "status": "art",
   "art": "forest_roots.png"
  },
  "forest_log": {
   "name": "Tronc",
   "folder": "environment/forest/",
   "placeholder": "environment/forest/PLACEHOLDER_forest_log.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    56,
    26
   ],
   "lights": [],
   "status": "art",
   "art": "forest_log.png"
  },
  "marsh_tree": {
   "name": "Saule",
   "folder": "environment/marsh/",
   "placeholder": "environment/marsh/PLACEHOLDER_marsh_tree.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    137,
    190
   ],
   "lights": [],
   "status": "art",
   "art": "marsh_tree.png"
  },
  "marsh_grass": {
   "name": "Herbe",
   "folder": "environment/marsh/",
   "placeholder": "environment/marsh/PLACEHOLDER_marsh_grass.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    34,
    30
   ],
   "lights": [],
   "status": "art",
   "art": "marsh_grass.png"
  },
  "marsh_reeds": {
   "name": "Roseaux",
   "folder": "environment/marsh/",
   "placeholder": "environment/marsh/PLACEHOLDER_marsh_reeds.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    27,
    44
   ],
   "lights": [],
   "status": "art",
   "art": "marsh_reeds.png"
  },
  "marsh_rock": {
   "name": "Rocher",
   "folder": "environment/marsh/",
   "placeholder": "environment/marsh/PLACEHOLDER_marsh_rock.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    30,
    22
   ],
   "lights": [],
   "status": "art",
   "art": "marsh_rock.png"
  },
  "marsh_mushroom": {
   "name": "Champignon",
   "folder": "environment/marsh/",
   "placeholder": "environment/marsh/PLACEHOLDER_marsh_mushroom.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    18,
    15
   ],
   "lights": [
    [
     0,
     -0.6,
     22,
     "160,255,120"
    ]
   ],
   "status": "art",
   "art": "marsh_mushroom.png"
  },
  "marsh_lily": {
   "name": "Nénuphar",
   "folder": "environment/marsh/",
   "placeholder": "environment/marsh/PLACEHOLDER_marsh_lily.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    24,
    15
   ],
   "lights": [],
   "status": "art",
   "art": "marsh_lily.png"
  },
  "cemetery_tree": {
   "name": "Arbre mort",
   "folder": "environment/cemetery/",
   "placeholder": "environment/cemetery/PLACEHOLDER_cemetery_tree.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    137,
    190
   ],
   "lights": [],
   "status": "art",
   "art": "cemetery_tree.png"
  },
  "cemetery_grass": {
   "name": "Herbe",
   "folder": "environment/cemetery/",
   "placeholder": "environment/cemetery/PLACEHOLDER_cemetery_grass.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    30,
    24
   ],
   "lights": [],
   "status": "art",
   "art": "cemetery_grass.png"
  },
  "cemetery_tomb": {
   "name": "Tombe",
   "folder": "environment/cemetery/",
   "placeholder": "environment/cemetery/PLACEHOLDER_cemetery_tomb.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    32,
    44
   ],
   "lights": [],
   "status": "art",
   "art": "cemetery_tomb.png"
  },
  "cemetery_skull": {
   "name": "Crâne",
   "folder": "environment/cemetery/",
   "placeholder": "environment/cemetery/PLACEHOLDER_cemetery_skull.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    16,
    11
   ],
   "lights": [],
   "status": "art",
   "art": "cemetery_skull.png"
  },
  "cemetery_rock": {
   "name": "Rocher",
   "folder": "environment/cemetery/",
   "placeholder": "environment/cemetery/PLACEHOLDER_cemetery_rock.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    30,
    23
   ],
   "lights": [],
   "status": "art",
   "art": "cemetery_rock.png"
  },
  "brazier": {
   "name": "Brasero",
   "folder": "environment/props/",
   "placeholder": "environment/props/PLACEHOLDER_brazier.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    34,
    30
   ],
   "lights": [],
   "status": "art",
   "art": "brazier.png"
  },
  "xp_small": {
   "name": "XP",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_xp_small.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    12,
    16
   ],
   "lights": [],
   "status": "art",
   "art": "xp_small.png"
  },
  "xp_mid": {
   "name": "XP",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_xp_mid.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    14,
    19
   ],
   "lights": [],
   "status": "art",
   "art": "xp_mid.png"
  },
  "xp_big": {
   "name": "XP+",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_xp_big.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    19,
    23
   ],
   "lights": [],
   "status": "art",
   "art": "xp_big.png"
  },
  "ember_coin": {
   "name": "Braise",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_ember_coin.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    13,
    13
   ],
   "lights": [],
   "status": "art",
   "art": "ember_coin.png"
  },
  "chest": {
   "name": "Coffre",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_chest.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    26,
    25
   ],
   "lights": [],
   "status": "art",
   "art": "chest.png"
  },
  "chest_big": {
   "name": "Coffre",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_chest_big.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    32,
    31
   ],
   "lights": [],
   "status": "art",
   "art": "chest_big.png"
  },
  "potion": {
   "name": "Fiole",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_potion.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    10,
    17
   ],
   "lights": [],
   "status": "art",
   "art": "potion.png"
  },
  "purse": {
   "name": "Bourse",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_purse.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    15,
    16
   ],
   "lights": [],
   "status": "art",
   "art": "purse.png"
  },
  "magnet": {
   "name": "Aimant",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_magnet.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    18,
    12
   ],
   "lights": [],
   "status": "art",
   "art": "magnet.png"
  },
  "bomb": {
   "name": "Aube",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_bomb.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    18,
    18
   ],
   "lights": [],
   "status": "art",
   "art": "bomb.png"
  },
  "frost": {
   "name": "Givre",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_frost.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    12,
    18
   ],
   "lights": [],
   "status": "art",
   "art": "frost.png"
  },
  "relic": {
   "name": "Relique",
   "folder": "items/",
   "placeholder": "items/PLACEHOLDER_relic.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    24,
    26
   ],
   "lights": [],
   "status": "art",
   "art": "relic.png"
  },
  "marsh_puddle": {
   "name": "Flaque",
   "folder": "environment/marsh/",
   "placeholder": "environment/marsh/PLACEHOLDER_marsh_puddle.png",
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    140,
    69
   ],
   "lights": [],
   "status": "art",
   "art": "marsh_puddle.png"
  },
  "merchant": {
   "name": "Colporteur",
   "folder": "characters/npc/merchant/",
   "placeholder": "characters/npc/merchant/PLACEHOLDER_merchant.png",
   "anchor": [
    0.5,
    1.0
   ],
   "size": [
    48,
    80
   ],
   "lights": [],
   "status": "art",
   "art": "anim/merchant_1.png",
   "anim": {
    "states": {
     "idle": [
      "anim/merchant_1.png"
     ],
     "greet": [
      "anim/merchant_2.png"
     ],
     "show": [
      "anim/merchant_3.png"
     ],
     "pack": [
      "anim/merchant_4.png"
     ]
    },
    "frames": {
     "anim/merchant_1.png": {
      "w": 209,
      "h": 346,
      "gap": 0
     },
     "anim/merchant_2.png": {
      "w": 245,
      "h": 384,
      "gap": 18
     },
     "anim/merchant_3.png": {
      "w": 259,
      "h": 377,
      "gap": 23
     },
     "anim/merchant_4.png": {
      "w": 216,
      "h": 347,
      "gap": 19
     }
    },
    "refH": 346
   }
  },
  "forest_tile_ferns": {
   "name": "Dalle",
   "folder": "environment/forest/tiles/",
   "art": "tile_ferns.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "forest_tile_flagmoss": {
   "name": "Dalle",
   "folder": "environment/forest/tiles/",
   "art": "tile_flagmoss.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "forest_tile_leaves": {
   "name": "Dalle",
   "folder": "environment/forest/tiles/",
   "art": "tile_leaves.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "forest_tile_mossy": {
   "name": "Dalle",
   "folder": "environment/forest/tiles/",
   "art": "tile_mossy.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "forest_tile_roots": {
   "name": "Dalle",
   "folder": "environment/forest/tiles/",
   "art": "tile_roots.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "forest_tile_runes": {
   "name": "Dalle",
   "folder": "environment/forest/tiles/",
   "art": "tile_runes.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "forest_tile_shrooms": {
   "name": "Dalle",
   "folder": "environment/forest/tiles/",
   "art": "tile_shrooms.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "forest_tile_stone": {
   "name": "Dalle",
   "folder": "environment/forest/tiles/",
   "art": "tile_stone.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "marsh_tile_flagmoss": {
   "name": "Dalle",
   "folder": "environment/marsh/tiles/",
   "art": "tile_flagmoss.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "marsh_tile_lilies": {
   "name": "Dalle",
   "folder": "environment/marsh/tiles/",
   "art": "tile_lilies.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "marsh_tile_moss": {
   "name": "Dalle",
   "folder": "environment/marsh/tiles/",
   "art": "tile_moss.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "marsh_tile_mud": {
   "name": "Dalle",
   "folder": "environment/marsh/tiles/",
   "art": "tile_mud.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "marsh_tile_puddles": {
   "name": "Dalle",
   "folder": "environment/marsh/tiles/",
   "art": "tile_puddles.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "marsh_tile_reeds": {
   "name": "Dalle",
   "folder": "environment/marsh/tiles/",
   "art": "tile_reeds.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "marsh_tile_roots": {
   "name": "Dalle",
   "folder": "environment/marsh/tiles/",
   "art": "tile_roots.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "marsh_tile_water": {
   "name": "Dalle",
   "folder": "environment/marsh/tiles/",
   "art": "tile_water.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "cemetery_tile_drygrass": {
   "name": "Dalle",
   "folder": "environment/cemetery/tiles/",
   "art": "tile_drygrass.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "cemetery_tile_earth": {
   "name": "Dalle",
   "folder": "environment/cemetery/tiles/",
   "art": "tile_earth.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "cemetery_tile_flag": {
   "name": "Dalle",
   "folder": "environment/cemetery/tiles/",
   "art": "tile_flag.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "cemetery_tile_flagmoss": {
   "name": "Dalle",
   "folder": "environment/cemetery/tiles/",
   "art": "tile_flagmoss.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "cemetery_tile_grave": {
   "name": "Dalle",
   "folder": "environment/cemetery/tiles/",
   "art": "tile_grave.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "cemetery_tile_gravel": {
   "name": "Dalle",
   "folder": "environment/cemetery/tiles/",
   "art": "tile_gravel.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "cemetery_tile_leaves": {
   "name": "Dalle",
   "folder": "environment/cemetery/tiles/",
   "art": "tile_leaves.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "cemetery_tile_roots": {
   "name": "Dalle",
   "folder": "environment/cemetery/tiles/",
   "art": "tile_roots.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "misc_tile_ice": {
   "name": "Dalle",
   "folder": "environment/misc/tiles/",
   "art": "tile_ice.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "misc_tile_lava": {
   "name": "Dalle",
   "folder": "environment/misc/tiles/",
   "art": "tile_lava.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "misc_tile_void": {
   "name": "Dalle",
   "folder": "environment/misc/tiles/",
   "art": "tile_void.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.5
   ],
   "size": [
    128,
    64
   ],
   "iso_tile": true,
   "lights": [],
   "status": "art"
  },
  "ruin_wall_long": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_wall_long.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    124,
    129
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_wall_a": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_wall_a.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    97,
    104
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_wall_b": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_wall_b.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    95,
    101
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_arch": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_arch.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    140,
    126
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_arch_b": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_arch_b.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    103,
    95
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_arch_c": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_arch_c.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    138,
    129
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_corner_a": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_corner_a.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    109,
    92
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_corner_b": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_corner_b.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    107,
    91
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_corner_c": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_corner_c.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    100,
    87
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_corner_d": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_corner_d.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    81,
    65
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_corner_e": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_corner_e.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    74,
    62
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_door_wall": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_door_wall.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    147,
    126
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_gate": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_gate.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    83,
    91
   ],
   "lights": [],
   "status": "art"
  },
  "ruin_small_door": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "ruin_small_door.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    54,
    53
   ],
   "lights": [],
   "status": "art"
  },
  "broken_column": {
   "name": "Ruine",
   "folder": "environment/ruins/",
   "art": "broken_column.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    59,
    49
   ],
   "lights": [],
   "status": "art"
  },
  "gothic_arches": {
   "name": "Ruine",
   "folder": "environment/cemetery/",
   "art": "gothic_arches.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    195,
    170
   ],
   "lights": [],
   "status": "art"
  },
  "knight_statue": {
   "name": "Ruine",
   "folder": "environment/cemetery/",
   "art": "knight_statue.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    139,
    157
   ],
   "lights": [],
   "status": "art"
  },
  "gate_pillar": {
   "name": "Ruine",
   "folder": "environment/cemetery/",
   "art": "gate_pillar.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    94,
    89
   ],
   "lights": [],
   "status": "art"
  },
  "cage_pillar": {
   "name": "Ruine",
   "folder": "environment/cemetery/",
   "art": "cage_pillar.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    89,
    99
   ],
   "lights": [],
   "status": "art"
  },
  "tomb_candles": {
   "name": "Ruine",
   "folder": "environment/cemetery/",
   "art": "tomb_candles.png",
   "placeholder": null,
   "anchor": [
    0.5,
    0.97
   ],
   "size": [
    120,
    98
   ],
   "lights": [
    [
     0,
     -0.75,
     26,
     "255,190,110"
    ]
   ],
   "status": "art"
  }
 },
 "icons": {
  "cendres": "ui/icons/ic_cendres.webp",
  "corbeaux": "ui/icons/ic_corbeaux.webp",
  "couronne": "ui/icons/ic_couronne.webp",
  "eclat": "ui/icons/ic_eclat.webp",
  "etoile": "ui/icons/ic_etoile.webp",
  "faucille": "ui/icons/ic_faucille.webp",
  "faux": "ui/icons/ic_faux.webp",
  "follet": "ui/icons/ic_follet.webp",
  "glas": "ui/icons/ic_glas.webp",
  "graines": "ui/icons/ic_graines.webp",
  "halo": "ui/icons/ic_halo.webp",
  "lame": "ui/icons/ic_lame.webp",
  "meteores": "ui/icons/ic_meteores.webp",
  "onde": "ui/icons/ic_onde.webp",
  "orage": "ui/icons/ic_orage.webp",
  "parlement": "ui/icons/ic_parlement.webp",
  "phare": "ui/icons/ic_phare.webp",
  "rayon": "ui/icons/ic_rayon.webp",
  "ronceraie": "ui/icons/ic_ronceraie.webp",
  "vent": "ui/icons/ic_vent.webp"
 },
 "fx": {
  "fx_ame": {
   "file": "fx/fx_ame.webp",
   "n": 6,
   "w": 128,
   "h": 256,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_braise": {
   "file": "fx/fx_braise.webp",
   "n": 4,
   "w": 222,
   "h": 201,
   "mode": "add",
   "fps": 14,
   "loop": true,
   "align": "center"
  },
  "fx_cendre": {
   "file": "fx/fx_cendre.webp",
   "n": 6,
   "w": 157,
   "h": 256,
   "mode": "solid",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_crit": {
   "file": "fx/fx_crit.webp",
   "n": 4,
   "w": 181,
   "h": 256,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_eclat": {
   "file": "fx/fx_eclat.webp",
   "n": 4,
   "w": 244,
   "h": 99,
   "mode": "add",
   "fps": 14,
   "loop": true,
   "align": "right"
  },
  "fx_embrasement": {
   "file": "fx/fx_embrasement.webp",
   "n": 8,
   "w": 256,
   "h": 242,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_explosion": {
   "file": "fx/fx_explosion.webp",
   "n": 7,
   "w": 256,
   "h": 249,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_faucille": {
   "file": "fx/fx_faucille.webp",
   "n": 1,
   "w": 256,
   "h": 166,
   "mode": "solid",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_faux": {
   "file": "fx/fx_faux.webp",
   "n": 6,
   "w": 182,
   "h": 218,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "right"
  },
  "fx_follet": {
   "file": "fx/fx_follet.webp",
   "n": 4,
   "w": 126,
   "h": 256,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "bottom"
  },
  "fx_glas": {
   "file": "fx/fx_glas.webp",
   "n": 6,
   "w": 188,
   "h": 98,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_impact": {
   "file": "fx/fx_impact.webp",
   "n": 6,
   "w": 179,
   "h": 201,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_lame": {
   "file": "fx/fx_lame.webp",
   "n": 6,
   "w": 187,
   "h": 221,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "right"
  },
  "fx_meteore": {
   "file": "fx/fx_meteore.webp",
   "n": 9,
   "w": 256,
   "h": 251,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_niveau": {
   "file": "fx/fx_niveau.webp",
   "n": 6,
   "w": 141,
   "h": 256,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "bottom"
  },
  "fx_onde": {
   "file": "fx/fx_onde.webp",
   "n": 6,
   "w": 176,
   "h": 92,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_rayon": {
   "file": "fx/fx_rayon.webp",
   "n": 5,
   "w": 256,
   "h": 141,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_ronces": {
   "file": "fx/fx_ronces.webp",
   "n": 8,
   "w": 239,
   "h": 228,
   "mode": "solid",
   "fps": 14,
   "loop": false,
   "align": "center"
  },
  "fx_soin": {
   "file": "fx/fx_soin.webp",
   "n": 6,
   "w": 139,
   "h": 256,
   "mode": "add",
   "fps": 14,
   "loop": false,
   "align": "bottom"
  },
  "fx_sol_brulant": {
   "file": "fx/fx_sol_brulant.webp",
   "n": 8,
   "w": 222,
   "h": 140,
   "mode": "solid",
   "fps": 14,
   "loop": true,
   "align": "center"
  }
 }
});
