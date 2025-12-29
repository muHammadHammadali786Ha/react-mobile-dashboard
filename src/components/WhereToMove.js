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
          padding: 1rem 0.875rem;
          border-radius: 1rem;
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

        .section-title {
          position: relative;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.875rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .destination-grid {
          position: relative;
          display: flex;
          flex-direction: row;
          gap: 0.625rem;
          justify-content: space-between;
        }

        .destination-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .destination-card:hover {
          transform: translateY(-3px);
        }

        .destination-card:active {
          transform: scale(0.96);
        }

        .destination-image-wrapper {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          margin-bottom: 0.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
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
          font-size: 0.75rem;
          font-weight: 600;
          text-align: center;
          margin: 0;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.02em;
        }

        @media (max-width: 380px) {
          .where-to-move-section {
            padding: 0.875rem 0.75rem;
            border-radius: 0.875rem;
          }

          .section-title {
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
          }

          .destination-grid {
            gap: 0.5rem;
          }

          .destination-image-wrapper {
            border-radius: 0.625rem;
            margin-bottom: 0.4rem;
          }

          .destination-name {
            font-size: 0.7rem;
          }
        }
      `}</style>

      <section className="where-to-move-section">
        <h2 className="section-title">Where to move?</h2>

        <div className="destination-grid">
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
