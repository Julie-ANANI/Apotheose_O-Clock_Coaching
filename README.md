# Projet-03-oap

![o'Coaching](https://raw.githubusercontent.com/O-clock-Quill/projet-03-oap/40d10cada074fbca57b1c8cfaf749b87edcbe84d/front/src/assets/logos/Logo%20de%20O_coaching%20-%20green%20and%20red%20svg.svg?token=AR3OJNROLY23VFE2JWQV43TATVOIE)
 [![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

## Présentation du projet 

Le but de l’OAP est de permettre aux apprenants O’clock de suivre un coaching professionnel qualitatif (sous forme d’une checklist) au rythme qu’ils souhaitent, sans avoir besoin de prendre rdv auprès de l’équipe Placement. De plus, il permettra à l’équipe Placement d’avoir un œil sur les avancements de chacun.


## Détails du projet 

### Fonctionnalité 

#### Côté étudiant
* La checklist sera composée : 

  * Thème
  * Mission (et des astuces)

* L'avancement sera représenté par des bars de progression (globale et par thème).
* Rechercher des thèmes

#### Côté équipe de Placement

* Possibilité de rechercher un étudiant et de voir sa progression
* Ajouter, modifier et supprimer des thèmes, missions et astuces

### Précision 
Notre projet utilise une __API externe d'oclock__ qui référencie tous les étudiant et professeur de l'école.
## Statut du projet
 Le projet est en cours de __developpement__.

 Néanmoins, les routes du back qui se trouvent [ici](https://github.com/O-clock-Quill/projet-03-oap/blob/develop/server/app/router.js) sont fonctionnels et peuvent déservir des données.
Une documentation précise de celles-ci sera bientôt disponible avec [swagger](https://swagger.io/) (plus d'information dans les prochains jours).

L'interface [front](https://github.com/O-clock-Quill/projet-03-oap/tree/develop/front) est aussi fonctionnel comme la page d'accueil, l'affichage des thèmes et des missions avec leurs astuces. La bar de progression est fictive pour le moment et n'a pas de lien avec un étudiant donné.

Plusieurs feature sont en cours dont une est __importante__: la page login/connexion.

Un __déploiement__ du projet sur [Heroku](https://www.heroku.com/) est prévu la semaine prochaine.


 

## Stack technique

* [NodeJS 15.14.0](https://nodejs.org/fr/download/)
* [NPM 7.7.4](https://www.npmjs.com/get-npm)
* [PostgreSQL 12.5](https://www.postgresql.org/download/)
* [Sqicth 0.9999](https://sqitch.org/download/)

Ces outils sont nécessaires au bon fonctionnement de l'app. Installez-les avant de continuer.

## Installation 

Cloner le repository en local (c'est la branche "develop" qui sera cloné).

```bash
git clone <url de ce repo>
```
Puis il faut se diriger dans le dossier *front* et installer les dépendances nécessaire.


```bash
cd front/ && yarn
```

Après la fin du téléchargement des packages, il faut se diriger vers le dossier 'server'.


```bash
cd ../server && npm i
```

Pour finir, revenir à la racine du projet et créer [une base de données](https://www.postgresql.org/docs/12/app-createdb.html) PostgreSQL et déployer le projet Sqitch.

```bash
createdb oap
sqitch deploy db:pg:oap
```
Penser à configurer PostgreSQL (ou à fournir les variables d'environnement nécessaires) pour que les commandes createdb et sqitch puisse s'exécuter correctement.

Si la manipulation ne fonctionne pas, il faut se connecter avec l'utilisateur *postgres* : 


```bash
sudo -i -u postgres
psql
```
A partir d'ici vous pouvez créer votre [database](https://www.postgresql.org/docs/12/sql-createdatabase.html).

## Importer des données

Si vous voulez faire des tests, lancer cette commande :

```bash
psql -d oap -f /server/data/import.sql
```

## Lancement

Il faut se diriger vers le dossier *server* et lancer le script suivant :
```bash
cd server/ && npm start
```


