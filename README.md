[![Openclassrooms](https://1to1progress.fr/wp-content/uploads/2019/05/openclassrooms-e1557761236158.png)](https://openclassrooms.com)

## Parcours Développeur Web - Projet 6 : Construisez une API sécurisée pour une application d'avis gastronomiques

### Livrables
* le lien vers votre dépôt Git public contenant le code de l’API.

### :warning: Prérecquis
 - Avoir installé NodeJS : https://nodejs.org.

## :rocket: [Windows] Installation rapide

- Ouvrez un terminal et placez-vous dans le repertoire ou vous souhaitez télécharger l'application :
 - `git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git frontend ; cd frontend ; npm install ; npm install -g npm@latest ; npm install -g @angular/cli@7.0.2 ; npm install node-sass@4.12.0 --no-save --unsafe-perm ; npm start`
- Ouvrez un nouveau terminal à la racine du projet :
 - `git clone https://github.com/lifeae/OC_WD_P6 backend ; cd backend ; npm install ; code -r .env ; mkdir images ; node server`
 - http://localhost:4200
  
### :floppy_disk: Partie Back
- Ouvrez un nouveau terminal à la racine de l'application,
- Téléchargez la partie back de l'application :
  - `git clone https://github.com/lifeae/OC_WD_P6 backend`
- Déplacez vous à l'intérieur du dossier crée :
  - `cd backend`
- Installez les librairies nécessaires pour faire fonctionner le serveur front :
  - `npm install`
- Créez le dossier qui recevra vos images :
  - `mkdir images`
- Lancez le serveur
  - `nodemon server`

#### Bonne visite sur : http://localhost:4200/ ! :white_check_mark:

## :wrench: Installation classique
 
### :computer: Partie Front 
- Ouvrez un terminal et placez-vous dans le repertoire ou vous souhaitez télécharger l'application,
- Téléchargez la partie front de l'application :
  - `git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git frontend`
- Déplacez vous à l'intérieur du dossier crée :
  - `cd frontend`
- Installez les librairies nécessaires pour faire fonctionner le serveur front :
  - `npm install`
  - `npm install -g npm@latest`
  - `npm install -g @angular/cli@7.0.2`
  - `npm install node-sass@4.12.0 --no-save --unsafe-perm`
- Lancez le serveur :
  - `npm start`
  
### :floppy_disk: Partie Back
- Ouvrez un nouveau terminal à la racine de l'application,
- Téléchargez la partie back de l'application :
  - `git clone https://github.com/lifeae/OC_WD_P6 backend`
- Déplacez vous à l'intérieur du dossier crée :
  - `cd backend`
- Installez les librairies nécessaires pour faire fonctionner le serveur front :
  - `npm install`
- Créez un fichier .env pour stocker vos données sensibles :
  - `code -r .env`
- Pour l'exemple, voici les informations de connexion du compte invité pour la base de données et un token pour le chiffrement de votre mot de passe.
```
DB_USER=guest
DB_PASS=0RLV2dnqHXuzTe6T
TOKEN=0penClassrooms
```
- Copiez-collez ces lignes dans le fichier .env et enregistrez le document
- Créez le dossier qui recevra vos images :
  - `mkdir images`
- Lancez le serveur
  - `node server`
#### Bonne visite sur : http://localhost:4200/ ! :white_check_mark:
