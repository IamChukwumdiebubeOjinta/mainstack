# Revenue Dashboard

A modern, responsive revenue management dashboard built with React, TypeScript, Vite, and Chakra UI v3.

## Features

- **Modern UI**: Built with Chakra UI v3 and semantic tokens
- **Interactive Charts**: Revenue visualization using Recharts
- **Responsive Design**: Mobile-first approach with responsive grid layout
- **Dark Mode Support**: Built-in color mode switching
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable components for maintainability

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Chakra UI v3** for component library and theming
- **Recharts** for data visualization
- **React Icons** for iconography
- **Emotion** for CSS-in-JS styling

## Components

- `TopNav` - Navigation bar with menu items and user profile
- `RevenueCard` - Available balance display with withdraw button
- `StatItem` - Individual stat display with info icon
- `TransactionItem` - Single transaction row with status icons
- `TransactionsList` - Complete transactions table with filtering

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development

The project uses:
- **Vite** for fast HMR and building
- **TypeScript** for type safety
- **ESLint** for code quality
- **Chakra UI v3** with custom semantic tokens

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── TopNav.tsx       # Navigation component
│   ├── RevenueCard.tsx  # Balance display
│   ├── StatItem.tsx     # Individual stat
│   ├── TransactionItem.tsx # Transaction row
│   └── TransactionsList.tsx # Transactions table
├── components/ui/       # Chakra UI components
│   ├── provider.tsx    # Chakra provider
│   ├── color-mode.tsx  # Theme switching
│   └── ...
├── data/               # Mock data
│   └── mock.ts         # Sample data for charts/transactions
├── App.tsx           # Main dashboard
├── theme.ts            # Chakra theme configuration
└── main.tsx           # App entry point
```

## Customization

### Theming

The app uses Chakra UI v3 with custom semantic tokens defined in `src/theme.ts`:

- `brand.*` - Brand colors
- `nav.*` - Navigation styling
- `card.*` - Card components
- `chart.*` - Chart colors

### Adding Components

1. Create new components in `src/components/`
2. Use Chakra UI components and semantic tokens
3. Export from component files
4. Import and use in `App.tsx`

### Data

Mock data is located in `src/data/mock.ts`. Replace with real API calls:

- `revenueSeries` - Chart data
- `availableBalance` - Balance amount
- `rightStats` - Sidebar statistics
- `transactions` - Transaction list

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
