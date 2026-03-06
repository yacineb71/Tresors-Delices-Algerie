# PRD - Délices & Trésors d'Algérie

## Aperçu du projet
Site e-commerce premium pour la vente de produits algériens authentiques.
**Marque** : Maison suisse valorisant l'excellence du terroir algérien
**Fondateur** : Yacine Bahloul

**URL principale**: https://ecommerce-admin-29.emergent.host/

## Positionnement
- **Style** : "Mediterranean Chic" - Premium, élégant, pas folklorique
- **Couleurs** : Vert olive profond, beige sable, or subtil
- **Cibles** : Amateurs de gastronomie, cadeaux premium, B2B (restaurants, épiceries fines)

## Stack technique
- **Frontend**: React 18 + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI (Python)
- **Base de données**: MongoDB
- **Authentification**: JWT

## Fonctionnalités implémentées ✅

### Pages principales (Refonte 6 Mars 2025)
- [x] **Page d'accueil moderne** - Hero plein écran avec bannière utilisateur, sections marques, galerie lifestyle
- [x] **Page Aswel** (`/marques/aswel`) - Marque verte Kabylie
- [x] **Page Baghlia KIARED** (`/marques/baghlia`) - Premium noir/or, médaille Dubai
- [x] **Page Dahbia** (`/marques/dahbia`) - Ultra premium beige/doré
- [x] **Page Coffrets** (`/coffrets`) - 3 coffrets avec vrais prix CHF
- [x] **Page Notre Histoire** (`/notre-histoire`) - Histoire de Yacine Bahloul, valeurs, terroirs

### Marques intégrées
| Marque | Positionnement | Origine |
|--------|----------------|---------|
| Aswel | Authentique tradition | Kabylie |
| Baghlia KIARED | Premium 🏆 Médaille d'Or Dubai 2024 | Algérie |
| Dahbia | Ultra Premium "L'Or Liquide" | Algérie |

### Coffrets avec prix
| Coffret | Contenu | Prix |
|---------|---------|------|
| Découverte | 250ml Huile + 500g Dattes + 1 épice | 59 CHF |
| Héritage | 500ml Huile + 1kg Dattes + 2 épices | 79 CHF |
| Prestige | Dahbia + Dattes branchées + 4 épices + miel | 129 CHF |

### E-commerce
- [x] Catalogue de produits avec filtres
- [x] Panier d'achat
- [x] Processus de commande
- [x] Gestion des stocks

### Administration
- [x] Tableau de bord avec statistiques
- [x] Gestion des produits (CRUD)
- [x] Gestion des catégories
- [x] Gestion des commandes
- [x] Paramètres du site
- [x] Bibliothèque média

## Images utilisateur intégrées (25 images)
Toutes les images fournies par l'utilisateur sont intégrées dans :
- Hero de la page d'accueil
- Pages marques (Aswel, Baghlia, Dahbia)
- Page Notre Histoire
- Page Coffrets
- Galerie lifestyle
- Section Dattes

## Fichiers créés cette session (6 Mars 2025)
- `/app/frontend/src/components/ModernHomePage.js` - Nouvelle page d'accueil
- `/app/frontend/src/components/BrandAswelPage.js` - Page marque Aswel
- `/app/frontend/src/components/BrandBaghliaPage.js` - Page marque Baghlia
- `/app/frontend/src/components/BrandDahbiaPage.js` - Page marque Dahbia
- `/app/frontend/src/components/CoffretsPage.js` - Page coffrets cadeaux
- `/app/frontend/src/components/NotreHistoirePage.js` - Page histoire

## Tâches futures (Backlog)

### P1 - Priorité haute
- [ ] Connecter les coffrets au système de panier
- [ ] Ajouter les vrais produits dans la boutique
- [ ] Intégration paiement (Stripe ou Twint pour Suisse)

### P2 - Priorité moyenne
- [ ] Chatbot IA conseiller
- [ ] QR Code traçabilité
- [ ] Programme de fidélité

### P3 - Priorité basse
- [ ] Intégration WhatsApp
- [ ] Newsletter automatisée
- [ ] Multi-devise (CHF/EUR)

## Comptes admin
- Email: admin@delices-algerie.com
- Password: Admin2024!

## Dernière mise à jour
**Date**: 6 Mars 2025

**Changements majeurs**:
- Refonte complète de la page d'accueil avec 25 images utilisateur
- Création de 3 pages marques (Aswel, Baghlia, Dahbia)
- Création page Coffrets avec prix en CHF
- Création page Notre Histoire avec story Yacine Bahloul
- Style "Mediterranean Chic" appliqué
