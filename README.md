# CA Monk Blog Platform

This is a blog application I built for chartered accountants. It uses React with TypeScript and includes features for reading and creating blog posts.

## What It Does

The app shows a list of blog articles on the left side and displays the full article when you click on one. You can also create new blog posts through a form. I added a mobile menu that works on smaller screens and included loading states while data fetches.

## Technologies Used

I used these specific versions based on the assignment requirements:
- React 19 with TypeScript 5 for the frontend
- Vite 7 as the build tool
- TanStack Query 5 to handle data fetching and caching
- Tailwind CSS 3 for styling components
- React Router 7 for navigation between pages
- JSON Server as a mock backend API

## How to Run It

First, install the dependencies:
```bash
npm install
```

Then start both the frontend and API server together:
```bash
npm run dev:all
```

The app will open at `http://localhost:5173` and the API runs on port 3001.

## Commands I Set Up

Here are the npm scripts in package.json:
- `npm run dev` - Runs just the Vite frontend server
- `npm run server` - Runs just the JSON Server backend
- `npm run dev:all` - Runs both servers at once using concurrently
- `npm run build` - Creates production build in dist folder

## API Structure

The JSON Server provides these endpoints at localhost:3001:
- `GET /blogs` - Returns array of all blog posts
- `GET /blogs/:id` - Returns single blog post by ID
- `POST /blogs` - Creates new blog post (auto-generates ID and timestamp)

## Code Organization

I organized the source code like this:

```
src/
├── api/          # Contains fetchBlogs, fetchBlogById, createBlog functions
├── components/   # All React components (Navbar, BlogCard, BlogDetail, etc.)
├── hooks/        # Custom hooks like useBlogs, useBlog, useCreateBlog
├── pages/        # HomePage, CreateBlogPage, NotFoundPage
└── types/        # TypeScript interfaces for Blog and API responses
```

Key implementation details:
- Used TanStack Query hooks in components to fetch and cache blog data
- Set up React Router with routes for home, blog detail, and create pages
- Created a BlogSidebar component that maps through blogs and renders BlogCard for each
- BlogDetail parses the content string and renders paragraphs with headings
- Form validation in BlogCreateForm checks title length and requires at least one category

## Assignment Notes

This project fulfills the CA Monk assignment requirements. I implemented all mandatory technologies exactly as specified in the PRD. The db.json file has 7 sample blog articles about accounting topics that I populated for testing.

Built by Krishna Mahajan for CA Monk assignment submission.
```
