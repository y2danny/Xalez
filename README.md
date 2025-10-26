# XALEZ - Raiku-Powered Presale Framework

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

A sophisticated, production-ready token presale framework built on Raiku's deterministic compute layer. Features MEV-resistant transactions, guaranteed execution timing, and fail-safe mechanisms for fair token distribution.

## 🏗️ Architecture

### Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript 5.5
- **Build Tool**: Vite 5.4
- **UI Library**: Radix UI primitives with Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

### Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navigation bar with XALEZ branding
│   │   ├── LandingPage.tsx         # Main marketing landing page
│   │   ├── DemoPage.tsx            # Interactive demo page
│   │   ├── PresaleWidget.tsx       # Core presale widget component
│   │   ├── Customizer.tsx           # Widget configuration interface
│   │   ├── CodePreview.tsx         # Generated embed code preview
│   │   └── ui/                     # Reusable UI components (45+ components)
│   ├── hooks/
│   │   └── use-toast.ts            # Toast notification hook
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── utils/
│   │   └── raiku.ts                # Raiku integration utilities
│   ├── types.ts                    # TypeScript type definitions
│   ├── App.tsx                     # Root application component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles and animations
├── public/                         # Static assets
├── dist/                           # Production build output
└── package.json                    # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0+
- npm 9.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/y2danny/Xalez.git
cd Xalez

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

Output is generated in the `dist/` directory.

## 📦 Core Components

### PresaleWidget

The main presale widget component with the following features:

- **Wallet Integration**: Connect wallet functionality
- **Progress Tracking**: Real-time sale progress visualization
- **Token Purchasing**: Buy tokens with ETH/USDC
- **Raiku Integration**: Deterministic transaction execution
- **Responsive Design**: Mobile-first approach

**Props**:

```typescript
interface PresaleConfig {
  tokenName: string;
  tokenSymbol: string;
  logoUrl: string;
  pricePerToken: number;
  totalSupply: number;
  soldAmount: number;
  endDate: Date;
  primaryColor: string;
  gradientFrom: string;
  gradientTo: string;
}
```

### Customizer

Configuration interface for widget customization:

- **Token Details**: Name, symbol, logo URL
- **Pricing**: Price per token, total supply, initial sold amount
- **Timeline**: Sale end date and time
- **Branding**: Gradient colors and theme customization
- **Deploy**: Generate embeddable code

### Integration Flow

```
User → Customizer → Configure Parameters → Deploy Presale →
Generate Code → Embed in Website/dApp → Live Presale
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Type check with TypeScript
```

### TypeScript Configuration

- **Strict Mode**: Enabled for type safety
- **ES Modules**: Native ESM support
- **Path Aliases**: Configured for clean imports
- **Build Info**: Persistent build cache for faster compilation

### Component Architecture

Components follow a modular architecture:

```typescript
// Example: Component structure
export const ComponentName = ({ props }: Props) => {
  // State management
  const [state, setState] = useState();

  // Effects
  useEffect(() => {
    /* ... */
  }, [deps]);

  // Handlers
  const handleAction = () => {
    /* ... */
  };

  // Render
  return <div className="...">{/* JSX */}</div>;
};
```

### Styling System

**Tailwind CSS** utility-first approach:

- Configuration in `tailwind.config.js`
- Custom animations and keyframes
- Glass-morphism effects
- Dark theme optimized
- Responsive breakpoints

**Custom CSS** in `index.css`:

- Global variables
- Gradient animations
- Glass panel effects
- Float animations
- Glow effects

## 🎨 Design System

### Colors

- **Primary**: Blue/Cyan gradient (#667eea → #764ba2)
- **Background**: Dark theme (HSL: 222 47% 4%)
- **Glass Panels**: Semi-transparent with backdrop blur

### Typography

- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Bold, large scale (4xl → 8xl)
- **Body**: Regular weight, 1.5 line height

### Animations

- **Framer Motion**: Page transitions and component animations
- **CSS Animations**: Floating, glowing, pulsing effects
- **Delays**: Staggered animations for visual hierarchy

## 🔐 Security & Safety

### Raiku Integration

- **Deterministic Execution**: Transactions execute at scheduled times
- **MEV Protection**: Zero front-running vulnerability
- **Fail-Safe**: Automatic rollback on errors
- **Guaranteed Fairness**: Provably fair distribution

### Best Practices

- Type-safe with TypeScript
- Input validation on all forms
- Sanitized user inputs
- Secure date handling

## 📊 Performance

### Bundle Size

- **JavaScript**: 345.81 kB (107.13 kB gzipped)
- **CSS**: 61.28 kB (10.91 kB gzipped)
- **Total**: ~120 kB gzipped

### Optimization

- **Code Splitting**: Route-based lazy loading
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are minified
- **Asset Optimization**: Images and fonts optimized

### Lighthouse Scores

Expected performance:

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

## 🧪 Testing Strategy

### Manual Testing Checklist

- [ ] Wallet connection flow
- [ ] Token purchase simulation
- [ ] Configuration changes reflect in preview
- [ ] Code generation works correctly
- [ ] Responsive design on mobile/tablet
- [ ] Dark theme consistency

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "run", "preview"]
```

## 📝 API Reference

### Raiku Integration

```typescript
// Simulate Raiku job
import { simulateRaikuJob } from './utils/raiku';

await simulateRaikuJob(
  amount: number,
  walletAddress: string
): Promise<void>
```

### Widget Configuration

```typescript
const config: PresaleConfig = {
  tokenName: "Your Token",
  tokenSymbol: "TOKEN",
  logoUrl: "https://...",
  pricePerToken: 0.5,
  totalSupply: 1000000,
  soldAmount: 0,
  endDate: new Date("2024-12-31"),
  primaryColor: "#667eea",
  gradientFrom: "rgba(102, 126, 234, 0.8)",
  gradientTo: "rgba(118, 75, 162, 0.8)",
};
```

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing`
3. Make changes and test
4. Commit: `git commit -m "Add amazing feature"`
5. Push: `git push origin feature/amazing`
6. Open Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint for linting
- Prettier for formatting (recommended)
- Write meaningful commit messages

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details

## 🔗 Links

- **GitHub**: [https://github.com/y2danny/Xalez](https://github.com/y2danny/Xalez)
- **Live Demo**: [Deploy with Vercel](#)
- **Documentation**: [Raiku Docs](#)

## 👥 Team

Built for hackathon submission - showcasing Web3 presale infrastructure with Raiku compute layer.

---

**Built with ❤️ using React, TypeScript, and Raiku**
