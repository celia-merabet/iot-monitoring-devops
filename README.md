# IoT Monitor – DevOps Micro-Services Stack

> **⚠️ MEMBRES DU GROUPE :**
>
> * **Celia Merabet** (DevOps / Infra)



## 1. Présentation du Projet

Ce projet consiste à déployer une **plateforme de monitoring IoT** permettant de visualiser des données simulées de capteurs (température, humidité, état).

L’objectif principal est de mettre en œuvre une **architecture micro-services DevOps**, conteneurisée avec Docker, sécurisée via un reverse proxy et rendue accessible publiquement grâce à un tunnel Cloudflare.

L’accent est mis sur l’infrastructure et les bonnes pratiques DevOps plutôt que sur la complexité applicative.

### Fonctionnalités principales

* Tableau de bord web pour visualiser les données de capteurs
* API backend pour la réception des données IoT simulées
* Base de données persistante
* Interface d’administration de la base de données
* Accès public sécurisé via HTTPS (Cloudflare Tunnel)

**Lien accessible (si tunnel actif) :**
[https://iot-monitoring-devops.trycloudflare.com](https://iot-monitoring-devops.trycloudflare.com)

**Screenshot de l'application déployée :**
![](screenshot.jpg)



## 2. Architecture Technique

### Schéma d'infrastructure

*Ce schéma est généré dynamiquement à partir du fichier `architecture.puml` présent dans ce dépôt.*


### Description des services

| Service      | Image Docker     | Rôle                          | Port Interne |
| :----------- | :--------------- | :---------------------------- | :----------- |
| **Proxy**    | `caddy:latest`   | Reverse Proxy & Routage       | 80           |
| **Frontend** | `nginx:alpine`   | Dashboard Web IoT             | 80           |
| **API**      | `node:18-alpine` | API de collecte des données   | 3000         |
| **DB**       | `postgres:15`    | Base de données persistante   | 5432         |
| **Admin**    | `adminer`        | Administration BDD            | 8080         |
| **Tunnel**   | `cloudflared`    | Exposition Internet sécurisée | N/A          |



## 3. Guide d'installation

### Prérequis

* Docker
* Docker Compose
* Compte Cloudflare avec un tunnel configuré

### Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/celia-merabet/iot-monitoring-devops.git
cd iot-monitoring-devops
```

2. Lancer la stack :

```bash
docker compose up -d
```

3. Accéder aux services :

* Frontend	http://localhost
* API	http://localhost:3000/api/status
* Adminer	http://localhost:8080


4. Obtenir l'URL publique Cloudflare :

```bash
docker compose logs -f tunnel
```



## 4. Méthodologie & Transparence IA

### Organisation

Projet réalisé **en autonomie**, avec une démarche progressive :

* Analyse du cahier des charges
* Conception de l’architecture micro-services
* Mise en place des conteneurs Docker
* Configuration du reverse proxy et du tunnel Cloudflare
* Tests et documentation

### Utilisation de l'IA

**Outils utilisés :**

* Capilote

**Usage :**

* Aide à la compréhension des concepts Docker, Cloudflare Tunnel et Caddy
* Débogage d’erreurs de configuration

**Apprentissage :**

L’IA a été utilisée comme un outil d’assistance. Les configurations ont été comprises, testées et ajustées manuellement par moi



## 5. Difficultés rencontrées & Solutions

* **Problème :** Les services ne communiquaient pas correctement entre eux.

  * **Solution :** Vérification des noms de services Docker et du réseau interne.

* **Problème :** Perte des données après redémarrage des conteneurs.

  * **Solution :** Ajout d’un volume Docker pour assurer la persistance de la base de données.

* **Problème :** Application non accessible depuis Internet.

  * **Solution :** Mise en place et configuration correcte du tunnel Cloudflare.



##  Conclusion

Ce projet démontre la capacité à concevoir et déployer une **infrastructure DevOps micro-services complète**, sécurisée et conforme aux bonnes pratiques, répondant pleinement aux exigences du projet final.

## Ressources & Liens Utiles
Documentation officielle
•	Docker : https://docs.docker.com/
•	Docker Compose : https://docs.docker.com/compose/
•	Node.js : https://nodejs.org/en/docs/
•	PostgreSQL : https://www.postgresql.org/docs/
•	Adminer : https://www.adminer.org/
•	Caddy (reverse proxy) : https://caddyserver.com/docs/
•	Cloudflare Tunnel (cloudflared) : https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/
Tutoriels et guides utiles
•	Docker + Node.js + PostgreSQL : https://node-postgres.com/
•	Créer un Dockerfile pour Node.js : https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
•	PlantUML pour diagrammes d’architecture : https://plantuml.com/fr/
•	Exemples Docker Compose multi-services : https://docs.docker.com/compose/gettingstarted/
Forums et communautés
•	Stack Overflow : https://stackoverflow.com/

