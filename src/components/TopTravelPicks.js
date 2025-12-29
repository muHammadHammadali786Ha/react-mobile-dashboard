import React, { useRef, useEffect, useState } from 'react';

const TopTravelPicks = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndexRef = useRef(0);
  const scrollIntervalRef = useRef(null);
  const startTimeoutRef = useRef(null);

  const destinations = [
    {
      id: 1,
      name: 'LONDON',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badgeColor: '#9ca3af'
    },
    {
      id: 2,
      name: 'DUBAI',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badgeColor: '#60a5fa'
    },
    {
      id: 3,
      name: 'CANADA',
      image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badgeColor: '#34d399'
    },
    {
      id: 4,
      name: 'SINGAPORE',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      badgeColor: '#a78bfa'
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
        
        const nextIndex = (currentIndexRef.current + 1) % destinations.length;
        currentIndexRef.current = nextIndex;
        
        const cards = scrollContainer.querySelectorAll('.travel-pick-card');
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
  }, [isPaused, destinations.length]);

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
          scroll-snap-type: x mandatory;
          scroll-padding: 0;
          width: 100%;
          gap: 1rem;
        }
        .travel-picks-scroll::-webkit-scrollbar {
          display: none;
        }
        .travel-picks-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .travel-pick-card {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          flex-shrink: 0;
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          width: calc(50% - 0.5rem);
          min-width: calc(50% - 0.5rem);
          max-width: calc(50% - 0.5rem);
          box-sizing: border-box;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .travel-pick-card:hover {
          transform: scale(1.02);
        }
        .travel-pick-image-container {
          position: relative;
          width: 100%;
          height: 12.5rem;
          overflow: hidden;
        }
        .travel-pick-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .travel-pick-badge {
          position: absolute;
          top: 0.75rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(156, 163, 175, 0.9);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 1.5rem;
          font-size: 0.875rem;
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
        @media (max-width: 26.75rem) {
          .top-travel-picks-section {
            padding: 1.5rem 0 !important;
            margin-left: calc(-1rem - 16px) !important;
            margin-right: calc(-1rem - 16px) !important;
            width: 100vw !important;
            max-width: 100vw !important;
            position: relative;
            left: 0;
            right: 0;
          }
          .travel-picks-title {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .travel-picks-scroll {
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
            gap: 0;
          }
          .travel-pick-card {
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            margin-right: 0 !important;
            border-radius: 0 !important;
            flex-shrink: 0 !important;
            box-sizing: border-box;
          }
          .travel-pick-image-container {
            height: 15rem;
            width: 100% !important;
          }
          .travel-pick-image {
            width: 100% !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
      <section className="top-travel-picks-section">
        <h2 className="travel-picks-title">Top Travel Picks</h2>
        
        <div
          ref={scrollContainerRef}
          className="travel-picks-scroll"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {destinations.map((destination) => (
            <div key={destination.id} className="travel-pick-card">
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

