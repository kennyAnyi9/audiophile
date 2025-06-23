# Audiophile E-commerce Project Context

## Project Overview

You are building a modern e-commerce website for high-end audio equipment (audiophile products). This project is a complete rebuild of an existing application, maintaining the exact same UI design but with a different tech stack.

## Tech Stack (STRICT REQUIREMENTS)

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Bundler**: Turbopack
- **Database**: Neon Postgres
- **ORM**: Drizzle ORM
- **State Management**: React Context + localStorage
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Validation**: Zod
- **Code Quality**: ESLint
- **Package Manager**: bun

## Critical Development Rules

1. **NO ARROW FUNCTIONS for React components** - Always use function declarations:

   ```typescript
   // ✅ CORRECT
   export default function ComponentName() {
     return <div>Content</div>;
   }

   // ❌ WRONG - DO NOT USE
   const ComponentName = () => {
     return <div>Content</div>;
   };
   ```

2. **Use Server Actions** for all data mutations and fetching
3. **Feature-based folder structure** - Organize code by feature, not by type
4. **Responsive-first development** - Mobile, tablet, and desktop views
5. **Always run ESLint** before considering any component complete

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication group routes
│   ├── (shop)/            # Shopping routes (products, cart, checkout)
│   ├── admin/             # Admin panel routes
│   ├── api/               # API routes (webhooks, etc.)
│   └── layout.tsx         # Root layout with header/footer
├── features/              # Feature-based modules
│   ├── auth/
│   │   ├── components/    # SignInForm, SignUpForm, etc.
│   │   ├── actions/       # Server actions for auth
│   │   └── types/         # TypeScript types
│   ├── products/
│   │   ├── components/    # ProductCard, ProductGrid, etc.
│   │   ├── actions/       # Product-related server actions
│   │   └── types/
│   ├── cart/
│   │   ├── components/    # CartDrawer, CartItem, etc.
│   │   ├── actions/       # Cart server actions
│   │   └── stores/        # Zustand store for cart
│   ├── checkout/
│   │   ├── components/    # CheckoutForm, PaymentForm, etc.
│   │   ├── actions/       # Checkout and Stripe actions
│   │   └── types/
│   └── orders/
│       ├── components/    # OrderList, OrderDetails, etc.
│       └── actions/       # Order-related actions
├── server/               # Server-side code
│   ├── db/
│   │   ├── schema.ts     # Drizzle schema definitions
│   │   ├── migrations/   # Database migrations
│   │   └── seed.ts       # Data seeding script
│   └── services/
│       └── email.ts      # Email service (if needed)
├── components/          # Shared UI components
│   ├── ui/              # shadcn/ui components
│   └── layout/          # Header, Footer, etc.
└── lib/                 # Utilities and helpers
    ├── utils.ts         # General utilities
    └── constants.ts     # App constants
