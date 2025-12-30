import React from 'react';

const WhereToMove = () => {
  const destinations = [
    {
      id: 1,
      name: 'London',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80'
    },
    {
      id: 2,
      name: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80'
    },
    {
      id: 3,
      name: 'Canada',
      image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80'
    },
    {
      id: 4,
      name: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80'
    }
  ];

  return (
    <>
      <style>{`
        .where-to-move-section {
          position: relative;
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          margin-bottom: 1rem;
          overflow: hidden;
          background: linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #f97316 100%);
        }

        .where-to-move-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
          pointer-events: none;
        }

        .where-to-move-content {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto 1fr auto;
          gap: 8px;
        }

        .section-title {
          position: relative;
          color: white;
          font-size: 14px;
          font-weight: 600;
          font-style: italic;
          margin: 0 0 4px 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          white-space: nowrap;
          grid-column: 1;
          grid-row: 1;
        }

        .destination-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .destination-card:hover {
          transform: translateY(-2px);
        }

        .destination-card:active {
          transform: scale(0.96);
        }

        .destination-card:first-of-type {
          grid-column: 1;
          grid-row: 2 / 4;
        }

        .destination-card:nth-of-type(2),
        .destination-card:nth-of-type(3),
        .destination-card:nth-of-type(4) {
          grid-row: 1 / 4;
        }

        .destination-card:nth-of-type(2) {
          grid-column: 2;
        }

        .destination-card:nth-of-type(3) {
          grid-column: 3;
        }

        .destination-card:nth-of-type(4) {
          grid-column: 4;
        }

        .destination-image-wrapper {
          width: 100%;
          flex: 1;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          margin-bottom: 4px;
        }

        .destination-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .destination-card:hover .destination-image {
          transform: scale(1.05);
        }

        .destination-name {
          color: white;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
          margin: 0;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 380px) {
          .where-to-move-section {
            padding: 10px 12px;
            border-radius: 10px;
          }

          .where-to-move-content {
            gap: 6px;
          }

          .section-title {
            font-size: 12px;
          }

          .destination-image-wrapper {
            border-radius: 6px;
            margin-bottom: 3px;
          }

          .destination-name {
            font-size: 9px;
          }
        }
      `}</style>

      <section className="where-to-move-section">
        <div className="where-to-move-content">
          <h2 className="section-title">Where to move?</h2>
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image-wrapper">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                  loading="lazy"
                />
              </div>
              <p className="destination-name">{destination.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhereToMove;
