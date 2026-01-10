# 📦 DOCUMENTATION TECHNIQUE COMPLÈTE
## Migration "Délices et Trésors d'Algérie" hors Emergent

---

## 1️⃣ STRUCTURE DU PROJET

```
/app/
├── backend/                          # 🔙 BACKEND (FastAPI)
│   ├── server.py                     # Application principale FastAPI
│   ├── email_service.py              # Service d'envoi d'emails (Gmail SMTP)
│   ├── admin_tools.py                # Scripts CLI pour gestion admin
│   ├── requirements.txt              # Dépendances Python
│   ├── .env                          # Variables d'environnement (NE PAS COMMIT)
│   └── uploads/                      # Fichiers uploadés (images, médias)
│
├── frontend/                         # 🎨 FRONTEND (React)
│   ├── public/
│   │   └── index.html               # Point d'entrée HTML
│   ├── src/
│   │   ├── App.js                   # Application principale + Routes + Contextes
│   │   ├── App.css                  # Styles globaux + Variables CSS
│   │   ├── index.js                 # Point d'entrée React
│   │   ├── index.css                # Styles Tailwind
│   │   ├── components/              # Composants React (voir liste ci-dessous)
│   │   ├── contexts/                # Contextes React (Cart, Customization)
│   │   ├── hooks/                   # Hooks personnalisés (use-toast)
│   │   └── lib/                     # Utilitaires (utils.js pour cn())
│   ├── package.json                 # Dépendances Node.js
│   ├── yarn.lock                    # Versions exactes des dépendances
│   ├── tailwind.config.js           # Configuration Tailwind CSS
│   ├── craco.config.js              # Configuration Create React App
│   ├── postcss.config.js            # Configuration PostCSS
│   └── .env                         # Variables d'environnement frontend
│
└── .gitignore                       # Fichiers ignorés par Git
```

### Composants Frontend (frontend/src/components/)

| Fichier | Type | Description |
|---------|------|-------------|
| `AdminLayout.js` | Admin | Layout avec sidebar pour toutes les pages admin |
| `AdminDashboard.js` | Admin | Tableau de bord admin |
| `AdminProducts.js` | Admin | Gestion des produits |
| `AdminProductForm.js` | Admin | Formulaire création/édition produit |
| `AdminCategories.js` | Admin | Gestion des catégories |
| `AdminOrders.js` | Admin | Gestion des commandes |
| `AdminUsers.js` | Admin | Gestion des utilisateurs |
| `AdminSettings.js` | Admin | Paramètres du site (contacts multiples) |
| `AdminCustomization.js` | Admin | Personnalisation (couleurs, polices, logo) |
| `AdminMediaLibrary.js` | Admin | Bibliothèque de médias |
| `AdminPages.js` | Admin | Gestion des pages personnalisées |
| `AdminBanners.js` | Admin | Gestion des bannières |
| `AdminPromoCodes.js` | Admin | Gestion des codes promo |
| `AdminInventory.js` | Admin | Gestion des stocks |
| `AdminSEO.js` | Admin | Paramètres SEO |
| `AdminNavigation.js` | Admin | Gestion du menu de navigation |
| `AdminFooter.js` | Admin | Gestion du footer |
| `AdminTestimonials.js` | Admin | Gestion des témoignages |
| `AdminContact.js` | Admin | Messages de contact reçus |
| `AdminContactInfo.js` | Admin | Infos de contact du site |
| `AdminHistory.js` | Admin | Contenu historique |
| `AdminAnalytics.js` | Admin | Statistiques |
| `Header.js` | Public | En-tête du site |
| `Footer.js` | Public | Pied de page |
| `HomePage.js` | Public | Page d'accueil |
| `ShopPage.js` | Public | Boutique (liste produits) |
| `CheckoutPage.js` | Public | Page de commande |
| `Cart.js` | Public | Panier (sidebar) |
| `AuthPage.js` | Auth | Connexion / Inscription |
| `ForgotPasswordPage.js` | Auth | Mot de passe oublié |
| `ProfilePage.js` | Auth | Profil utilisateur |
| `AccountSettings.js` | Auth | Paramètres du compte |
| `MyOrders.js` | Auth | Mes commandes |
| `ContactPage.js` | Public | Page de contact |
| `HistoryPage.js` | Public | Histoire de l'entreprise |
| `PromotionsPage.js` | Public | Promotions actives |
| `TestimonialsPage.js` | Public | Témoignages clients |
| `CustomPageView.js` | Public | Affichage pages personnalisées |
| `ImageUpload.js` | Util | Composant d'upload d'images |
| `ScrollToTop.js` | Util | Scroll en haut lors de la navigation |
| `ui/*` | UI | Composants Shadcn/UI (40+ composants) |

