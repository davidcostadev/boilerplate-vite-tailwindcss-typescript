# Jump Frontend

A modern React application built with TypeScript, Vite, and TailwindCSS.

## Tech Stack

- **React** (v19) - A JavaScript library for building user interfaces
- **TypeScript** (v6) - Adds static typing to JavaScript
- **Vite** (v8) - Next generation frontend tooling
- **TailwindCSS** (v4) - A utility-first CSS framework
- **React Query** (TanStack Query v5) - Powerful asynchronous state management
- **Axios** - Promise-based HTTP client
- **ESLint** (v10) + **Prettier** - Linting and code formatting

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (Package manager)

### Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd jump-frontend
```

2. Install dependencies:

```bash
pnpm install
```

### Development

To start the development server:

```bash
pnpm dev
```

This will start the application in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint (with auto-fix)
- `pnpm format` - Format code with Prettier

## Project Structure

```
jump-frontend/
├── src/           # Source files
├── public/        # Static files
├── index.html     # Entry HTML file
└── package.json   # Project dependencies and scripts
```

## ESLint Configuration

The project uses a modern ESLint setup with TypeScript support. The configuration can be found in `eslint.config.js`.

## TypeScript Configuration

The project includes three TypeScript configuration files:

- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific configuration
- `tsconfig.node.json` - Node.js-specific configuration

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

MIT
