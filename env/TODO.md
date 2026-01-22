# CA Monk Blog Application - Development Todo List

## 📋 Project Setup & Configuration

### 1. Initialize Project Structure
- [ ] Create React + TypeScript project with Vite
- [ ] Set up folder structure (components, hooks, types, api, utils)
- [ ] Configure TypeScript with strict mode
- [ ] Initialize Git repository

### 2. Install Dependencies
- [ ] Install React and React-DOM
- [ ] Install TypeScript and type definitions
- [ ] Install TanStack Query (@tanstack/react-query)
- [ ] Install Tailwind CSS and configure
- [ ] Install shadcn/ui CLI and init
- [ ] Install JSON Server for backend mock
- [ ] Install React Router (optional but recommended)
- [ ] Install Lucide React (for icons)

### 3. Setup Backend (JSON Server)
- [ ] Create `db.json` file with initial blog data structure
- [ ] Configure JSON Server to run on localhost:3001
- [ ] Create sample blog entries (minimum 5-7 articles)
- [ ] Add scripts in package.json for concurrent frontend/backend

---

## 🎨 Design System Implementation

### 4. Configure Theme & Color Palette
- [ ] Set up Tailwind config with custom colors:
  - Primary Purple: `#5D5CDE`
  - Background White: `#FFFFFF`
  - Background Secondary: `#F8F9FB`
  - Typography Primary: `#111827`
  - Typography Secondary: `#6B7280`
  - Accent Blue: `#EFF6FF`
  - Footer Dark: `#111827`
- [ ] Configure custom fonts (Inter or Roboto)
- [ ] Set up responsive breakpoints

### 5. Typography System
- [ ] Configure font sizes (H1: 36-42pt, H2: 24-28pt, Body: 16pt)
- [ ] Set line heights for optimal readability
- [ ] Create typography utility classes

---

## 🧱 Core Components - Navigation & Layout

### 6. Navigation Bar Component
- [ ] Create `Navbar.tsx` component
- [ ] Add CA Monk logo (left-aligned)
- [ ] Implement navigation links: Tools, Practice, Events, Job Board, Points
- [ ] Add "Profile" CTA button (right-aligned, purple background)
- [ ] Implement hover states for links
- [ ] Make navbar sticky/fixed
- [ ] Ensure mobile responsiveness

### 7. Hero Section Component
- [ ] Create `HeroSection.tsx`
- [ ] Add centered text layout
- [ ] Display "CA Monk Blog" headline
- [ ] Add descriptive sub-headline
- [ ] Style with proper spacing and typography

