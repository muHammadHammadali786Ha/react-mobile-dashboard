import React, { useRef, useState } from 'react';

const CardActivities = () => {
  const scrollContainerRef = useRef(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

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

  // Scroll to card when hovering on partially visible card
  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cards = scrollContainer.querySelectorAll('.activity-card');
    if (!cards[index]) return;

    const card = cards[index];
    const containerRect = scrollContainer.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // Check if card is partially visible (not fully in view)
    const isPartiallyVisible = cardRect.right > containerRect.right || cardRect.left < containerRect.left;

    if (isPartiallyVisible) {
      const scrollLeft = card.offsetLeft - 16; // Account for padding
      scrollContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
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
          scroll-padding: 0 1rem;
          width: 100%;
          gap: 0.6rem;
          padding-bottom: 0.5rem;
        }
        .activities-scroll::-webkit-scrollbar {
          display: none;
        }
        .activities-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .activity-card {
          flex-shrink: 0;
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          width: 150px;
          min-width: 150px;
          max-width: 150px;
          box-sizing: border-box;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .activity-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .activity-image-container {
          position: relative;
          width: 100%;
          height: 7rem;
          overflow: hidden;
        }
        .activity-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .activity-badge {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          background: #ef4444;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 0.75rem;
          font-size: 0.65rem;
          font-weight: 600;
        }
        .activity-actions {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          display: flex;
          gap: 0.35rem;
        }
        .action-icon {
          width: 1.6rem;
          height: 1.6rem;
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
        .action-icon svg {
          width: 12px;
          height: 12px;
        }
        .activity-content {
          padding: 0.5rem;
        }
        .activity-location-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.35rem;
        }
        .activity-location {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.65rem;
          color: #6b7280;
        }
        .activity-rating {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          font-size: 0.65rem;
          color: #1f2937;
          font-weight: 500;
        }
        .activity-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #1f2937;
          line-height: 1.25;
          margin: 0 0 0.3rem 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .activity-details {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          color: #6b7280;
        }
        .activity-detail-item {
          display: flex;
          align-items: center;
          gap: 0.15rem;
        }
        .activity-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 0.4rem;
          padding-top: 0.4rem;
          border-top: 1px solid #f3f4f6;
        }
        .activity-price-section {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .activity-price {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1f2937;
        }
        .activity-price-type {
          font-size: 0.6rem;
          color: #6b7280;
          font-weight: 400;
        }
        .free-cancellation {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          font-size: 0.6rem;
          color: #ef4444;
          font-weight: 500;
        }
        .activity-provider {
          font-size: 0.6rem;
          color: #6b7280;
          text-align: right;
        }
        @media (max-width: 480px) {
          .activities-section {
            padding: 1rem 0 !important;
            margin-left: -16px !important;
            margin-right: -16px !important;
            width: calc(100% + 32px) !important;
            max-width: calc(100% + 32px) !important;
            position: relative;
            box-sizing: border-box;
          }
          .activities-title {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .activities-scroll {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding: 0 16px !important;
            overflow-x: auto;
            overflow-y: hidden;
            position: relative;
            box-sizing: border-box;
            scroll-padding: 0 16px;
            -webkit-overflow-scrolling: touch;
            gap: 8px;
          }
          .activity-card {
            width: 140px !important;
            min-width: 140px !important;
            max-width: 140px !important;
            margin: 0 !important;
            border-radius: 0.5rem !important;
            flex-shrink: 0 !important;
            box-sizing: border-box;
          }
          .activity-image-container {
            height: 6rem !important;
            width: 100% !important;
          }
          .activity-image {
            width: 100% !important;
            border-radius: 0.5rem 0.5rem 0 0 !important;
          }
          .activity-content {
            padding: 0.4rem !important;
          }
          .activity-title {
            font-size: 0.65rem !important;
          }
          .activity-location, .activity-rating {
            font-size: 0.55rem !important;
          }
          .activity-details {
            font-size: 0.55rem !important;
            gap: 0.3rem !important;
          }
          .activity-price {
            font-size: 0.75rem !important;
          }
          .activity-badge {
            font-size: 0.5rem !important;
            padding: 0.15rem 0.35rem !important;
          }
          .action-icon {
            width: 1.2rem !important;
            height: 1.2rem !important;
          }
          .action-icon svg {
            width: 10px !important;
            height: 10px !important;
          }
        }
      `}</style>
      <section className="activities-section">
        <h2 className="activities-title">Activities related to you</h2>

        <div
          ref={scrollContainerRef}
          className="activities-scroll"
        >
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="activity-card"
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
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
                    <svg viewBox="0 0 24 24" fill={activity.id === 1 ? "#ef4444" : "none"} stroke="#1f2937" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div className="action-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2">
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
                <div className="activity-location-row">
                  <div className="activity-location">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{activity.location}</span>
                  </div>
                  <div className="activity-rating">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>{activity.rating} ({activity.reviews})</span>
                  </div>
                </div>

                <h3 className="activity-title">{activity.title}</h3>

                <div className="activity-details">
                  <div className="activity-detail-item">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{activity.duration}</span>
                  </div>
                  <div className="activity-detail-item">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                    <span>{activity.type}</span>
                  </div>
                </div>

                <div className="activity-footer">
                  <div className="activity-price-section">
                    <div className="activity-price">
                      ${activity.price}<span className="activity-price-type">/{activity.priceType}</span>
                    </div>
                    {activity.freeCancellation && (
                      <div className="free-cancellation">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>Free cancellation</span>
                      </div>
                    )}
                  </div>
                  {activity.provider && (
                    <div className="activity-provider">
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

