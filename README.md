# BlockForge Studios Store

Next.js storefront for selling Crystal Obsidian.

## Stack

- Frontend: Next.js App Router
- Database/auth/storage: Supabase
- Payments: Stripe Checkout + webhook
- Downloads: protected Supabase Storage flow, with a local demo download fallback
- Admin: dashboard page scaffold

## Local setup

```powershell
copy .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Real payment flow

1. Product page calls `/api/checkout`.
2. Backend creates a Stripe Checkout Session.
3. Buyer pays on Stripe.
4. Stripe calls `/api/stripe/webhook`.
5. Webhook marks the order as `paid` and creates a license.
6. Customer can download only after the order is paid.

Do not unlock downloads from frontend-only state.
