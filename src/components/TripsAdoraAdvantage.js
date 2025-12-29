import React, { useRef, useState } from 'react';

const TripsAdoraAdvantage = () => {
  const scrollContainerRef = useRef(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const advantageCards = [
    {
      id: 1,
      type: 'supplier',
      title: 'BECOME A RICH PANDA SUPPLIER',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      stats: [
        { label: 'Active Users', value: '10M+', icon: 'users' },
        { label: 'Avg.growth', value: '30%', icon: 'growth' },
        { label: 'Countries', value: '150+', icon: 'globe' }
      ],
      buttonText: 'Get Started Now'
    },
    {
      id: 2,
      type: 'traveler',
      value: '3.6M+',
      title: 'Satisfied travellers',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 3,
      type: 'urgent',
      value: '9',
      title: 'Urgent travellers',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
    }
  ];

  // Scroll to card when hovering on partially visible card
  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cards = scrollContainer.querySelectorAll('.advantage-card');
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
          scroll-padding: 0 1rem;
          width: 100%;
          max-width: 100%;
          position: relative;
          padding: 0;
          gap: 0.6rem;
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding-bottom: 0.5rem;
        }
        .advantage-scroll::-webkit-scrollbar {
          display: none;
        }
        .advantage-card {
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
        .advantage-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .advantage-card-inner {
          margin: 0;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        .supplier-card {
          position: relative;
          height: 180px;
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
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0.5rem;
        }
        .supplier-title {
          font-size: 0.55rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          line-height: 1.3;
        }
        .supplier-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .supplier-stats {
          display: flex;
          flex-direction: row;
          gap: 0.25rem;
          justify-content: flex-start;
        }
        .supplier-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.2rem 0.3rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          border-radius: 0.25rem;
          min-width: 38px;
        }
        .supplier-stat-icon {
          width: 10px;
          height: 10px;
          margin-bottom: 0.1rem;
        }
        .supplier-stat-label {
          font-size: 0.4rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.05rem;
        }
        .supplier-stat-value {
          font-size: 0.5rem;
          font-weight: 700;
          color: white;
        }
        .supplier-button {
          width: 100%;
          padding: 0.35rem 0.5rem;
          background: #14b8a6;
          color: white;
          border: none;
          border-radius: 0.3rem;
          font-size: 0.55rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .supplier-button:hover {
          background: #0d9488;
        }
        .traveler-card {
          position: relative;
          height: 180px;
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
          bottom: 0.5rem;
          right: 0.5rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 0.35rem;
          padding: 0.4rem 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .traveler-value {
          font-size: 1rem;
          font-weight: 700;
          color: #1e40af;
          margin: 0 0 0.15rem 0;
          line-height: 1;
        }
        .traveler-divider {
          width: 100%;
          height: 1px;
          background: #e5e7eb;
          margin: 0.25rem 0;
        }
        .traveler-title {
          font-size: 0.55rem;
          font-weight: 500;
          color: #6b7280;
          margin: 0;
        }
        .urgent-card {
          position: relative;
          height: 180px;
          background: transparent;
          overflow: hidden;
        }
        .urgent-overlay {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 0.35rem;
          padding: 0.4rem 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .urgent-value {
          font-size: 1rem;
          font-weight: 700;
          color: #dc2626;
          margin: 0 0 0.15rem 0;
          line-height: 1;
        }
        .urgent-divider {
          width: 100%;
          height: 1px;
          background: #e5e7eb;
          margin: 0.25rem 0;
        }
        .urgent-title {
          font-size: 0.55rem;
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
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 16px !important;
            gap: 8px !important;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-padding: 0 16px;
          }
          .advantage-card {
            width: 140px !important;
            min-width: 140px !important;
            max-width: 140px !important;
            margin: 0 !important;
          }
          .advantage-card-inner {
            margin: 0;
            border-radius: 0.5rem;
          }
          .supplier-card {
            height: 160px !important;
          }
          .supplier-overlay {
            padding: 0.4rem !important;
          }
          .supplier-title {
            font-size: 0.5rem !important;
          }
          .supplier-stats {
            gap: 0.2rem !important;
          }
          .supplier-stat-item {
            padding: 0.15rem 0.25rem !important;
            min-width: 32px !important;
          }
          .supplier-stat-label {
            font-size: 0.35rem !important;
          }
          .supplier-stat-value {
            font-size: 0.45rem !important;
          }
          .supplier-button {
            padding: 0.3rem 0.4rem !important;
            font-size: 0.5rem !important;
          }
          .traveler-card {
            height: 160px !important;
          }
          .traveler-overlay {
            bottom: 0.4rem !important;
            right: 0.4rem !important;
            padding: 0.3rem 0.4rem !important;
          }
          .traveler-value {
            font-size: 0.85rem !important;
          }
          .traveler-title {
            font-size: 0.5rem !important;
          }
          .urgent-card {
            height: 160px !important;
          }
          .urgent-overlay {
            bottom: 0.4rem !important;
            right: 0.4rem !important;
            padding: 0.3rem 0.4rem !important;
          }
          .urgent-value {
            font-size: 0.85rem !important;
          }
          .urgent-title {
            font-size: 0.5rem !important;
          }
        }
      `}</style>
      <section className="advantage-section">
        <h2 className="advantage-title">The Trips Adora's Advantage</h2>

        <div
          ref={scrollContainerRef}
          className="advantage-scroll"
        >
          {advantageCards.map((card, index) => (
            <div
              key={card.id}
              className="advantage-card"
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className={`advantage-card-inner ${card.type === 'supplier' ? 'supplier' : 'traveler'}-card`}>
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
                ) : card.type === 'traveler' ? (
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
                ) : (
                  <>
                    <img
                      src={card.image}
                      alt="Urgent Travel"
                      className="traveler-image"
                      loading="lazy"
                    />
                    <div className="urgent-overlay">
                      <div className="urgent-value">{card.value}</div>
                      <div className="urgent-divider"></div>
                      <div className="urgent-title">{card.title}</div>
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

