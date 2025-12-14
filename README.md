# 📚 Application de Gestion d’une École Privée

## 📝 Description du projet

Ce projet consiste à développer une **application web de gestion d’une école privée**. Elle permet de gérer les utilisateurs, les cours, les notes et les évaluations selon **4 rôles principaux : Admin, Teacher, Student et Parent**.

L’application est développée en utilisant des technologies **Frontend modernes (Angular)** et un **Backend RESTful (Node.js / Express.js)** avec une base de données **MongoDB**.

Un template graphique sous le thème **Education / School / Management** est intégré pour assurer une interface professionnelle et intuitive.

---

## 🎯 Objectifs

* Gérer efficacement une école privée
* Centraliser la gestion des cours, enseignants et étudiants
* Assurer un suivi clair des notes et évaluations
* Proposer des dashboards adaptés à chaque rôle

---

## 🛠️ Technologies utilisées

### Frontend

* HTML5
* CSS3
* Bootstrap
* JavaScript
* TypeScript
* Angular

### Backend

* Node.js
* Express.js
* API REST

### Base de données

* MongoDB

---

## 👥 Acteurs et fonctionnalités

### 🔑 Admin

L’admin est l’acteur principal qui gère toute la plateforme.

Fonctionnalités :

* Consulter tous les utilisateurs (Teachers, Students, Parents)
* Supprimer des utilisateurs
* Consulter et gérer tous les cours
* Affecter des students à un teacher dans un cours précis
* Valider ou refuser les comptes des teachers

---

### 👨‍🏫 Teacher

Le teacher gère ses cours et l’évaluation des students.

Fonctionnalités :

* Ajouter, modifier et supprimer un cours
* Consulter ses cours
* Voir les students affectés à ses cours par l’admin
* Attribuer une note à chaque student
* Donner une évaluation pour chaque student

---

### 🎓 Student

Le student consulte ses informations académiques.

Fonctionnalités :

* Consulter les cours affectés par l’admin
* Voir les notes obtenues
* Consulter les évaluations données par les teachers

---

### 👪 Parent

Le parent a un accès limité aux informations de ses enfants.

Fonctionnalités :

* Consulter la liste des cours et des teachers
* Rechercher les cours de son enfant via le numéro de téléphone
* Consulter les notes et évaluations de son enfant

---

## 📄 Pages principales

### 🏠 Page d’accueil

* Présentation de quelques cours
* Présentation de quelques teachers
* Header et Footer avec informations générales

### 🔐 Page de connexion

* Téléphone
* Mot de passe
* Validation des champs obligatoires
* Affichage de messages d’erreur si les champs sont vides

---

### 📝 Pages d’inscription

#### Inscription Teacher

* First Name
* Last Name
* Email
* Téléphone
* Adresse
* Mot de passe
* Spécialité
* CV (format PDF)
* Contrôles de saisie et validations

#### Inscription Student

* First Name
* Last Name
* Email
* Téléphone
* Adresse
* Mot de passe
* Photo de profil (format image)
* Contrôles de saisie et validations

#### Inscription Parent

* First Name
* Last Name
* Email
* Téléphone
* Adresse
* Mot de passe
* Téléphone de l’enfant
* Inscription possible uniquement si le numéro de l’enfant existe

---

## 📊 Dashboards

### Dashboard Teacher

* Gestion des cours (CRUD)
* Consultation des students par cours
* Attribution des notes et évaluations

### Dashboard Student

* Liste des cours affectés
* Consultation des notes et évaluations par cours

### Dashboard Parent

* Consultation des cours et teachers
* Recherche par téléphone de l’enfant
* Accès aux notes et évaluations

---

## 🔎 Fonctionnalités supplémentaires

* Recherche des teachers par spécialité
* Utilisation d’un **Template-Driven Form (TDF)** avec champs obligatoires

---

## 🧩 Concepts Angular utilisés

* `@Input()`
* `@Output()`
* Directives structurelles (`*ngIf`, `*ngFor`)
* Directives d’attributs (`[ngClass]`, `[ngStyle]`)
* Routing Angular
* Services et communication avec API

---

## ▶️ Lancer le projet

### Frontend

```bash
npm install
ng serve
```

### Backend

```bash
npm install
npm run dev
```

---

## 📌 Remarque

Ce projet respecte le **cahier des charges pédagogique** et vise à démontrer la maîtrise des technologies **Full Stack JavaScript** appliquées à un cas réel de gestion scolaire.

---

## 👩‍💻 Auteur

Projet réalisé dans un cadre académique pour l’apprentissage du développement web Full Stack.
