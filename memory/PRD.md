# PRD - Délices et Trésors d'Algérie

## Aperçu du projet
Site e-commerce pour la vente de produits algériens (dattes Deglet Nour, huile d'olive de Kabylie).

**URL principale**: https://ecommerce-admin-29.emergent.host/

## Stack technique
- **Frontend**: React 18 + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI (Python)
- **Base de données**: MongoDB
- **Authentification**: JWT

## Fonctionnalités implémentées ✅

### E-commerce
- [x] Catalogue de produits avec filtres et recherche
- [x] Gestion des catégories
- [x] Panier d'achat
- [x] Processus de commande
- [x] Gestion des stocks
- [x] Codes promo

### Administration
- [x] Tableau de bord avec statistiques
- [x] Gestion des produits (CRUD)
- [x] Gestion des catégories
- [x] Gestion des commandes
- [x] Gestion des utilisateurs
- [x] Paramètres du site (nom, slogan, contacts)
- [x] Personnalisation visuelle (couleurs, polices)
- [x] Bibliothèque média
- [x] Gestion des bannières
- [x] Navigation personnalisable
- [x] Paramètres SEO

### Utilisateurs
- [x] Inscription / Connexion
- [x] Mot de passe oublié (avec email)
- [x] Profil utilisateur
- [x] Historique des commandes

### Contenu
- [x] Page d'accueil dynamique
- [x] Page histoire
- [x] Page contact
- [x] Pages personnalisées
- [x] Témoignages clients
- [x] Newsletter

## Architecture des fichiers

```
/app/
├── backend/
│   ├── server.py           # API FastAPI principale
│   ├── admin_tools.py      # Gestion admin CLI
│   ├── email_service.py    # Service d'envoi d'emails
│   └── uploads/            # Fichiers uploadés
├── frontend/
│   ├── src/
│   │   ├── App.js          # Point d'entrée React
│   │   ├── components/     # Composants UI
│   │   └── contexts/       # Contextes React (Cart, Customization)
│   └── public/
│       └── downloads/      # Archives téléchargeables
```

## Tâches futures (Backlog)

### P1 - Priorité haute
- [ ] Éditeur CSS personnalisé avancé
- [ ] Système de thèmes (sauvegarder/charger presets)

### P2 - Priorité moyenne
- [ ] Rôles utilisateurs granulaires (admin, éditeur, etc.)
- [ ] Intégration paiement (Stripe)
- [ ] Notifications push

### P3 - Priorité basse
- [ ] Application mobile
- [ ] Multi-langue complet (arabe, anglais)
- [ ] Analytics avancés

## Dernière mise à jour
**Date**: 11 janvier 2025

**Changements**:
- Dissociation du domaine mazigho.com
- Configuration pour utiliser ecommerce-admin-29.emergent.host
- Création des archives ZIP pour déploiement externe (Netlify, Heroku, etc.)
- Mise à jour des fichiers .env

## Comptes admin
- Email: yacbhll@gmail.com
