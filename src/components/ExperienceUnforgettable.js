import React, { useRef, useState } from 'react';

const ExperienceUnforgettable = () => {
  const scrollContainerRef = useRef(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

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

  // Scroll to card when hovering on partially visible card
  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cards = scrollContainer.querySelectorAll('.experience-card');
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
          scroll-padding: 0 1rem;
          width: 100%;
          max-width: 100%;
          position: relative;
          gap: 0.6rem;
          padding-bottom: 0.5rem;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .experience-scroll::-webkit-scrollbar {
          display: none;
        }
        .experience-card {
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
        .experience-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .experience-image-container {
          position: relative;
          width: 100%;
          height: 10rem;
          overflow: hidden;
        }
        .experience-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .experience-overlay {
          position: absolute;
          bottom: 0.5rem;
          left: 0.5rem;
          background: rgba(31, 41, 55, 0.9);
          backdrop-filter: blur(6px);
          border-radius: 0.375rem;
          padding: 0.5rem 0.625rem;
          color: white;
          max-width: calc(100% - 1rem);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        .experience-overlay-content {
          position: relative;
        }
        .experience-heart-icon {
          position: absolute;
          top: -0.125rem;
          right: -0.125rem;
          width: 1.25rem;
          height: 1.25rem;
          cursor: pointer;
          transition: transform 0.2s;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          padding: 0.125rem;
        }
        .experience-heart-icon:hover {
          transform: scale(1.2);
        }
        .experience-card-title {
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
          margin: 0 0 0.25rem 0;
          line-height: 1.3;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .experience-price {
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        @media (max-width: 480px) {
          .experience-section {
            padding: 1rem 0 !important;
            margin-left: -16px !important;
            margin-right: -16px !important;
            width: calc(100% + 32px) !important;
            max-width: calc(100% + 32px) !important;
            position: relative;
            box-sizing: border-box;
          }
          .experience-title {
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1rem;
          }
          .experience-scroll {
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
            gap: 8px !important;
          }
          .experience-card {
            width: 140px !important;
            min-width: 140px !important;
            max-width: 140px !important;
            margin: 0 !important;
            border-radius: 0.5rem !important;
            flex-shrink: 0 !important;
            box-sizing: border-box;
          }
          .experience-image-container {
            height: 7rem !important;
            width: 100% !important;
          }
          .experience-image {
            width: 100% !important;
            height: 100% !important;
            border-radius: 0.75rem 0.75rem 0 0 !important;
            object-fit: cover;
          }
          .experience-overlay {
            bottom: 0.375rem;
            left: 0.375rem;
            padding: 0.375rem 0.5rem;
            max-width: calc(100% - 0.75rem);
            background: rgba(31, 41, 55, 0.95);
            border-radius: 0.25rem;
          }
          .experience-card-title {
            font-size: 0.6rem;
            margin-bottom: 0.125rem;
            -webkit-line-clamp: 2;
          }
          .experience-price {
            font-size: 0.65rem;
          }
          .experience-heart-icon {
            width: 1rem;
            height: 1rem;
            padding: 0.0625rem;
          }
        }
      `}</style>
      <section className="experience-section">
        <h2 className="experience-title">An Experience You'll Never Forget</h2>

        <div
          ref={scrollContainerRef}
          className="experience-scroll"
        >
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="experience-card"
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
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

