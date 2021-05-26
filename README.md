# Hello World :earth_americas:

<img src="https://media.giphy.com/media/3oz8xSjBmD1ZyELqW4/giphy.gif" alt="hello" width="400"/>

# Projet-03-oap 


![o'Coaching](/front/src/assets/logos/Logo%20de%20O_coaching%20-black%20and%20red.png?raw=true)

 [![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

## Présentation du projet 📝

Le but de l’OAP est de permettre aux __apprenants de l’école O’clock__ de suivre un coaching professionnel qualitatif pour la __recherche d’emploi__ (sous forme d’une checklist) au rythme qu’ils souhaitent, sans avoir besoin de prendre rendez-vous auprès de l’équipe coaching. De plus, il permettra à __cette équipe__ d’avoir un œil sur les __avancements de chacun__.

## Détails du projet 🔍

### Fonctionnalité 
Dés l'arrivée de l'utilisateur sur le site (étudiant ou l'équipe coaching), il devra __s'authentifier__ pour
accéder aux contenu ci-dessous.
#### Côté étudiant
* Une __page d'accueil__ présentant l'application web et l'équipe d'Oclock post-formation.
* Une __page checklist__ composée : 
 
  * Thèmes (cliquable) présentant :
       * Missions (et des astuces) cochable
  * L'avancement sera représenté par des bars de progression (globale et par thème).

* Une __barre de recherche__ pour rechercher des thèmes.

#### Côté équipe de coaching

* Une __page d'accueil__ présentant l'équipe qui a développé l'application.
* Une __barre de recherche__ pour rechercher un étudiant par le biais de son nom, prénom, promotion, spécialité et ainsi voir sa progression.
* Une __page de gestion__ pour ajouter, modifier et supprimer des thèmes, missions et astuces.

### Précision 

Notre projet utilise une __API externe de O'clock__ qui référencie tous les étudiants et professeurs de l'école (dont les membres de l'équipe post-formation).
## Statut du projet :mega:

 La première version de l'application est __maintenant disponible__ à cette [adresse](https://coachingoap.herokuapp.com/).
Toutes les fonctionnalités cités ci-dessus sont opérationnels !

:soon: Une deuxième version est prévu avec plusieurs idées d'améliorations :
     
     * La mise en place de sessions et donc de cookies pour une meilleure sécurité.
     * Quelques bugs fictives remarqué lors de la conception de la première version vont être réglé.
     * Mise en place d'une page profil pour les étudiants.
     * D'autres petites surprises

## Stack technique :wrench:

* [NodeJS 15.14.0](https://nodejs.org/fr/download/)
* [NPM 7.7.4](https://www.npmjs.com/get-npm)
* [PostgreSQL 12.5](https://www.postgresql.org/download/)
* [Sqicth 0.9999](https://sqitch.org/download/)

Ces outils sont nécessaires au bon fonctionnement de l'application. __Installez-les avant de continuer__.

## Installation :construction_worker:

__Cloner__ le repository en local (pour l'instant c'est la branche "develop" qui sera cloné).

```bash
git clone <url de ce repo>
```
Puis il faut se diriger dans le dossier *front* et __installer les dépendances__ nécessaire.


```bash
cd front/ && yarn
```

Après la fin du téléchargement des packages, il faut revenir à la racine du projet et __installer les packages npm__


```bash
cd ../ && npm i
```

Pour finir, __créer__ [une base de données](https://www.postgresql.org/docs/12/app-createdb.html) PostgreSQL et __déployer__ le projet Sqitch.

```bash
createdb oap
sqitch deploy db:pg:oap
```
Penser à __configurer__ PostgreSQL (ou à fournir les variables d'environnement nécessaires) pour que les commandes createdb et sqitch puisse s'exécuter correctement.

Si __la manipulation ne fonctionne pas__, il faut se connecter avec l'utilisateur *postgres* : 

```bash
sudo -i -u postgres
psql
```
A partir d'ici vous pouvez __créer__ votre [database](https://www.postgresql.org/docs/12/sql-createdatabase.html) et ainsi __exécuter__ la commande sqitch.

## Importer des données :floppy_disk:

Si vous voulez faire des tests, __lancer__ cette commande :

```bash
psql -d oap -f /server/data/import.sql
```

## Lancement :rocket:

Il faut lancer le __script__ suivant à la racine (plus d'informations dans la partie *scripts* de ce [fichier](/package.json)) :
```bash
npm run dev
```

## Contributeurs <img src="https://emoji.slack-edge.com/T01F46EL0U8/quill1/0755fe36a5bb4bbf.png" alt="quill" width="30"/>

Product Owner: [Lucas Chouillou (alias xuxu278)](https://github.com/lucasquill)

Scrum master: [Aurélie Chicart](https://github.com/aureliechicart)

Lead dev Front: [Madine BA](https://github.com/mabakayaro)

Lead dev Back: [Julie Anani](https://github.com/Julie-ANANI)

Git Master: [Mahanora Tetuanui](https://github.com/MahanoraTetuanui)
