import React from 'react';
import './Header.css';
import SearchFilter from './SearchFilter';

const Header = () => {
  return (
    <header className="hero-header">
      {/* Background Image with Blur */}
      <div className="hero-background"></div>
      
      {/* Navigation Bar */}
      <nav className="top-navigation">
        <button className="nav-icon-button" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="logo-container">
          <div className="panda-icon">🐼</div>
          <span className="logo-text">TripsAdora</span>
        </div>

        <div className="nav-icons">
          <button className="nav-icon-button" aria-label="Favorites">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button className="nav-icon-button" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
          <button className="nav-icon-button" aria-label="Calendar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
              <path d="M9 16l2 2 4-4"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Top Search Bar */}
      <div className="top-search-bar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <span className="top-search-text">Find your next adventure..</span>
      </div>

      {/* Hero Text Overlay */}
      <div className="hero-text-overlay">
        <h1 className="hero-text-line">MEET</h1>
        <h1 className="hero-text-line hero-text-voyage">VOYAGE</h1>
        <h1 className="hero-text-line">STORIES</h1>
      </div>

      {/* Search and Filter Component - 50% on hero, 50% below */}
      <SearchFilter />
    </header>
  );
};

export default Header;