---

## 2️⃣ STACK TECHNIQUE

### Frontend
| Technologie | Version | Usage |
|-------------|---------|-------|
| **React** | 18.x | Framework UI |
| **React Router DOM** | 6.x | Routing |
| **Tailwind CSS** | 3.x | Styling |
| **Shadcn/UI** | Latest | Composants UI (Radix) |
| **Axios** | 1.x | Requêtes HTTP |
| **Lucide React** | Latest | Icônes |
| **React Hook Form** | 7.x | Formulaires |
| **Zod** | 3.x | Validation |
| **CRACO** | 7.x | Configuration CRA |

### Backend
| Technologie | Version | Usage |
|-------------|---------|-------|
| **Python** | 3.11.14 | Runtime |
| **FastAPI** | 0.110.1 | Framework API |
| **Uvicorn** | 0.25.0 | Serveur ASGI |
| **Motor** | 3.3.1 | Driver MongoDB async |
| **PyMongo** | 4.5.0 | Driver MongoDB |
| **Pydantic** | 2.11.7 | Validation données |
| **PyJWT** | 2.10.1 | Tokens JWT |
| **Passlib** | 1.7.4 | Hashage mots de passe |
| **bcrypt** | 4.3.0 | Algorithme de hash |
| **python-multipart** | 0.0.20 | Upload fichiers |
| **aiofiles** | 25.1.0 | I/O async fichiers |

### Base de données
| Technologie | Version | Usage |
|-------------|---------|-------|
| **MongoDB** | 6.x | Base de données NoSQL |

### Services tiers
| Service | Usage | Requis ? |
|---------|-------|----------|
| **Gmail SMTP** | Envoi d'emails (commandes, reset password) | ✅ Oui |

---

## 3️⃣ RUNTIME & BUILD

### Versions requises
```bash
Python: 3.11+
Node.js: 20.x
Yarn: 1.22+
MongoDB: 6.x
```

### Gestionnaires de paquets
- **Backend**: pip (requirements.txt)
- **Frontend**: yarn (package.json)

### Commandes d'installation

```bash
# Backend
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou: venv\Scripts\activate  # Windows
pip install -r requirements.txt

# Frontend
cd frontend
yarn install
```

### Commandes de build

```bash
# Frontend (production build)
cd frontend
yarn build
# Génère le dossier build/ à déployer
```

### Commandes de démarrage

```bash
# Backend (développement)
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Backend (production)
uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4

# Frontend (développement)
cd frontend
yarn start

# Frontend (production) - servir le build statique
serve -s build -l 3000
# ou avec nginx/apache
```

---

## 4️⃣ VARIABLES D'ENVIRONNEMENT

### Backend (.env)

| Variable | Description | Exemple |
|----------|-------------|---------|
| `MONGO_URL` | URL de connexion MongoDB | `mongodb://localhost:27017` ou `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `DB_NAME` | Nom de la base de données | `delices_algerie` |
| `CORS_ORIGINS` | Origines autorisées (CORS) | `*` ou `https://monsite.com` |
| `JWT_SECRET_KEY` | Clé secrète pour tokens JWT | `une-longue-chaine-aleatoire-securisee` |
| `GMAIL_USER` | Email Gmail pour envoi | `votre-email@gmail.com` |
| `GMAIL_APP_PASSWORD` | Mot de passe d'application Gmail | `xxxx xxxx xxxx xxxx` |
| `FRONTEND_URL` | URL du frontend (pour emails) | `https://monsite.com` |

### Frontend (.env)

| Variable | Description | Exemple |
|----------|-------------|---------|
| `REACT_APP_BACKEND_URL` | URL de l'API backend | `https://api.monsite.com` |
| `GENERATE_SOURCEMAP` | Générer les sourcemaps | `false` (production) |

---

## 5️⃣ BASE DE DONNÉES

