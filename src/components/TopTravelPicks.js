import React, { useRef, useState } from 'react';

const TopTravelPicks = () => {
  const scrollContainerRef = useRef(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'LONDON',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badgeColor: '#6b7280'
    },
    {
      id: 2,
      name: 'DUBAI',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badgeColor: '#3b82f6'
    },
    {
      id: 3,
      name: 'CA',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badgeColor: '#f59e0b'
    },
    {
      id: 4,
      name: 'SINGAPORE',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badgeColor: '#a78bfa'
    }
  ];

  // Scroll to card when hovering on partially visible card
  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cards = scrollContainer.querySelectorAll('.travel-pick-card');
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
        .top-travel-picks-section {
          width: 100%;
          padding: 1.5rem 1rem;
          background: #f5f7fa;
        }
        .travel-picks-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        .travel-picks-scroll {
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
        .travel-picks-scroll::-webkit-scrollbar {
          display: none;
        }
        .travel-picks-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .travel-pick-card {
          flex-shrink: 0;
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          width: 150px;
          min-width: 150px;
          max-width: 150px;
          box-sizing: border-box;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .travel-pick-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .travel-pick-image-container {
          position: relative;
          width: 100%;
          height: 8rem;
          overflow: hidden;
        }
        .travel-pick-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .travel-pick-badge {
          position: absolute;
          top: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(156, 163, 175, 0.9);
          color: white;
          padding: 0.35rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
        }
        .travel-pick-card:nth-child(1) .travel-pick-badge {
          background: rgba(156, 163, 175, 0.9);
        }
        .travel-pick-card:nth-child(2) .travel-pick-badge {
          background: rgba(96, 165, 250, 0.9);
        }
        .travel-pick-card:nth-child(3) .travel-pick-badge {
          background: rgba(52, 211, 153, 0.9);
        }
        .travel-pick-card:nth-child(4) .travel-pick-badge {
          background: rgba(167, 139, 250, 0.9);
        }
        @media (max-width: 480px) {
          .top-travel-picks-section {
            padding: 1rem 0 !important;
            margin-left: -16px !important;
            margin-right: -16px !important;
            width: calc(100% + 32px) !important;
            max-width: calc(100% + 32px) !important;
            position: relative;
            box-sizing: border-box;
          }
          .travel-picks-title {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .travel-picks-scroll {
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
          .travel-pick-card {
            width: 140px !important;
            min-width: 140px !important;
            max-width: 140px !important;
            margin: 0 !important;
            border-radius: 0.5rem !important;
            flex-shrink: 0 !important;
            box-sizing: border-box;
          }
          .travel-pick-image-container {
            height: 7rem !important;
            width: 100% !important;
          }
          .travel-pick-image {
            width: 100% !important;
            border-radius: 0.5rem !important;
          }
          .travel-pick-badge {
            font-size: 0.6rem !important;
            padding: 0.25rem 0.5rem !important;
          }
        }
      `}</style>
      <section className="top-travel-picks-section">
        <h2 className="travel-picks-title">Top Travel Picks</h2>

        <div
          ref={scrollContainerRef}
          className="travel-picks-scroll"
        >
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="travel-pick-card"
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="travel-pick-image-container">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="travel-pick-image"
                  loading="lazy"
                />
                <div className="travel-pick-badge" style={{ background: destination.badgeColor + 'CC' }}>
                  {destination.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopTravelPicks;

