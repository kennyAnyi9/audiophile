# 🎧 Audiophile E-commerce

A premium e-commerce platform for high-end audio equipment, built with modern web technologies and designed for audiophiles who demand excellence.

## ✨ Features

### 🛍️ E-commerce Core

- **Product Catalog**: Browse headphones, speakers, and earphones with detailed specifications
- **Smart Shopping Cart**: Persistent cart with localStorage, quantity management, and real-time
- **Secure Checkout**: Multi-step checkout process with form validation and payment options
- **Order Management**: Complete order processing with confirmation and email notifications

### 🎨 User Experience

- **Responsive Design**: Seamless experience across mobile, tablet, and desktop
- **Smooth Interactions**: Optimistic UI updates and loading states
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### ⚡ Performance

- **Server-Side Rendering**: Fast initial page loads with Next.js App Router
- **Turbopack**: Lightning-fast development builds
- **Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Optimized bundle sizes with automatic code splitting

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, customizable components

### Backend & Database

- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe SQL ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Neon](https://neon.tech/)** - Serverless PostgreSQL platform

### State Management & Validation

- **React Context + localStorage** - Cart state management
- **[Zod](https://zod.dev/)** - Runtime type validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling

### Development Tools

- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database (or Neon account)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kennyAnyi9/audiophile.git
   cd audiophile
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env.local
   ```

   Configure your environment variables:

   ```env
   DATABASE_URL=your_postgresql_connection_string
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Database setup**

   ```bash
   # Generate migration files
   bun run db:generate

   # Apply migrations
   bun run db:push

   # Seed with sample data
   bun run db:seed
   ```

5. **Start development server**

   ```bash
   bun run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (shop)/            # Shopping routes group
│   │   ├── checkout/      # Checkout page
│   │   └── products/      # Product listing and detail pages
│   ├── globals.css        # Global styles and CSS variables
│   └── layout.tsx         # Root layout
├── components/            # Shared UI components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Header, footer, navigation
├── features/             # Feature-based modules
│   ├── cart/            # Shopping cart functionality
│   ├── checkout/        # Checkout process
│   └── products/        # Product catalog
├── server/              # Server-side code
│   └── db/             # Database schema and migrations
└── lib/                # Utilities and type definitions
```



## 📜 Available Scripts

### Development

```bash
bun run dev          # Start development server with Turbopack
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint
```

### Database

```bash
bun run db:generate  # Generate migration files
bun run db:migrate   # Run migrations
bun run db:push      # Push schema changes
bun run db:studio    # Open Drizzle Studio
bun run db:seed      # Seed database with sample data
```

## 🏗️ Architecture Decisions

### Component Pattern

- **Function Declarations**: All React components use function declarations (not arrow functions)
- **Feature-based Organization**: Code organized by feature, not by file type
- **Server Actions**: All data mutations handled via Next.js Server Actions

### State Management

- **Cart State**: Managed with React Context + localStorage for persistence
- **Form State**: React Hook Form with Zod validation
- **Server State**: Server Components with data fetching

### Styling Approach

- **Utility-first**: Tailwind CSS for rapid development
- **Component Library**: shadcn/ui for consistent, accessible components
- **CSS Variables**: Custom properties for theme consistency

## 🧪 Business Logic

### Pricing Calculations

- **Subtotal**: Sum of (product price × quantity)
- **Shipping**: Fixed $50 for all orders
- **VAT**: 20% of subtotal (excluding shipping)
- **Total**: Subtotal + Shipping + VAT

### Cart Rules

- Maximum 10 items per product
- Cart persists for 30 days in localStorage
- Guest carts merge with user account on login

## 🚀 Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Railway
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the established patterns
4. Run linting: `bun run lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use function declarations for React components
- Implement proper error handling
- Add proper TypeScript types
- Test on all breakpoints
- Ensure accessibility compliance

