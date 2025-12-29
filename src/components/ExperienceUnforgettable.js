import React, { useRef, useEffect, useState } from 'react';

const ExperienceUnforgettable = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndexRef = useRef(0);
  const scrollIntervalRef = useRef(null);
  const startTimeoutRef = useRef(null);

  const experiences = [
    {
      id: 1,
      title: 'Fuji Subaru Line 5th Station',
      price: 346,
      priceType: 'person',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 2,
      title: 'Oshino Hakkai & Hidden Gems Tour',
      price: 346,
      priceType: 'person',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 3,
      title: 'Chureito Pagoda',
      price: 346,
      priceType: 'person',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 4,
      title: 'Traditional Kyoto Temples Tour',
      price: 298,
      priceType: 'person',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
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
        
        const nextIndex = (currentIndexRef.current + 1) % experiences.length;
        currentIndexRef.current = nextIndex;
        
        const cards = scrollContainer.querySelectorAll('.experience-card');
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
  }, [isPaused, experiences.length]);

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
        .experience-section {
          width: 100%;
          padding: 1.5rem 1rem;
          background: #f5f7fa;
        }
        .experience-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        .experience-scroll {
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
          max-width: 100%;
          position: relative;
        }
        .experience-scroll::-webkit-scrollbar {
          display: none;
        }
        .experience-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .experience-card {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          flex-shrink: 0;
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          width: 100%;
          min-width: 100%;
          max-width: 100%;
          margin-right: 1rem;
          box-sizing: border-box;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .experience-card:hover {
          transform: scale(1.02);
        }
        .experience-image-container {
          position: relative;
          width: 100%;
          height: 12.5rem;
          overflow: hidden;
        }
        .experience-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .experience-overlay {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          background: rgba(31, 41, 55, 0.9);
          backdrop-filter: blur(6px);
          border-radius: 0.5rem;
          padding: 1rem 1.125rem;
          color: white;
          max-width: calc(100% - 3rem);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          min-width: 200px;
        }
        .experience-overlay-content {
          position: relative;
        }
        .experience-heart-icon {
          position: absolute;
          top: -0.25rem;
          right: -0.25rem;
          width: 1.5rem;
          height: 1.5rem;
          cursor: pointer;
          transition: transform 0.2s;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          padding: 0.25rem;
        }
        .experience-heart-icon:hover {
          transform: scale(1.2);
        }
        .experience-card-title {
          font-size: 0.9375rem;
          font-weight: 600;
          color: white;
          margin: 0 0 0.375rem 0;
          line-height: 1.4;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        .experience-price {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        @media (max-width: 26.75rem) {
          .experience-section {
            padding: 1.5rem 0 !important;
            margin-left: calc(-1rem - 16px) !important;
            margin-right: calc(-1rem - 16px) !important;
            width: 100vw !important;
            max-width: 100vw !important;
            position: relative;
            left: 0;
            right: 0;
          }
          .experience-title {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .experience-scroll {
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
          .experience-card {
            width: 100vw !important;
            min-width: 100vw !important;
            max-width: 100vw !important;
            margin-right: 0 !important;
            border-radius: 0 !important;
            flex-shrink: 0 !important;
            box-sizing: border-box;
          }
          .experience-scroll {
            overflow-x: auto !important;
          }
          .experience-image-container {
            height: 18.75rem;
            width: 100% !important;
          }
          .experience-image {
            width: 100% !important;
            height: 100% !important;
            border-radius: 0 !important;
            object-fit: cover;
          }
          .experience-overlay {
            bottom: 1rem;
            left: 1rem;
            padding: 1.125rem 1.25rem;
            max-width: calc(100% - 2rem);
            min-width: auto;
            background: rgba(31, 41, 55, 0.95);
          }
          .experience-card-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          .experience-price {
            font-size: 1.125rem;
          }
          .experience-heart-icon {
            width: 1.75rem;
            height: 1.75rem;
          }
        }
      `}</style>
      <section className="experience-section">
        <h2 className="experience-title">An Experience You'll Never Forget</h2>
        
        <div
          ref={scrollContainerRef}
          className="experience-scroll"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-card">
              <div className="experience-image-container">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="experience-image"
                  loading="lazy"
                />
                <div className="experience-overlay">
                  <div className="experience-overlay-content">
                    <svg
                      className="experience-heart-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <h3 className="experience-card-title">{experience.title}</h3>
                    <p className="experience-price">${experience.price}/{experience.priceType}</p>
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

export default ExperienceUnforgettable;