```

## Database Schema Overview

The application uses a relational database with these main entities:

- **Users**: Authentication and profile data
- **Products**: Audio equipment with categories (headphones, speakers, earphones)
- **Cart**: User shopping carts with localStorage persistence
- **Orders**: Completed purchases

## UI Design Requirements

The UI must match the original audiophile design EXACTLY:

### Design System

- **Primary Color**: Orange/Brown (#D87D4A)
- **Background**: White (#FFFFFF) and Light Gray (#F1F1F1)
- **Text**: Black (#000000) with various opacities
- **Header**: Black background with white text
- **Buttons**: Orange primary buttons, black secondary buttons

### Key UI Components

1. **Header**:

   - Black background
   - Transparent navigation on homepage hero
   - Logo + navigation links + cart icon
   - Mobile hamburger menu

2. **Product Cards**:

   - Image with hover effect
   - Product name, category badge
   - "See Product" CTA button

3. **Category Cards**:

   - Circular image with shadow
   - Category name
   - "Shop" link with arrow icon
   - Hover lift effect

4. **Cart Drawer**:

   - Slides in from right
   - Item list with quantity controls
   - Total calculation with shipping and VAT
   - Checkout button

5. **Forms**:
   - Clean, minimal design
   - Proper validation messages
   - Clear field labels and placeholders

## Core Features to Implement

### 1. User Management

- User registration and login forms
- Protected routes middleware
- Role-based access (user, admin)

### 2. Product Catalog

- Product listing with categories
- Product detail pages with image galleries
- Search functionality with debouncing
- Filtering and sorting options
- Server-side pagination

### 3. Shopping Cart (localStorage-backed)

- Add to cart with quantity
- Update quantities
- Remove items
- Persistent cart across sessions
- Real-time cart count in header
- Optimistic UI updates with Zustand

### 4. Checkout Process

- Multi-step checkout form
- Address validation with Zod
- Order confirmation
- Email notifications

### 5. User Account

- Order history
- Profile management
- Address book
- Password reset

### 6. Admin Panel

- Product management (CRUD)
- Order management
- User management
- Dashboard with statistics

## Business Logic Rules

### Pricing Calculations

- **Subtotal**: Sum of (product price × quantity)
- **Shipping**: Fixed $50 for all orders
- **VAT**: 20% of subtotal (not including shipping)
- **Total**: Subtotal + Shipping + VAT

### Cart Rules

- Maximum 10 items per product
- Cart persists for 30 days
- Guest carts merge with user account on login

### Order Processing

- Orders require form validation
- Stock validation before payment
- Order confirmation email sent
- Order status tracking

## Performance Requirements

1. **Caching Strategy**:

   - Product listings: 1 hour TTL
   - Product details: 1 hour TTL
   - User sessions: 24 hours
   - Cart data: 30 days

2. **Rate Limiting**:

   - API routes: 100 requests/minute
   - Auth endpoints: 5 requests/minute
   - Checkout: 10 requests/minute

3. **Optimization**:
   - Use Turbopack for faster builds
   - Implement proper image optimization
   - Lazy load components where appropriate
   - Server-side render product pages for SEO

## Development Workflow

1. Always start with mobile view
2. Implement server actions before UI
3. Add proper TypeScript types
4. Validate with Zod schemas
5. Test error states
6. Run ESLint before completion
7. Check responsive design on all breakpoints

## Environment Variables Required

```env
# Database
DATABASE_URL=



# App
NEXT_PUBLIC_APP_URL=
```

## Common Patterns to Follow

### Server Action Pattern

```typescript
"use server";

import { z } from "zod";
import { db } from "@/server/db";

const inputSchema = z.object({
  // validation schema
});

export async function actionName(input: z.infer<typeof inputSchema>) {
  try {
    const validated = inputSchema.parse(input);
    // Implementation
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: "Error message" };
  }
}
```

### Component Pattern

```typescript
import { ComponentProps } from "@/types";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "featured";
}

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  return <div className="...">{/* Component implementation */}</div>;
}
```

### API Route Pattern

```typescript
import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    // Check rate limit
    const identifier = request.ip ?? "anonymous";
    const { success } = await rateLimit.limit(identifier);

    if (!success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    // Implementation
    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

## Development Commands

**IMPORTANT**: Always use `bun` instead of `npm` for all commands:

```bash
# Install dependencies
bun install

# Development server
bun run dev

# Build for production  
bun run build

# Run linting
bun run lint

# Run type checking (if available)
bun run typecheck

# Database operations
bun run db:generate
bun run db:push
bun run db:seed
```

## Testing Checklist

- [ ] All forms have proper validation
- [ ] Error states are handled gracefully
- [ ] Loading states are implemented
- [ ] Mobile responsive design works
- [ ] Cart calculations are accurate
- [ ] Checkout flow completes successfully
- [ ] Admin features require proper authorization
- [ ] Search and filters work correctly
- [ ] Images load and optimize properly
- [ ] No ESLint errors or warnings

Remember: The goal is to create a premium, high-performance e-commerce experience that matches the original UI exactly while leveraging modern technologies for better performance and developer experience.
