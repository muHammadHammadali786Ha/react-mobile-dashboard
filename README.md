# Mobile Dashboard - React JS

A clean, modern mobile dashboard home page built with React.js. This project demonstrates UI/UX best practices for mobile-first design.

## Features

- **Responsive Design**: Optimized for mobile devices with a clean, modern interface
- **Component-Based Architecture**: Modular React components for maintainability
- **Clean Code**: Well-structured, readable code following React best practices
- **Modern UI**: Gradient headers, card-based layouts, and smooth interactions

## Components

- **Header**: Navigation bar with menu, notifications, and user greeting
- **Stats Cards**: Display key metrics with trend indicators
- **Quick Actions**: Fast access to common actions
- **Chart Section**: Weekly overview with interactive bar chart
- **Activity Feed**: Recent activity timeline

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will automatically reload when you make changes.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Header.css
│   ├── StatsCards.js
│   ├── StatsCards.css
│   ├── QuickActions.js
│   ├── QuickActions.css
│   ├── ChartSection.js
│   ├── ChartSection.css
│   ├── ActivityFeed.js
│   └── ActivityFeed.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Design Principles

- **Mobile-First**: Designed primarily for mobile devices (max-width: 428px)
- **Clean Code**: Separated concerns, reusable components, clear naming
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Performance**: Optimized CSS, minimal dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demo purposes.

