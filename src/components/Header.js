import React, { useState } from 'react';
import './Header.css';
import SearchFilter from './SearchFilter';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const menuData = {
    explore: [
      { label: 'Top Destination', link: '#' },
      { label: 'Top Attraction', link: '#' },
      { label: 'Explore Trips Adora', link: '#' }
    ],
    company: [
      { label: 'Blogs', link: '#' },
      { label: 'About', link: '#' },
      { label: 'Contact', link: '#' },
      { label: 'Careers', link: '#' },
      { label: 'Write a review', link: '#' }
    ],
    profile: [
      { label: 'Settings', link: '#' },
      { label: 'My Wallet', link: '#' }
    ]
  };

  return (
    <>
      <header className="hero-header">
        {/* Background Image with Blur */}
        <div className="hero-background"></div>

        {/* Navigation Bar */}
        <nav className="top-navigation">
          <button className="nav-icon-button" aria-label="Menu" onClick={toggleSidebar}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="logo-container">
            <div className="panda-icon">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" fill="white" stroke="#1f2937" strokeWidth="1.5"/>
                <ellipse cx="10" cy="12" rx="4" ry="4" fill="#1f2937"/>
                <ellipse cx="22" cy="12" rx="4" ry="4" fill="#1f2937"/>
                <circle cx="10" cy="12" r="1.5" fill="white"/>
                <circle cx="22" cy="12" r="1.5" fill="white"/>
                <ellipse cx="16" cy="19" rx="3" ry="2" fill="#1f2937"/>
                <circle cx="16" cy="17" r="2" fill="#1f2937"/>
              </svg>
            </div>
            <span className="logo-text">TripsAdora</span>
          </div>

          <div className="nav-icons">
            <button className="nav-icon-button" aria-label="Favorites">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button className="nav-icon-button" aria-label="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </button>
            <button className="nav-icon-button" aria-label="Calendar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="search-icon-btn">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </div>
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

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar Menu */}
      <aside className={`sidebar-menu ${isSidebarOpen ? 'active' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="white" stroke="#1f2937" strokeWidth="1.5"/>
              <ellipse cx="10" cy="12" rx="4" ry="4" fill="#1f2937"/>
              <ellipse cx="22" cy="12" rx="4" ry="4" fill="#1f2937"/>
              <circle cx="10" cy="12" r="1.5" fill="white"/>
              <circle cx="22" cy="12" r="1.5" fill="white"/>
              <ellipse cx="16" cy="19" rx="3" ry="2" fill="#1f2937"/>
              <circle cx="16" cy="17" r="2" fill="#1f2937"/>
            </svg>
            <span className="sidebar-logo-text">TripsAdora</span>
          </div>
        </div>

        {/* User & Close Row */}
        <div className="sidebar-user-row">
          <button className="sidebar-user-btn" aria-label="User profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button className="sidebar-close-btn" onClick={closeSidebar} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          {/* Explore Section */}
          <div className="sidebar-section">
            <h3 className="sidebar-section-title">Explore</h3>
            <ul className="sidebar-menu-list">
              {menuData.explore.map((item, index) => (
                <li key={index} className="sidebar-menu-item">
                  <a href={item.link} className="sidebar-menu-link">
                    {item.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="sidebar-section">
            <h3 className="sidebar-section-title">Company</h3>
            <ul className="sidebar-menu-list">
              {menuData.company.map((item, index) => (
                <li key={index} className="sidebar-menu-item">
                  <a href={item.link} className="sidebar-menu-link">
                    {item.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Section */}
          <div className="sidebar-section">
            <h3 className="sidebar-section-title">Profile</h3>
            <ul className="sidebar-menu-list">
              {menuData.profile.map((item, index) => (
                <li key={index} className="sidebar-menu-item">
                  <a href={item.link} className="sidebar-menu-link">
                    {item.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdowns */}
          <div className="sidebar-dropdowns">
            <div className="sidebar-dropdown">
              <span>Language</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <div className="sidebar-dropdown">
              <span>Currency</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>

          {/* Login/Sign-out */}
          <a href="#" className="sidebar-login-link">Login/sign-out</a>

          {/* Social Links */}
          <div className="sidebar-social">
            <span className="sidebar-social-label">Follow Us</span>
            <div className="sidebar-social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="sidebar-copyright">
            © 2025 TripAdora. All rights reserved.
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
