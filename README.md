# the Full Stack File stracture

my-fullstack-app/
├── src/
│ ├── app/ # Routing & Layout Layer (Keep lean)
│ │ ├── (auth)/ # Route Group: Authentication pages
│ │ │ ├── login/
│ │ │ │ └── page.tsx # /login
│ │ │ └── layout.tsx # Shared auth branding layout
│ │ ├── (dashboard)/ # Route Group: Authenticated app
│ │ │ ├── layout.tsx # Persistent sidebar & navbar
│ │ │ ├── page.tsx # / (Dashboard home index view)
│ │ │ └── projects/
│ │ │ ├── page.tsx # /projects
│ │ │ └── [id]/
│ │ │ └── page.tsx # /projects/:id (Dynamic route)
│ │ ├── api/ # Webhooks / Third-party proxies only
│ │ │ └── webhooks/stripe/
│ │ │ └── route.ts # POST handler for Stripe events
│ │ ├── globals.css # Global styles & Tailwind injections
│ │ ├── layout.tsx # Global root layout (HTML/Body tags)
│ │ ├── loading.tsx # Application-wide global fallback loading
│ │ └── error.tsx # Application-wide error boundary
│ │
│ ├── components/ # Global reusable UI elements
│ │ ├── ui/ # Primitive atomic tokens (e.g., Shadcn)
│ │ │ ├── button.tsx
│ │ │ └── input.tsx
│ │ └── shared/ # Complex cross-cutting UI blocks
│ │ ├── sidebar.tsx
│ │ └── navbar.tsx
│ │
│ ├── features/ # Domain-driven architecture (Scalable)
│ │ ├── projects/ # Everything isolated by product vertical
│ │ │ ├── actions.ts # Server Actions (Mutations / DB writes)
│ │ │ ├── components/ # Domain-specific components
│ │ │ │ └── project-card.tsx
│ │ │ ├── queries.ts # Type-safe server data fetch engines
│ │ │ └── schemas.ts # Zod validation schemas
│ │ └── auth/
│ │ ├── actions.ts
│ │ └── components/
│ │
│ ├── lib/ # Global server-side engine configs
│ │ ├── db.ts # Prisma/Drizzle initialization pool
│ │ └── auth.ts # Auth core configs (e.g., NextAuth/Auth.js)
│ │
│ ├── hooks/ # Shared client-side custom state hooks
│ │ └── use-debounce.ts
│ │
│ └── types/ # Global ambient TypeScript definitions
│ └── index.ts
│
├── public/ # Unchanged static distribution layer
│ └── logo.svg
├── .env.local # Private credential infrastructure
├── next.config.ts # Next.js optimization pipeline
├── package.json
└── tsconfig.json
# Portfolio-2026
