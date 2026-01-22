# CA Monk Blog

A modern, full-featured blog platform for chartered accountants built with React, TypeScript, and TanStack Query.

## 🚀 Features

- **Blog Reading**: Browse articles with master-detail layout, category filtering, and search
- **Blog Creation**: Rich form with validation, category selection, and instant publishing
- **Responsive Design**: Mobile-first UI with hamburger menu and touch-friendly interactions
- **Error Handling**: Global error boundary with graceful fallbacks
- **SEO Optimized**: Meta tags, semantic HTML, and social media cards
- **Type Safety**: Strict TypeScript with no `any` types
- **Real-time Updates**: TanStack Query with automatic cache invalidation
- **Smooth UX**: Loading skeletons, scroll-to-top, and optimistic UI updates

## 🛠️ Tech Stack

### Mandatory Technologies
- **React 19** - UI library with hooks and modern patterns
- **TypeScript 5** - Strict type checking enabled
- **Vite 7** - Fast build tool with HMR
- **TanStack Query 5** - Server state management
- **Tailwind CSS 3** - Utility-first styling
- **React Router 7** - Client-side routing
- **JSON Server** - Mock REST API backend

### UI Components & Icons
- **shadcn/ui** - Accessible component primitives
- **lucide-react** - Icon library
- **date-fns** - Date formatting utilities

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   npm run dev:all
   ```
   This starts:
   - Vite dev server at `http://localhost:5173`
   - JSON Server API at `http://localhost:3001`

### Alternative: Run servers separately
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

## 📁 Project Structure

```
src/
├── api/              # API service layer (fetch functions)
├── components/       # React components
│   ├── BlogCard.tsx
│   ├── BlogDetail.tsx
│   ├── BlogSidebar.tsx
│   ├── BlogCreateForm.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ErrorBoundary.tsx
│   └── ...
├── hooks/            # Custom React Query hooks
│   ├── useBlogs.ts
│   ├── useBlog.ts
│   └── useCreateBlog.ts
├── lib/              # Configuration (QueryClient)
├── pages/            # Route components
├── types/            # TypeScript interfaces
├── utils/            # Helper functions (formatters)
└── main.tsx          # App entry point

db.json               # JSON Server database (7 sample blogs)
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 5173) |
| `npm run server` | Start JSON Server (port 3001) |
| `npm run dev:all` | Run both servers concurrently |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔌 API Endpoints

Base URL: `http://localhost:3001`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blogs` | Fetch all blogs |
| GET | `/blogs/:id` | Fetch single blog by ID |
| POST | `/blogs` | Create new blog |

## 🎨 Design System

### Colors
- **Primary**: `#5D5CDE` (Purple)
- **Background**: `#F8F9FB` (Light Gray)
- **Text Primary**: `#111827` (Dark Gray)
- **Text Secondary**: `#6B7280` (Medium Gray)
- **Accent Blue**: `#EFF6FF`

### Typography
- **Display 1**: 42px (Article titles on desktop)
- **Display 2**: 36px (Page headings)
- **Heading 1**: 28px (Section titles)
- **Heading 2**: 24px (Subsections)
- **Body**: 16px (Paragraph text)

## 🧪 Development Guidelines

### TypeScript Rules
- Strict mode enabled (`tsconfig.json`)
- No `any` types allowed
- All props and function signatures typed
- Use type-only imports where needed

### Code Style
- Path aliases: Use `@/` for `src/` imports
- Components: PascalCase with named exports
- Hooks: camelCase starting with `use`
- File naming: Match component/hook names

### State Management
- Use TanStack Query for server state
- Use React hooks (useState, useEffect) for UI state
- Query invalidation for automatic refetching

## 🚢 Deployment

### Build for production
```bash
npm run build
```
Output will be in `dist/` directory.

### Environment Variables
No environment variables required for local development. For production:
- Update API base URL in `src/api/blogs.ts`
- Replace JSON Server with real backend

## 📝 Sample Data

The project includes 7 sample blog articles in `db.json`:
1. Future of Fintech: AI and Blockchain Revolution
2. GST Compliance in Digital Era
3. Career Growth for Young CAs
4. Digital Transformation for Accounting Firms
5. Sustainability Reporting
6. Financial Planning for Professionals
7. Remote Audit Best Practices

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## 📄 License

This project is built as an assignment for CA Monk.

## 🙏 Acknowledgments

- Design specifications from `design.doc`
- Requirements from `PRD.doc`
- Built with modern React best practices
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
