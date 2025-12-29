import React, { useRef, useState } from 'react';

const LoveMost = () => {
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
      groupSize: 'Up to 12',
      provider: 'Karvaan Tours',
      price: 458,
      priceType: 'Group',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 2,
      location: 'Tokyo, Japan',
      rating: 4.8,
      reviews: 334,
      title: 'Mount Fuji & Hakone Private Tour By Car With Pick Up',
      duration: '8 hours',
      groupSize: 'Up to 12',
      provider: 'Karvaan Tours',
      price: 458,
      priceType: 'Group',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 3,
      location: 'Kyoto, Japan',
      rating: 4.9,
      reviews: 521,
      title: 'Traditional Kyoto Temples & Gardens Experience',
      duration: '6 hours',
      groupSize: 'Up to 15',
      provider: 'Japan Travel Co',
      price: 125,
      priceType: 'Group',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 4,
      location: 'Osaka, Japan',
      rating: 4.7,
      reviews: 289,
      title: 'Osaka Food & Culture Walking Tour',
      duration: '4 hours',
      groupSize: 'Up to 10',
      provider: 'Local Adventures',
      price: 89,
      priceType: 'Group',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    }
  ];

  // Scroll to card when hovering on partially visible card
  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cards = scrollContainer.querySelectorAll('.love-most-card');
    if (!cards[index]) return;

    const card = cards[index];
    const containerRect = scrollContainer.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // Check if card is partially visible (not fully in view)
    const isPartiallyVisible = cardRect.right > containerRect.right || cardRect.left < containerRect.left;

    if (isPartiallyVisible) {
      const scrollLeft = card.offsetLeft - 16;
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
        .love-most-section {
          width: 100%;
          padding: 1.5rem 1rem;
          background: #f5f7fa;
        }
        .love-most-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        .love-most-scroll {
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
        .love-most-scroll::-webkit-scrollbar {
          display: none;
        }
        .love-most-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .love-most-card {
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
        .love-most-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .love-most-image-container {
          position: relative;
          width: 100%;
          height: 7rem;
          overflow: hidden;
        }
        .love-most-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .love-most-actions {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          display: flex;
          gap: 0.35rem;
        }
        .love-most-action-icon {
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
        .love-most-action-icon:hover {
          background: white;
        }
        .love-most-action-icon svg {
          width: 12px;
          height: 12px;
        }
        .love-most-content {
          padding: 0.5rem;
        }
        .love-most-location-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.35rem;
        }
        .love-most-location {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.65rem;
          color: #6b7280;
        }
        .love-most-rating {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          font-size: 0.65rem;
          color: #1f2937;
          font-weight: 500;
        }
        .love-most-card-title {
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
        .love-most-details {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          color: #6b7280;
        }
        .love-most-detail-item {
          display: flex;
          align-items: center;
          gap: 0.15rem;
        }
        .love-most-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 0.4rem;
          padding-top: 0.4rem;
          border-top: 1px solid #f3f4f6;
        }
        .love-most-price {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1f2937;
        }
        .love-most-price-type {
          font-size: 0.6rem;
          color: #6b7280;
          font-weight: 400;
        }
        .love-most-provider {
          font-size: 0.6rem;
          color: #6b7280;
          text-align: right;
        }
        @media (max-width: 480px) {
          .love-most-section {
            padding: 1rem 0 !important;
            margin-left: -16px !important;
            margin-right: -16px !important;
            width: calc(100% + 32px) !important;
            max-width: calc(100% + 32px) !important;
            position: relative;
            box-sizing: border-box;
          }
          .love-most-title {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .love-most-scroll {
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
          .love-most-card {
            width: 140px !important;
            min-width: 140px !important;
            max-width: 140px !important;
            margin: 0 !important;
            border-radius: 0.5rem !important;
            flex-shrink: 0 !important;
            box-sizing: border-box;
          }
          .love-most-image-container {
            height: 6rem !important;
            width: 100% !important;
          }
          .love-most-image {
            width: 100% !important;
            border-radius: 0.5rem 0.5rem 0 0 !important;
          }
          .love-most-content {
            padding: 0.4rem !important;
          }
          .love-most-card-title {
            font-size: 0.65rem !important;
          }
          .love-most-location, .love-most-rating {
            font-size: 0.55rem !important;
          }
          .love-most-details {
            font-size: 0.55rem !important;
            gap: 0.3rem !important;
          }
          .love-most-price {
            font-size: 0.75rem !important;
          }
          .love-most-action-icon {
            width: 1.2rem !important;
            height: 1.2rem !important;
          }
          .love-most-action-icon svg {
            width: 10px !important;
            height: 10px !important;
          }
        }
      `}</style>
      <section className="love-most-section">
        <h2 className="love-most-title">Things You'll Love Most in Japan</h2>

        <div
          ref={scrollContainerRef}
          className="love-most-scroll"
        >
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="love-most-card"
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="love-most-image-container">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="love-most-image"
                  loading="lazy"
                />
                <div className="love-most-actions">
                  <div className="love-most-action-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div className="love-most-action-icon">
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

              <div className="love-most-content">
                <div className="love-most-location-row">
                  <div className="love-most-location">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{activity.location}</span>
                  </div>
                  <div className="love-most-rating">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>{activity.rating} ({activity.reviews})</span>
                  </div>
                </div>

                <h3 className="love-most-card-title">{activity.title}</h3>

                <div className="love-most-details">
                  <div className="love-most-detail-item">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{activity.duration}</span>
                  </div>
                  <div className="love-most-detail-item">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>{activity.groupSize}</span>
                  </div>
                </div>

                <div className="love-most-footer">
                  <div className="love-most-price">
                    ${activity.price}<span className="love-most-price-type">/{activity.priceType}</span>
                  </div>
                  <div className="love-most-provider">
                    {activity.provider}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LoveMost;
