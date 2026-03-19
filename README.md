# NurseCare AI 🩺

Evidence-based nursing care plan generator, drug reference, and clinical lab guide — NANDA-I compliant, AI-powered.

## Features

- **Care Plan Generator** — AI-generated NANDA-I compliant nursing care plans with defining characteristics, SMART goals, interventions + rationales, and evaluation criteria
- **Drug Reference** — Full drug profiles: dose, MOA, indications, side effects, contraindications, adverse effects, nursing considerations. AI-generated and Firestore-cached
- **Clinical Lab Guide** — 30+ lab panels with 150+ parameters covering Hematology, Chemistry, Electrolytes, ABG, Thyroid, Cardiac, Serology, Hormonal, Microbiology and more. Each with normal ranges, low/high causes, and solutions
- **My Library** — Save care plans and drugs to your personal Firestore library
- **Global Cache** — AI-generated plans and drugs cached in Firestore for instant load for other users
- **Firebase Auth** — Email/password + Google Sign-in

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| Auth & DB | Firebase (Auth + Firestore) |
| AI | Anthropic Claude API (claude-sonnet-4) |
| Server | Node.js + Express |
| Deployment | Railway |

---

## Setup

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/nursecare-ai.git
cd nursecare-ai
npm install
```

### 2. Firebase setup

1. Create a Firebase project at https://console.firebase.google.com
2. Enable **Authentication** (Email/Password + Google providers)
3. Enable **Firestore Database** (start in production mode)
4. Deploy Firestore rules:
   ```bash
   firebase deploy --only firestore:rules
   ```
5. Copy your Firebase config values

### 3. Environment variables

Create a `.env` file in the project root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> **Note:** The Anthropic API key is handled via the Claude.ai proxy built into the artifact system. In standalone deployment, you'll need to proxy API calls through your own backend to keep the key secret.

### 4. Run locally

```bash
npm run dev
```

---

## Deploy to Railway

1. Push your code to GitHub
2. Go to https://railway.app → New Project → Deploy from GitHub repo
3. Add environment variables (all `VITE_FIREBASE_*` values + `NODE_ENV=production`)
4. Railway auto-detects the `nixpacks.toml` and builds + serves the app
5. Your app will be live at `your-app.railway.app`

---

## Firestore Collections

| Collection | Purpose |
|---|---|
| `users/{uid}` | User profile (name, email, plan, joinedAt) |
| `users/{uid}/plans` | User's saved care plans |
| `users/{uid}/drugs` | User's saved drugs |
| `carePlanCache` | Global AI-generated care plan cache |
| `drugCache` | Global AI-generated drug info cache |

---

## Project Structure

```
src/
├── components/
│   ├── AuthModal.jsx      # Sign in / Sign up modal
│   ├── DrugClassBrowse.jsx # Drug class browse dropdown
│   ├── Header.jsx         # Sticky header with auth
│   ├── LibraryPanel.jsx   # Saved plans/drugs sidebar
│   ├── NandaBrowse.jsx    # NANDA-I browse dropdown
│   └── Toast.jsx          # Notification toast
├── data/
│   ├── drugClasses.js     # All drug classes + subclasses
│   ├── labsData.js        # Full lab reference dataset (164KB)
│   └── nandaDomains.js    # All NANDA-I domains + diagnoses
├── firebase/
│   └── config.js          # Firebase initialization
├── hooks/
│   └── useAuth.js         # Auth context + hooks
├── pages/
│   ├── CarePlanView.jsx   # AI care plan generation + display
│   ├── DrugDetailView.jsx # AI drug reference + display
│   ├── HomePage.jsx       # 3-tab home (Care Plan, Drugs, Lab Guide)
│   └── LabGuide.jsx       # Full clinical lab reference
├── styles/
│   └── global.css         # CSS variables + animations
├── App.jsx                # Router + global state
└── main.jsx               # React entry point
```

---

## License

Built for Nigerian nursing and academic communities. Educational use.
