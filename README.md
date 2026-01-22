# CA Monk Blog

A modern blog platform for chartered accountants built with React, TypeScript, and TanStack Query.

## Features

- Browse and read blog articles with master-detail layout
- Create new blog posts with form validation
- Responsive design with mobile menu
- Real-time updates with TanStack Query
- Loading skeletons and error handling

## Tech Stack

- React 19 + TypeScript 5 + Vite 7
- TanStack Query 5 (state management)
- Tailwind CSS 3 (styling)
- React Router 7 (routing)
- JSON Server (mock API)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev servers (frontend + API)
npm run dev:all
```

Visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start frontend (port 5173)
- `npm run server` - Start API (port 3001)
- `npm run dev:all` - Start both servers
- `npm run build` - Build for production

## API Endpoints

- `GET /blogs` - All blogs
- `GET /blogs/:id` - Single blog
- `POST /blogs` - Create blog

## Project Structure

```
src/
├── api/          # API service layer
├── components/   # React components
├── hooks/        # Custom hooks
├── pages/        # Route pages
└── types/        # TypeScript types
```

## License

Assignment for CA Monk
```
