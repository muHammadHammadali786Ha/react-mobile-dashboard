import React, { useRef, useEffect, useState } from 'react';

const TripsAdoraAdvantage = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndexRef = useRef(0);
  const scrollIntervalRef = useRef(null);
  const startTimeoutRef = useRef(null);

  const advantageCards = [
    {
      id: 1,
      type: 'supplier',
      title: 'BECOME A RICH PANDA SUPPLIER',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      stats: [
        { label: 'Active Users', value: '10M+' },
        { label: 'Avg.growth', value: '30%' },
        { label: 'Countries', value: '150+' }
      ],
      buttonText: 'Get Started Now'
    },
    {
      id: 2,
      type: 'traveler',
      value: '3.6M+',
      title: 'Satisfied travellers',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
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
        
        const nextIndex = (currentIndexRef.current + 1) % advantageCards.length;
        currentIndexRef.current = nextIndex;
        
        const cards = scrollContainer.querySelectorAll('.advantage-card');
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
  }, [isPaused, advantageCards.length]);

  // Pause on user interaction
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 2000); // Resume after 2 seconds
  };

  return (
    <>
      <style>{`
        .advantage-section {
          width: 100%;
          padding: 1.5rem 1rem;
          background: #f5f7fa;
        }
        .advantage-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
          text-align: center;
        }
        .advantage-scroll {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          width: 100%;
          max-width: 100%;
          position: relative;
          padding: 0;
          gap: 0;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .advantage-scroll::-webkit-scrollbar {
          display: none;
        }
        .advantage-card {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          flex-shrink: 0;
          background: white;
          border-radius: 0;
          overflow: hidden;
          box-shadow: none;
          position: relative;
          width: 100%;
          min-width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        }
        .advantage-card-inner {
          margin: 0 1rem;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .supplier-card {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .supplier-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .supplier-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
        }
        .supplier-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .supplier-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .supplier-stats {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          justify-content: flex-start;
        }
        .supplier-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.4rem 0.6rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          border-radius: 0.4rem;
          min-width: 60px;
        }
        .supplier-stat-icon {
          width: 16px;
          height: 16px;
          margin-bottom: 0.2rem;
        }
        .supplier-stat-label {
          font-size: 0.55rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.1rem;
        }
        .supplier-stat-value {
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
        }
        .supplier-button {
          width: 100%;
          padding: 0.65rem 1rem;
          background: #14b8a6;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .supplier-button:hover {
          background: #0d9488;
        }
        .traveler-card {
          position: relative;
          height: 220px;
          background: transparent;
          overflow: hidden;
        }
        .traveler-image-container {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .traveler-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .traveler-overlay {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 0.5rem;
          padding: 1rem 1.25rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .traveler-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e40af;
          margin: 0 0 0.25rem 0;
          line-height: 1;
        }
        .traveler-divider {
          width: 100%;
          height: 1px;
          background: #e5e7eb;
          margin: 0.5rem 0;
        }
        .traveler-title {
          font-size: 0.85rem;
          font-weight: 500;
          color: #6b7280;
          margin: 0;
        }
        @media (max-width: 480px) {
          .advantage-section {
            padding: 1rem 0 !important;
            margin-left: -16px !important;
            margin-right: -16px !important;
            width: calc(100% + 32px) !important;
            max-width: calc(100% + 32px) !important;
            position: relative;
            box-sizing: border-box;
            overflow: hidden;
          }
          .advantage-title {
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1rem;
          }
          .advantage-scroll {
            scroll-snap-type: x mandatory;
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 16px !important;
            gap: 16px !important;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-padding: 0 16px;
          }
          .advantage-card {
            width: calc(100vw - 32px) !important;
            min-width: calc(100vw - 32px) !important;
            max-width: calc(100vw - 32px) !important;
            scroll-snap-align: start;
            margin: 0 !important;
          }
          .advantage-card-inner {
            margin: 0;
            border-radius: 1rem;
          }
          .supplier-card {
            height: 200px;
          }
          .supplier-overlay {
            padding: 0.875rem;
          }
          .supplier-title {
            font-size: 0.75rem;
          }
          .supplier-stats {
            gap: 0.4rem;
          }
          .supplier-stat-item {
            padding: 0.3rem 0.5rem;
            min-width: 55px;
          }
          .supplier-stat-label {
            font-size: 0.5rem;
          }
          .supplier-stat-value {
            font-size: 0.7rem;
          }
          .supplier-button {
            padding: 0.55rem 0.875rem;
            font-size: 0.75rem;
          }
          .traveler-card {
            height: 200px;
          }
          .traveler-overlay {
            bottom: 0.75rem;
            right: 0.75rem;
            padding: 0.75rem 1rem;
          }
          .traveler-value {
            font-size: 1.5rem;
          }
          .traveler-title {
            font-size: 0.75rem;
          }
        }
      `}</style>
      <section className="advantage-section">
        <h2 className="advantage-title">The Trips Adora's Advantage</h2>
        
        <div
          ref={scrollContainerRef}
          className="advantage-scroll"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {advantageCards.map((card) => (
            <div key={card.id} className="advantage-card">
              <div className={`advantage-card-inner ${card.type}-card`}>
                {card.type === 'supplier' ? (
                  <>
                    <img
                      src={card.image}
                      alt="Panda Supplier"
                      className="supplier-bg-image"
                      loading="lazy"
                    />
                    <div className="supplier-overlay">
                      <h3 className="supplier-title">{card.title}</h3>
                      <div className="supplier-bottom">
                        <div className="supplier-stats">
                          {card.stats.map((stat, index) => (
                            <div key={index} className="supplier-stat-item">
                              <svg className="supplier-stat-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                {index === 0 && <><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="11" r="3"/><path d="M21 21v-2a3 3 0 0 0-2-2.83"/></>}
                                {index === 1 && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>}
                                {index === 2 && <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
                              </svg>
                              <div className="supplier-stat-label">{stat.label}</div>
                              <div className="supplier-stat-value">{stat.value}</div>
                            </div>
                          ))}
                        </div>
                        <button className="supplier-button">{card.buttonText}</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={card.image}
                      alt="Travel"
                      className="traveler-image"
                      loading="lazy"
                    />
                    <div className="traveler-overlay">
                      <div className="traveler-value">{card.value}</div>
                      <div className="traveler-divider"></div>
                      <div className="traveler-title">{card.title}</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TripsAdoraAdvantage;