### 8. Footer Component
- [ ] Create `Footer.tsx` with four-column layout
- [ ] Column 1: Brand/About section with logo and mission
- [ ] Column 2: Resources links
- [ ] Column 3: Platform links
- [ ] Column 4: Connect/Social media links
- [ ] Add legal strip (Privacy Policy, Terms of Service)
- [ ] Implement dark background (#111827)
- [ ] Ensure responsive stacking on mobile

---

## 📝 Blog Feature - Data Layer

### 9. TypeScript Interfaces & Types
- [ ] Create `types/blog.ts`
- [ ] Define Blog interface:
  ```typescript
  {
    id: number
    title: string
    category: string[]
    description: string
    date: string
    coverImage: string
    content: string
  }
  ```
- [ ] Create API response types
- [ ] Ensure strict typing (no `any` types)

### 10. API Service Layer
- [ ] Create `api/blogs.ts`
- [ ] Implement `fetchBlogs()` function (GET /blogs)
- [ ] Implement `fetchBlogById(id)` function (GET /blogs/:id)
- [ ] Implement `createBlog(data)` function (POST /blogs)
- [ ] Add proper error handling
- [ ] Add TypeScript return types

### 11. TanStack Query Setup
- [ ] Create `QueryClient` configuration
- [ ] Wrap App with `QueryClientProvider`
- [ ] Configure default query options (staleTime, cacheTime)
- [ ] Set up React Query DevTools (development only)

### 12. Custom React Query Hooks
- [ ] Create `hooks/useBlogs.ts` (useQuery for blog list)
- [ ] Create `hooks/useBlog.ts` (useQuery for single blog)
- [ ] Create `hooks/useCreateBlog.ts` (useMutation for POST)
- [ ] Implement query invalidation on successful mutation
- [ ] Add loading and error states

---

## 🎴 Blog Feature - UI Components

### 13. Blog Card Component (Sidebar)
- [ ] Create `BlogCard.tsx` with shadcn Card
- [ ] Display category icon + category name (top left)
- [ ] Display timestamp (top right)
- [ ] Display blog title (middle, truncated if long)
- [ ] Display short snippet/description
- [ ] Display category tags (bottom left)
- [ ] Implement hover effect (elevation/background change)
- [ ] Add 4px purple left border for active state
- [ ] Ensure click handler for navigation

### 14. Blog Sidebar Component
- [ ] Create `BlogSidebar.tsx` component
- [ ] Add "Latest Articles" heading
- [ ] Render scrollable list of `BlogCard` components
- [ ] Implement skeleton loaders during fetch
- [ ] Handle empty state (no blogs available)
- [ ] Handle error state with toast/alert
- [ ] Make responsive (stack on mobile)

### 15. Blog Detail View Component
- [ ] Create `BlogDetail.tsx` component
- [ ] Display cover image (16:9 aspect ratio, full width)
- [ ] Show category badge (purple text)
- [ ] Display read time estimate
- [ ] Display H1 article title
- [ ] Add "Share Article" button (purple, with icon)
- [ ] Create metadata box (Category | Read Time | Date)
- [ ] Render full blog content
- [ ] Style blockquotes/callouts (light blue bg, blue left border)
- [ ] Add author attribution section at bottom

### 16. Author Attribution Component
- [ ] Create `AuthorAttribution.tsx`
- [ ] Display circular avatar
- [ ] Show author name and title
- [ ] Add social engagement icons (Like/Comment)
- [ ] Style with proper spacing

### 17. Skeleton Loaders
- [ ] Create `BlogCardSkeleton.tsx`
- [ ] Create `BlogDetailSkeleton.tsx`
- [ ] Use shadcn/ui Skeleton component
- [ ] Match actual component dimensions

---

## ✍️ Content Creation Feature

### 18. Create Blog Form Component
- [ ] Create `CreateBlogForm.tsx`
- [ ] Add form fields:
  - Title (text input, required)
  - Categories (multi-select or tag input, required)
  - Description (textarea, required)
  - Cover Image URL (text input, required)
  - Content (textarea/rich text, required)
  - Date (auto-populated)
- [ ] Use shadcn/ui form components (Input, Textarea, Button)
- [ ] Implement form validation (all required fields)
- [ ] Add submit button (purple, loading state)
- [ ] Show success toast on creation
- [ ] Clear form after successful submission

### 19. Blog Creation Integration
- [ ] Integrate `useCreateBlog` mutation hook
- [ ] Handle form submission
- [ ] Invalidate blog list query on success
- [ ] Show error toast on failure
- [ ] Disable submit button during loading
- [ ] Redirect or show confirmation after creation

---

## 🧭 Routing & Navigation (Optional but Recommended)

### 20. React Router Setup
- [ ] Install react-router-dom
- [ ] Create router configuration
- [ ] Define routes:
  - `/` - Home/Blog List View
  - `/blogs/:id` - Blog Detail View
  - `/create` - Create Blog Form
- [ ] Implement navigation between routes
- [ ] Update BlogCard click to navigate to `/blogs/:id`
- [ ] Add "Create New Post" button in sidebar

---

## 🎯 UI/UX Enhancements

### 21. Loading States
- [ ] Implement skeleton loaders for initial data fetch
- [ ] Add loading spinners for mutations
- [ ] Ensure minimum display time to prevent layout shift
- [ ] Add loading state to buttons during actions

### 22. Error Handling
- [ ] Create error boundary component
- [ ] Implement toast notifications for API errors
- [ ] Add retry mechanisms for failed queries
- [ ] Create fallback UI for error states
- [ ] Display user-friendly error messages

### 23. Empty States
- [ ] Create empty state UI for no blogs
- [ ] Add illustration or icon
- [ ] Add CTA to create first blog
- [ ] Ensure proper messaging

### 24. Responsive Design
- [ ] Test and adjust layout for mobile (320px - 768px)
- [ ] Implement stacked layout for sidebar on mobile
- [ ] Ensure touch-friendly tap targets
- [ ] Test on tablet (768px - 1024px)
- [ ] Optimize images for different screen sizes
- [ ] Test navigation menu collapse on mobile

### 25. Accessibility (A11y)
- [ ] Add proper ARIA labels
- [ ] Ensure keyboard navigation works
- [ ] Test with screen readers
- [ ] Maintain proper heading hierarchy
- [ ] Ensure sufficient color contrast
- [ ] Add focus indicators

---

## 🔍 Additional Features & Polish

### 26. Search & Filter (Optional)
- [ ] Add search input in sidebar
- [ ] Implement client-side search filtering
- [ ] Add category filter chips
- [ ] Clear filters functionality

### 27. Read Time Calculation
- [ ] Create utility function to estimate read time
- [ ] Base calculation on word count (avg 200-250 words/min)
- [ ] Display in metadata box

### 28. Date Formatting
- [ ] Install date-fns or use Intl API
- [ ] Format ISO-8601 dates to readable format
- [ ] Show relative dates (e.g., "2 days ago")

### 29. Share Functionality
- [ ] Implement share button click handler
- [ ] Add Web Share API for native sharing
- [ ] Fallback to copy-to-clipboard
- [ ] Show success toast after sharing

---

## ✅ Testing & Quality Assurance

### 30. Acceptance Testing
- [ ] ✓ Verify zero-refresh updates (new blogs appear without reload)
- [ ] ✓ Confirm type safety (no `any` types in data layer)
- [ ] ✓ Test empty states (UI handles no blogs gracefully)
- [ ] ✓ Verify loading states (skeletons visible during fetch)
- [ ] ✓ Test error scenarios (network failures, 404s)
- [ ] ✓ Verify responsive behavior on all breakpoints

### 31. Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Verify mobile Safari (iOS)
- [ ] Verify Chrome mobile (Android)

### 32. Performance Optimization
- [ ] Lazy load images
- [ ] Implement code splitting
- [ ] Optimize bundle size
- [ ] Add pagination or infinite scroll if needed
- [ ] Memoize expensive computations

---

## 📦 Deployment Preparation

### 33. Build & Deploy
- [ ] Test production build
- [ ] Optimize assets
- [ ] Set up environment variables
- [ ] Configure deployment platform (Vercel/Netlify)
- [ ] Deploy JSON Server or migrate to real backend
- [ ] Set up CI/CD pipeline (optional)

### 34. Documentation
- [ ] Write comprehensive README.md
- [ ] Document API endpoints
- [ ] Add setup instructions
- [ ] Include screenshots
- [ ] Document known issues/limitations
- [ ] Add contributing guidelines (if open source)

---

## 📊 Success Metrics

- [ ] All features from PRD implemented
- [ ] Design matches specifications from design.doc
- [ ] TypeScript strict mode enabled with no errors
- [ ] Zero runtime errors in console
- [ ] Responsive design works on all device sizes
- [ ] All acceptance criteria met
- [ ] Code is clean, well-organized, and commented

---

**Tech Stack Summary:**
- **Frontend:** React.js + TypeScript
- **State Management:** TanStack Query
- **Styling:** Tailwind CSS + shadcn/ui
- **Backend:** JSON Server (localhost:3001)
- **Routing:** React Router (optional)
- **Build Tool:** Vite (recommended)

**Total Tasks:** 34 major sections with 200+ individual action items
