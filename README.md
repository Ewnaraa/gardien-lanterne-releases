# Gardien de la Lanterne

Survie dark fantasy en vue isométrique : tiens la lanterne allumée jusqu'à l'aube.

## Installer

Télécharge le dernier **Gardien-de-la-Lanterne-Setup-x.y.z.exe** dans [Releases](../../releases/latest) et lance-le.
L'installation ne demande pas de droits administrateur. Le jeu se met ensuite **à jour tout seul** au lancement ; ta sauvegarde est conservée.

Au premier lancement, Windows peut afficher « Windows a protégé votre ordinateur » (le jeu n'est pas signé) :
clique sur **Informations complémentaires**, puis **Exécuter quand même**.

Commandes : déplacements ZQSD / flèches, **Espace** esquive, **E** flamme, **F11** ou **Alt+Entrée** plein écran.

## Contenu du dépôt

- `app/` : le jeu (HTML Canvas + JavaScript) et ses images.
- `main.js` : la fenêtre du jeu (Electron) et la mise à jour automatique.
- `.github/workflows/release.yml` : construit l'installateur sur Windows et publie la version quand le numéro de version de `package.json` change.
