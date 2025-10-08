# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is N1kodevv's personal portfolio website - a modern, bilingual (Georgian/English) web developer portfolio with a full-stack contact form system. The site showcases web development skills, projects, and services with a focus on performance and user experience.

## Tech Stack

**Frontend:**
- Vanilla HTML5, CSS3, JavaScript ES6+
- Vite for build tooling and development server
- GSAP for smooth scrolling and animations
- Font Awesome for icons
- Progressive Web App features

**Backend:**
- Node.js with Express.js server
- Nodemailer for email functionality
- CORS enabled for cross-origin requests
- Input validation and sanitization

## Development Commands

### Start Development Server
```bash
pnpm dev
```
This runs Vite in development mode with hot reload.

### Build for Production
```bash
pnpm build
```
Creates optimized production build in `dist/` directory.

### Start Node.js Backend Server
```bash
node server.js
```
Starts the Express server on port 3001 (or PORT environment variable).

### Install Dependencies
```bash
pnpm install
```

### Lint Code (currently placeholder)
```bash
pnpm lint
```

## Architecture & Code Structure

### Frontend Architecture
- **Single Page Application (SPA)** with smooth scrolling between sections
- **Performance-first approach** with lazy loading, requestIdleCallback, and optimized animations
- **Mobile-first responsive design** with hamburger navigation
- **Accessibility features** including ARIA attributes and keyboard navigation
- **Progressive enhancement** with fallbacks for older browsers

### Key Frontend Files
- `index.html`: Main HTML structure with Georgian content
- `script.js`: High-performance JavaScript with modular initialization functions
- `style.css`: Comprehensive CSS with performance optimizations and smooth animations
- `server.js`: Express backend for contact form email functionality

### Backend Architecture
- **RESTful API** with `/api/send` endpoint for contact form submissions
- **Email service integration** using Nodemailer with SMTP configuration
- **Input validation and sanitization** for security
- **Error handling** with appropriate HTTP status codes
- **Health check endpoint** at `/api/health`

### Performance Optimizations
The codebase includes several performance optimizations:
- Aggressive use of `requestIdleCallback` for deferred initialization
- CSS containment properties (`contain: layout style paint`)
- Hardware acceleration with `transform3d` and `will-change`
- Efficient event handling with throttling and debouncing
- Lazy loading for images and non-critical resources
- Critical CSS inlining for faster first paint

## Environment Configuration

### Required Environment Variables (.env)
```
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASS=your_app_password
TO_EMAIL=recipient@domain.com
PORT=3001
```

### SMTP Configuration Examples
- **Gmail**: Use `smtp.gmail.com` with app-specific password
- **Outlook**: Use `smtp-mail.outlook.com`
- **Custom SMTP**: Configure according to your provider

## Development Guidelines

### Code Organization
- Frontend initialization functions are modularized in `script.js`
- CSS uses BEM-like naming conventions and is organized by components
- Performance-critical code is prioritized in initialization order

### JavaScript Patterns
- Use `requestIdleCallback` for non-critical functionality
- Implement proper error handling and fallbacks
- Cache DOM queries for better performance
- Use event delegation where appropriate

### CSS Best Practices
- Leverage CSS containment for performance
- Use `transform3d(0,0,0)` for hardware acceleration
- Implement smooth animations with `cubic-bezier` timing functions
- Maintain accessibility with `prefers-reduced-motion`

### Contact Form Integration
The contact form uses the backend API:
- Endpoint: `POST /api/send`
- Validation: Client-side and server-side validation
- Security: Input sanitization and CSRF protection considerations
- Email: HTML and plain text email templates

### Project Filtering System
Portfolio projects use a JavaScript-based filter system:
- Categories: `all`, `web`, `ecommerce`, `business`, `portfolio`
- Smooth animations with CSS transitions
- Maintains URL hash for direct linking

## Common Development Tasks

### Adding New Portfolio Projects
1. Add project data to the projects grid in `index.html`
2. Include appropriate `data-category` attribute
3. Add project images to `images/` directory
4. Update project links and technology tags

### Modifying Contact Form
1. Update form fields in `index.html`
2. Adjust validation logic in `server.js`
3. Modify email templates in the `/api/send` endpoint

### Performance Testing
- Use browser DevTools Performance tab
- Check Core Web Vitals (LCP, FID, CLS)
- Monitor script execution times logged to console

### Email Testing
- Use `/api/health` endpoint to verify SMTP configuration
- Test with various email providers
- Verify both HTML and plain text email rendering

## Browser Support

- Modern browsers (ES6+ support required)
- Progressive enhancement for older browsers
- Responsive design works on all screen sizes
- Accessibility features for screen readers

## Deployment Notes

- Frontend can be deployed to static hosting (Vercel, Netlify, GitHub Pages)
- Backend requires Node.js hosting with environment variable support
- Ensure HTTPS for production (required for some modern features)
- Configure SMTP credentials securely using environment variables
