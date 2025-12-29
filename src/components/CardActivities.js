import React, { useRef, useEffect, useState } from 'react';

const CardActivities = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndexRef = useRef(0);
  const scrollIntervalRef = useRef(null);
  const startTimeoutRef = useRef(null);

  const activities = [
    {
      id: 1,
      location: 'Tokyo, Japan',
      rating: 4.8,
      reviews: 334,
      title: 'Mount Fuji & Hakone Private Tour By Car With Pick Up',
      duration: '8 hours',
      type: 'Private',
      provider: 'Karvaan Tours',
      price: 458,
      priceType: 'Vehicle',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badge: 'Trip Schedule Update',
      freeCancellation: true
    },
    {
      id: 2,
      location: 'Tokyo, Japan',
      rating: 4.8,
      reviews: 334,
      title: 'Mount Fuji & Hakone Private Tour By Car With Pick Up',
      duration: '8 hours',
      type: 'Private',
      provider: 'Karvaan Tours',
      price: 458,
      priceType: 'Group',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badge: 'Expected to sell out',
      freeCancellation: false
    },
    {
      id: 3,
      location: 'Kyoto, Japan',
      rating: 4.9,
      reviews: 521,
      title: 'Traditional Kyoto Temples & Gardens Walking Tour',
      duration: '6 hours',
      type: 'Group',
      provider: 'Japan Travel Co',
      price: 125,
      priceType: 'Person',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badge: null,
      freeCancellation: true
    },
    {
      id: 4,
      location: 'Osaka, Japan',
      rating: 4.7,
      reviews: 289,
      title: 'Osaka Food & Culture Experience Tour',
      duration: '4 hours',
      type: 'Group',
      provider: 'Local Adventures',
      price: 89,
      priceType: 'Person',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badge: 'Popular',
      freeCancellation: true
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Clear any existing intervals and timeouts
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    if (startTimeoutRef.current) {
      clearTimeout(startTimeoutRef.current);
      startTimeoutRef.current = null;
    }

    // Wait for DOM to be ready
    const initTimeout = setTimeout(() => {
      // Initialize scroll to first card
      scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
      currentIndexRef.current = 0;

      const scrollToNext = () => {
        if (isPaused) return;
        
        const nextIndex = (currentIndexRef.current + 1) % activities.length;
        currentIndexRef.current = nextIndex;
        
        const cards = scrollContainer.querySelectorAll('.activity-card');
        if (cards[nextIndex]) {
          const card = cards[nextIndex];
          const cardLeft = card.offsetLeft;
          scrollContainer.scrollTo({
            left: cardLeft,
            behavior: 'smooth'
          });
        }
      };

      // Auto-scroll interval: 2 seconds
      const scrollInterval = 2000; // 2000ms = 2 seconds
      
      // Start auto-scroll after initial delay
      startTimeoutRef.current = setTimeout(() => {
        if (!isPaused) {
          scrollIntervalRef.current = setInterval(scrollToNext, scrollInterval);
        }
      }, scrollInterval);
    }, 100);
    
    return () => {
      clearTimeout(initTimeout);
      if (startTimeoutRef.current) {
        clearTimeout(startTimeoutRef.current);
        startTimeoutRef.current = null;
      }
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };
  }, [isPaused, activities.length]);

  // Pause on user interaction
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <>
      <style>{`
        .activities-section {
          width: 100%;
          padding: 1.5rem 1rem;
          background: #f5f7fa;
        }
        .activities-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        .activities-scroll {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scroll-padding: 0;
          width: 100%;
        }
        .activities-scroll::-webkit-scrollbar {
          display: none;
        }
        .activities-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .activity-card {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          flex-shrink: 0;
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-right: 1rem;
          width: calc(100% - 1rem);
          max-width: 400px;
          box-sizing: border-box;
        }
        .activity-image-container {
          position: relative;
          width: 100%;
          height: 12.5rem;
          overflow: hidden;
        }
        .activity-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .activity-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: #ef4444;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .activity-actions {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          display: flex;
          gap: 0.5rem;
        }
        .action-icon {
          width: 2rem;
          height: 2rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .action-icon:hover {
          background: white;
        }
        .activity-content {
          padding: 1rem;
        }
        .activity-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }
        .activity-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #1f2937;
          font-weight: 500;
        }
        .activity-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }
        .activity-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          line-height: 1.4;
          margin: 0;
        }
        .activity-details {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        .activity-detail-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .activity-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid #e5e7eb;
        }
        .activity-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
        }
        .activity-price-type {
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 400;
        }
        .free-cancellation {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 500;
        }
        @media (max-width: 26.75rem) {
          .activities-section {
            padding: 1.5rem 0 !important;
            margin-left: calc(-1rem - 16px) !important;
            margin-right: calc(-1rem - 16px) !important;
            width: 100vw !important;
            max-width: 100vw !important;
            position: relative;
            left: 0;
            right: 0;
          }
          .activities-title {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .activities-scroll {
            scroll-snap-type: x mandatory;
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 100vw !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            overflow-x: auto;
            overflow-y: hidden;
            position: relative;
            box-sizing: border-box;
            scroll-padding: 0;
            -webkit-overflow-scrolling: touch;
          }
          .activity-card {
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            margin-right: 0 !important;
            border-radius: 0 !important;
            flex-shrink: 0 !important;
            box-sizing: border-box;
          }
          .activity-image-container {
            height: 15rem;
            width: 100% !important;
          }
          .activity-image {
            width: 100% !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
      <section className="activities-section">
        <h2 className="activities-title">Activities related to you</h2>
        
        <div
          ref={scrollContainerRef}
          className="activities-scroll"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-image-container">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="activity-image"
                  loading="lazy"
                />
                {activity.badge && (
                  <div className="activity-badge">{activity.badge}</div>
                )}
                <div className="activity-actions">
                  <div className="action-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={activity.id === 1 ? "#ef4444" : "none"} stroke="#1f2937" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div className="action-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2">
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="activity-content">
                <div className="activity-header">
                  <div>
                    <div className="activity-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  <div className="activity-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>{activity.rating} ({activity.reviews})</span>
                  </div>
                </div>
                
                <h3 className="activity-title">{activity.title}</h3>
                
                <div className="activity-details">
                  <div className="activity-detail-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{activity.duration}</span>
                  </div>
                  <div className="activity-detail-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>{activity.type}</span>
                  </div>
                </div>
                
                <div className="activity-footer">
                  <div>
                    <div className="activity-price">
                      ${activity.price}
                      <span className="activity-price-type">/{activity.priceType}</span>
                    </div>
                    {activity.freeCancellation && (
                      <div className="free-cancellation">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>Free cancellation</span>
                      </div>
                    )}
                  </div>
                  {activity.provider && (
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                      {activity.provider}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardActivities;

