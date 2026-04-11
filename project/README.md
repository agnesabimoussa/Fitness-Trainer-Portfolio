# Project Structure Overview

This document explains how the main.jsx has been organized into a scalable component and pages structure.

## 📁 Folder Organization

```
src/
├── App.jsx                      # Root component that ties everything together
├── index.js                     # Entry point (already exists)
│
├── components/                  # Reusable UI components
│   ├── Navbar.jsx              # Navigation header with logo and menu
│   ├── HeroSection.jsx         # Hero banner section
│   ├── StatBadge.jsx           # Stat display badge component
│   ├── ExpertiseCard.jsx       # Card for expertise grid (with image variant)
│   ├── TimelineItem.jsx        # Timeline item for experience section
│   ├── TransformationCard.jsx  # Before/after transformation card
│   ├── IntroOverlay.jsx        # Intro animation overlay
│   └── Footer.jsx              # Footer component
│
├── pages/                       # Page sections (full-width layouts)
│   ├── About.jsx               # About/Philosophy section
│   ├── Expertise.jsx           # Expertise grid section
│   ├── Experience.jsx          # Experience timeline section
│   ├── Transformations.jsx     # Client transformations gallery
│   └── Contact.jsx             # Contact form section
│
├── hooks/                       # Custom React hooks
│   └── useInView.js            # Intersection observer hook for scroll animations
│
├── constants/                   # Constant data
│   ├── colors.js               # Design tokens (COLORS object)
│   └── transformations.js      # Transformations gallery data
│
└── [existing files]
    ├── index.css
    ├── App.css
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

## 🎯 Component Breakdown

### Components (Reusable)
- **Navbar**: Sticky navigation with mobile menu
- **HeroSection**: Large hero banner with CTA buttons
- **StatBadge**: Small stat display component
- **ExpertiseCard**: Grid card with optional image
- **TimelineItem**: Single timeline entry
- **TransformationCard**: Before/after transformation display
- **IntroOverlay**: Splash screen animation
- **Footer**: Site footer with links

### Pages (Full-width Sections)
- **About**: Coach philosophy and credentials
- **Expertise**: Services offered in grid layout
- **Experience**: Timeline of professional history
- **Transformations**: Gallery of client results
- **Contact**: Contact form with validation

### Hooks
- **useInView**: Detects when element enters viewport for scroll animations

### Constants
- **colors.js**: All design tokens in one place
- **transformations.js**: Data for transformation gallery (easily extensible)

## 🔄 Data Flow

1. **App.jsx** - Root component managing global state and section tracking
2. **Pages** - Import components and constants as needed
3. **Components** - Accept props and import colors/hooks
4. **Constants** - Centralized data and design tokens

## ✅ Benefits of This Structure

✓ **Separation of Concerns** - Components are focused and reusable
✓ **Scalability** - Easy to add new pages or components
✓ **Maintainability** - Clear folder hierarchy and naming
✓ **Data Management** - Constants are centralized
✓ **Performance** - Lazy components can be added later
✓ **Testing** - Components can be tested in isolation

## 🚀 How to Extend

**Add a new component:**
1. Create file in `components/` folder
2. Export the component
3. Import in relevant page or App.jsx

**Add a new page section:**
1. Create file in `pages/` folder
2. Import components and constants as needed
3. Import in App.jsx and add to main render

**Add a new hook:**
1. Create file in `hooks/` folder
2. Export the hook
3. Import where needed

**Add new design tokens:**
1. Add to `constants/colors.js`
2. Import COLORS wherever needed