### Hébergement actuel
- **Type**: MongoDB 6.x
- **Hébergement**: Local sur le container Emergent (`mongodb://localhost:27017`)
- **Pour migration**: Utiliser [MongoDB Atlas](https://www.mongodb.com/atlas) (gratuit)

### Collections MongoDB (21 collections)

| Collection | Description | Champs principaux |
|------------|-------------|-------------------|
| `users` | Utilisateurs | id, email, full_name, hashed_password, role, is_active |
| `products` | Produits | id, name{fr,en,ar}, description, price, stock, category_id, images |
| `categories` | Catégories | id, name{fr,en,ar}, description, image_url, is_active |
| `orders` | Commandes | id, customer_info, items, total, status, created_at |
| `banners` | Bannières | id, title{fr,en,ar}, image_url, link_url, is_active, order |
| `promo_codes` | Codes promo | id, code, discount_type, discount_value, usage_limit, valid_until |
| `testimonials` | Témoignages | id, author_name, content{fr,en,ar}, rating, is_approved |
| `contact_messages` | Messages contact | id, name, email, message, is_read, created_at |
| `newsletter_subscribers` | Abonnés newsletter | id, email, subscribed_at |
| `navigation` | Menu navigation | id, label{fr,en,ar}, url, is_external, order |
| `footer_settings` | Config footer | id, about_text, social_links, footer_links, copyright |
| `custom_pages` | Pages perso | id, slug, title{fr,en,ar}, content{fr,en,ar}, is_active |
| `historical_content` | Contenu historique | id, title{fr,en,ar}, content{fr,en,ar}, year, images |
| `settings` | Paramètres site | id, site_name, contacts{phones,emails,addresses} |
| `customization` | Personnalisation | id, logo_url, primary_color, font_heading, etc. |
| `seo_settings` | Paramètres SEO | id, meta_title, meta_description, keywords |
| `media` | Bibliothèque médias | id, filename, original_name, url, mime_type, size |
| `stock_adjustments` | Historique stocks | id, product_id, quantity_change, reason, created_at |
| `password_resets` | Tokens reset password | email, token, expires_at |

### Export de la base de données

```bash
# Export complet (sur le serveur MongoDB)
mongodump --db delices_algerie --out ./backup

# Export en JSON
mongoexport --db delices_algerie --collection users --out users.json
mongoexport --db delices_algerie --collection products --out products.json
# ... répéter pour chaque collection

# Import dans nouvelle base
mongorestore --uri "mongodb+srv://user:pass@cluster.mongodb.net/" ./backup
```

---

## 6️⃣ AUTHENTIFICATION

### Système utilisé
- **Type**: JWT (JSON Web Tokens)
- **Stockage utilisateurs**: Collection MongoDB `users`
- **Hashage mots de passe**: bcrypt via Passlib
- **Durée token**: 30 jours

### Flux d'authentification

1. **Inscription** (`POST /api/auth/register`)
   - Crée un utilisateur avec mot de passe hashé
   - Retourne un token JWT

2. **Connexion** (`POST /api/auth/login`)
   - Vérifie email/password
   - Retourne un token JWT

3. **Vérification** (`GET /api/auth/me`)
   - Valide le token JWT
   - Retourne les infos utilisateur

4. **Reset password** (`POST /api/auth/forgot-password`)
   - Génère un token de reset
   - Envoie un email avec le lien

### Rôles utilisateurs

| Rôle | Accès |
|------|-------|
| `user` | Compte client, commandes, profil |
| `admin` | Tout + panel d'administration |

### Secrets requis

| Secret | Description | Comment obtenir |
|--------|-------------|-----------------|
| `JWT_SECRET_KEY` | Clé de signature JWT | Générer une chaîne aléatoire de 32+ caractères |

---

## 7️⃣ API ENDPOINTS

### Authentification
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| POST | `/api/auth/register` | ❌ | Inscription |
| POST | `/api/auth/login` | ❌ | Connexion |
| GET | `/api/auth/me` | ✅ User | Infos utilisateur connecté |
| POST | `/api/auth/forgot-password` | ❌ | Demande reset password |
| POST | `/api/auth/reset-password` | ❌ | Reset avec token |
| GET | `/api/auth/verify-reset-token/{token}` | ❌ | Vérifier token reset |

### Utilisateurs
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| PUT | `/api/users/me` | ✅ User | Modifier son profil |
| PUT | `/api/users/me/password` | ✅ User | Changer son password |
| GET | `/api/admin/users` | ✅ Admin | Liste utilisateurs |
| PUT | `/api/admin/users/{id}` | ✅ Admin | Modifier utilisateur |
| DELETE | `/api/admin/users/{id}` | ✅ Admin | Supprimer utilisateur |

### Produits
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| GET | `/api/products` | ❌ | Liste produits |
| GET | `/api/products/{id}` | ❌ | Détail produit |
| POST | `/api/products` | ✅ Admin | Créer produit |
| PUT | `/api/products/{id}` | ✅ Admin | Modifier produit |
| DELETE | `/api/products/{id}` | ✅ Admin | Supprimer produit |

### Catégories
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| GET | `/api/categories` | ❌ | Liste catégories actives |
| GET | `/api/admin/categories` | ✅ Admin | Toutes catégories |
| POST | `/api/admin/categories` | ✅ Admin | Créer catégorie |
| PUT | `/api/admin/categories/{id}` | ✅ Admin | Modifier |
| DELETE | `/api/admin/categories/{id}` | ✅ Admin | Supprimer |

### Commandes
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| POST | `/api/orders` | ❌ | Créer commande |
| GET | `/api/orders/{id}` | ❌ | Détail commande (par numéro) |
| GET | `/api/my-orders` | ✅ User | Mes commandes |
| GET | `/api/admin/orders` | ✅ Admin | Toutes commandes |
| PUT | `/api/admin/orders/{id}` | ✅ Admin | Modifier statut |

### Codes promo
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| GET | `/api/promo-codes/active` | ❌ | Promos actives publiques |
| POST | `/api/promo-codes/validate` | ❌ | Valider un code |
| GET | `/api/admin/promo-codes` | ✅ Admin | Liste admin |
| POST | `/api/admin/promo-codes` | ✅ Admin | Créer |
| PUT | `/api/admin/promo-codes/{id}` | ✅ Admin | Modifier |
| DELETE | `/api/admin/promo-codes/{id}` | ✅ Admin | Supprimer |

### Upload & Médias
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| POST | `/api/upload` | ✅ Admin | Upload image |
| DELETE | `/api/upload/{filename}` | ✅ Admin | Supprimer image |
| GET | `/api/uploads/{filename}` | ❌ | Servir fichier |
| GET | `/api/admin/media` | ✅ Admin | Bibliothèque médias |
| POST | `/api/admin/media/upload` | ✅ Admin | Upload média |
| DELETE | `/api/admin/media/{id}` | ✅ Admin | Supprimer média |

### Personnalisation
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| GET | `/api/customization` | ❌ | Config publique (couleurs, etc.) |
| GET | `/api/admin/customization` | ✅ Admin | Config admin |
| PUT | `/api/admin/customization` | ✅ Admin | Modifier |
| GET | `/api/admin/settings` | ✅ Admin | Paramètres site |
| PUT | `/api/admin/settings` | ✅ Admin | Modifier paramètres |

### Navigation & Footer
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| GET | `/api/navigation` | ❌ | Menu navigation |
| GET | `/api/footer` | ❌ | Config footer |
| PUT | `/api/admin/footer` | ✅ Admin | Modifier footer |
| POST | `/api/admin/navigation` | ✅ Admin | Ajouter item nav |

### Autres
| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| POST | `/api/contact` | ❌ | Envoyer message contact |
| POST | `/api/testimonials` | ❌ | Soumettre témoignage |
| GET | `/api/testimonials` | ❌ | Témoignages approuvés |
| POST | `/api/newsletter/subscribe` | ❌ | S'abonner newsletter |
| GET | `/api/pages` | ❌ | Pages personnalisées |
| GET | `/api/pages/{slug}` | ❌ | Page par slug |
| GET | `/api/banners` | ❌ | Bannières actives |
| GET | `/api/historical-content` | ❌ | Contenu historique |

---

## 8️⃣ DÉPLOIEMENT

### Configuration actuelle (Emergent)

Emergent utilise :
- **Supervisor** pour gérer les processus (backend + frontend + MongoDB)
- **Kubernetes** pour l'orchestration
- **MongoDB local** dans le container
- **Proxy/Ingress** pour le routing (`/api/*` → backend:8001)

### Migration vers d'autres plateformes

#### Option A: Vercel (Frontend) + Railway (Backend + DB)

**Frontend sur Vercel:**
```bash
# vercel.json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "https://votre-backend.railway.app/api/:path*" }
  ]
}

# Build command: yarn build
# Output directory: build
# Install command: yarn install
```

**Backend sur Railway:**
```bash
# railway.json ou Procfile
web: uvicorn server:app --host 0.0.0.0 --port $PORT

# Variables d'environnement à configurer dans Railway
```

**Database:**
- MongoDB Atlas (gratuit) ou Railway MongoDB

#### Option B: Render

**Frontend (Static Site):**
- Build command: `yarn build`
- Publish directory: `build`

**Backend (Web Service):**
- Build command: `pip install -r requirements.txt`
- Start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

#### Option C: VPS (DigitalOcean, OVH, etc.)

```bash
# Nginx config pour proxy
server {
    listen 80;
    server_name monsite.com;
    
    location /api/ {
        proxy_pass http://localhost:8001/api/;
    }
    
    location / {
        root /var/www/frontend/build;
        try_files $uri /index.html;
    }
}

# Supervisor config
[program:backend]
command=/path/to/venv/bin/uvicorn server:app --host 127.0.0.1 --port 8001
directory=/var/www/backend
```

---

## 9️⃣ GITHUB

### Statut actuel
- ⚠️ **Le code n'est PAS synchronisé avec GitHub**
- Les commits existent localement mais sans remote configuré

### Pour exporter le code

**Option 1: Télécharger les archives ZIP**
- Backend: `/downloads/backend-delices-tresors.zip`
- Frontend: `/downloads/frontend-delices-tresors.zip`

**Option 2: Utiliser "Save to GitHub" dans Emergent**
1. Dans l'interface Emergent, cliquez sur "Save to GitHub"
2. Connectez votre compte GitHub
3. Créez un nouveau repository

**Option 3: Export manuel**
```bash
# Sur votre machine locale après téléchargement
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-user/votre-repo.git
git push -u origin main
```

---

## 🔟 CE QUI CASSERAIT SI EMERGENT EST RETIRÉ

| Élément | Impact | Solution |
|---------|--------|----------|
| **Hébergement** | ❌ Site hors ligne | Déployer sur Vercel/Render/VPS |
| **Base de données** | ❌ Données perdues | Exporter vers MongoDB Atlas |
| **Fichiers uploadés** | ❌ Images perdues | Télécharger `/app/backend/uploads/` |
| **Variables .env** | ❌ Config perdue | Recréer sur nouvelle plateforme |
| **Domaine** | ⚠️ URL change | Configurer domaine personnalisé |
| **SSL/HTTPS** | ⚠️ Plus de certificat | Fourni par nouvelle plateforme |
| **Emails** | ✅ OK | Gmail SMTP fonctionne partout |
| **Auth JWT** | ✅ OK | Fonctionne partout (changer JWT_SECRET) |

### Checklist de migration

- [ ] Créer compte MongoDB Atlas
- [ ] Exporter données MongoDB actuelles
- [ ] Importer dans MongoDB Atlas
- [ ] Télécharger les fichiers uploadés (`/app/backend/uploads/`)
- [ ] Déployer le backend (Railway/Render/VPS)
- [ ] Configurer les variables d'environnement backend
- [ ] Déployer le frontend (Vercel/Netlify/Render)
- [ ] Configurer REACT_APP_BACKEND_URL
- [ ] Tester toutes les fonctionnalités
- [ ] Configurer domaine personnalisé (optionnel)

---

## 📝 NOTES IMPORTANTES

1. **Multilingue**: L'application supporte 3 langues (FR, EN, AR). Tous les contenus textuels sont stockés comme `{fr: "", en: "", ar: ""}`.

2. **Fichiers uploadés**: Les images sont stockées dans `/app/backend/uploads/` et servies via `/api/uploads/{filename}`.

3. **Emails**: Utilisent Gmail SMTP. Pour activer :
   - Activer la vérification en 2 étapes sur Google
   - Créer un mot de passe d'application dans les paramètres Google

4. **Admin par défaut**:
   - Email: `admin@delices-algerie.com`
   - Password: `Admin2024!`

5. **CSS dynamique**: Les couleurs et polices sont chargées depuis `/api/customization` et appliquées via variables CSS.

---

*Document généré le 6 janvier 2025*
