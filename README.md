# NetBox Return Tracker

A dashboard mockup for tracking the full **NetBox device-return journey** — from a CSP marking a device for return, through the pickup call, Porter/3PL booking, and receipt at Wiom.

> ⚠️ **Mockup / sample data.** All downstream figures (booked, received, TAT, discrepancies, etc.) are **fictional placeholders**. No real CSP names or phone numbers are included. Only the top-of-funnel "marked for return" totals reflect real analysis.

## What's in it

- **Overview** — process-health view: recovery rate, CSP acceptance, on-time pickup (SLA), the device-journey funnel, TAT split by Porter vs 3PL, pending-pickup ageing, and a daily trend.
- **Porter** / **3PL** — throughput, SLA/TAT performance, ageing buckets, and shipment tables.
- **Device Data** — one row per device with the full journey (request raised → CSP confirmed → booked → picked up → received → verified), for agents answering CSP queries. Searchable.
- **TAT Breaches · Discrepancies · CSP Refusals** — exception views.

The whole dashboard is a single self-contained `index.html` (no build step, no external dependencies). Tabs work with pure CSS, so it renders even without JavaScript.

## Run locally

```bash
npm start
```

Then open http://localhost:3000

(You can also just open `index.html` directly in a browser.)

## Deploy on Railway

1. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**.
2. Select **`Wiom-using-AI/netbox-return-tracker`**.
3. Railway auto-detects Node (via `package.json`), runs `npm start`, and injects `PORT`.
4. Under **Settings → Networking**, click **Generate Domain** to get a public URL.

No environment variables are required. The server (`server.js`) is a zero-dependency Node static server that binds to `process.env.PORT` and serves `index.html`. A `/healthz` endpoint returns `ok` for health checks.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire dashboard (self-contained) |
| `server.js` | Minimal Node static server (binds to `$PORT`) |
| `package.json` | `npm start` entry point + Node engine |
