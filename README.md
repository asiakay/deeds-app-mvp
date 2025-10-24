# Deeds App

**Development & Economic Empowerment Dashboard System (DEEDS)**  
Built with Cloudflare Workers + KV for lightweight, serverless login, data storage, and deployment automation.

---

## 🧭 Overview
Deeds App is a prototype that demonstrates how to build an edge-based authentication and data tracking system using Cloudflare’s infrastructure.  
It combines a static frontend, a serverless backend, and persistent KV storage — all deployed automatically via GitHub Actions.

---

## ⚙️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript (served from `/public`)
- **Backend:** Cloudflare Worker (`functions/_worker.js`)
- **Database:** Cloudflare KV (`DEEDS_KV`)
- **Automation:** GitHub Actions for CI/CD
- **Hosting:** Cloudflare Pages + Workers integration

---

## 🚀 Setup & Deployment

### 1. Configure Cloudflare
Create a KV namespace:
```bash
wrangler kv:namespace create "DEEDS_KV"
```
Copy the ID returned and update your `wrangler.toml` file:
```toml
[[kv_namespaces]]
binding = "DEEDS_KV"
id = "your-namespace-id"
```

### 2. Deploy Manually (optional)
```bash
npm install -g wrangler
wrangler publish
```

### 3. Deploy Automatically (recommended)
Using GitHub Actions — once configured, each push to `main` redeploys automatically.

1. Add this secret in your repo:  
   - **Name:** `CF_API_TOKEN`  
   - **Value:** your Cloudflare API token (with “Edit Workers” permission)

2. Commit your changes and push — GitHub handles the rest.

---

## 🌐 Endpoints

| Route | Method | Description |
|--------|---------|-------------|
| `/` | GET | Loads login page |
| `/api/auth` | POST | Creates or logs in a user |
| `/api/debug` | GET | Lists all KV entries |
| `/test` | GET | Checks KV binding accessibility |

---

## 🗂 Project Structure
```
deeds-app/
├── wrangler.toml
├── functions/
│   └── _worker.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 🧱 Environment Bindings

| Binding | Type | Purpose |
|----------|------|----------|
| `ASSETS` | Site bucket | Serves files from `/public` |
| `DEEDS_KV` | KV Namespace | Stores user data |

---

## 🧩 Testing
To confirm KV access:

```
- https://deeds-app.asialakaygrady-6d4.workers.dev/test
- https://deeds-app-mvp.asialakaygrady-6d4.workers.dev/test

```
Should return:
```
KV test: pong
```

---

## 🔒 Security Tips
- Use `SubtleCrypto` to hash passwords before saving.  
- Limit `/api/debug` access in production.  
- Rotate API tokens and restrict scopes.

---

## 🧠 Future Enhancements
- User dashboard with session tokens  
- Analytics tracking with Cloudflare D1  
- Integration with external APIs  
- Automated KV backups via cron triggers

---

© 2025 Deeds App | Powered by Cloudflare Edge
