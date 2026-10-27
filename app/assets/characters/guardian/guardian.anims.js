/* =====================================================================
   Animations du Gardien (format cut-out : on anime les os du squelette)
   Ce fichier est fait pour être modifié à la main.

   - Chaque animation a une durée (idle) ou une distance par cycle (walk :
     le cycle avance avec la distance parcourue, pour limiter le glissement des pieds).
   - « side » = profil (droite ; la gauche est son miroir), « front » = face (bas),
     « back » = dos (haut). Si « back » manque, « front » est utilisé.
   - Pour chaque os : rot (degrés, sens horaire), x / y (pixels d'export,
     y vers le bas), sx / sy (échelle).
   - Une valeur peut être :
       • un nombre fixe ;
       • une liste de clés [[t, valeur], …] avec t de 0 à 1 (lissées) ;
       • une onde {amp, freq, phase, offset, abs, pos} :
           offset + amp × sin(2π·freq·t + phase°), abs = valeur absolue, pos = garde le positif ;
       • une liste d'ondes et de clés, additionnées.
   ===================================================================== */
registerAssetData('guardian.anims', {
  idle: {
    duration: 2.8, loop: true,
    side: {
      pelvis:   {y: {amp: 0.8}},
      torso:    {rot: {offset: 6, amp: 0.7}},          // il s'appuie sur son bâton
      cape:     {rot: {offset: 2, amp: 1.6, phase: 60}},
      hood:     {rot: {amp: -1.2, phase: 30}},
      staff:    {rot: -5},
      arm_l_up: {rot: {amp: 1.5, phase: 90}}
    },
    front: {
      pelvis:   {y: {amp: 0.8}},
      torso:    {rot: {amp: 0.5}},
      cape:     {rot: {amp: 1.0, phase: 60}, sy: {offset: 1, amp: 0.012, phase: 120}},
      hood:     {rot: {amp: -0.8, phase: 30}},
      arm_l_up: {rot: {amp: 1.2, phase: 90}}
    }
  },
  walk: {
    distance: 100, loop: true,               // pixels d'écran parcourus pendant un cycle (deux pas)
    side: {
      pelvis:     {y: [{amp: 3.2, abs: true}, {amp: 0.9}]},   // la 2e onde rend un pas plus lourd : légère boiterie
      thigh_l:    {rot: {amp: -24}},
      shin_l:     {rot: {amp: 30, phase: 90, pos: true}},
      thigh_r:    {rot: {amp: 24}},
      shin_r:     {rot: {amp: 30, phase: -90, pos: true}},
      torso:      {rot: {offset: 5, amp: 1.5, freq: 2}},
      cape:       {rot: {offset: 8, amp: 3, freq: 2, phase: 40}},   // la cape traîne derrière lui
      hood:       {rot: {amp: -2, freq: 2}},
      arm_l_up:   {rot: {amp: 12}},
      arm_r_up:   {rot: {amp: 4, phase: 180}},
      staff:      {rot: [[0, -14], [0.62, 12], [0.82, -4], [1, -14]],     // planté, puis relancé vers l'avant
                   y:   [[0, 0], [0.62, 0], [0.78, -5], [1, 0]]}
    },
    front: {
      pelvis:   {y: [{amp: 3.2, abs: true}, {amp: 0.9}]},
      thigh_l:  {sy: {offset: 1, amp: -0.1, phase: 90, pos: true}},
      shin_l:   {y: {amp: -6, phase: 90, pos: true}},
      thigh_r:  {sy: {offset: 1, amp: -0.1, phase: -90, pos: true}},
      shin_r:   {y: {amp: -6, phase: -90, pos: true}},
      torso:    {rot: {amp: 1.6}},
      cape:     {rot: {amp: -1.4, phase: 30}, sy: {offset: 1, amp: 0.02, freq: 2}},
      hood:     {rot: {amp: 1, freq: 2}},
      arm_l_up: {rot: {amp: 4}},
      staff:    {rot: {amp: 3}, y: [[0, 0], [0.62, 0], [0.78, -6], [1, 0]]}
    }
  }
});
