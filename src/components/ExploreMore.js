import React from 'react';

const ExploreMore = () => {
  const exploreItems = [
    { id: 1, number: '01', text: 'Holiday packages japan' },
    { id: 2, number: '02', text: 'Ueno park Tokyo' },
    { id: 3, number: '03', text: 'Japan tour packages from India' },
    { id: 4, number: '04', text: 'Disney Sea Japan' },
    { id: 5, number: '05', text: 'Best temples in Japan' },
    { id: 6, number: '06', text: 'Sumo Tokyo Japan' },
    { id: 7, number: '07', text: 'Japan travel' },
    { id: 8, number: '08', text: 'Luxury cars' },
    { id: 9, number: '09', text: 'Highly professional drivers' },
    { id: 10, number: '10', text: 'Custom-made itineraries' },
    { id: 11, number: '11', text: 'Personalized tours' },
    { id: 12, number: '12', text: 'Small group journeys' },
    { id: 13, number: '13', text: 'Kyoto japan to Tokyo' },
    { id: 14, number: '14', text: 'Kyoto attractions' },
    { id: 15, number: '15', text: 'Best time to visit japan' },
    { id: 16, number: '16', text: "Trips Adora's choice" }
  ];

  return (
    <>
      <style>{`
        .explore-more-section {
          width: 100%;
          padding: 1.5rem 1rem 1rem;
          background: #f5f7fa;
          margin-bottom: 0;
        }
        .explore-more-title {
          font-size: 1rem;
          font-weight: 500;
          color: #4b5563;
          margin-bottom: 1rem;
        }
        .explore-more-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .explore-item {
          display: flex;
          align-items: center;
          background: #1e3a5f;
          color: white;
          border-radius: 2rem;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          height: 2.25rem;
          overflow: hidden;
        }
        .explore-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
        .explore-item-number {
          background: #F6C604;
          color: #243D75;
          font-weight: 700;
          font-size: 0.65rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.5rem;
          flex-shrink: 0;
        }
        .explore-item-text {
          font-size: 0.7rem;
          font-weight: 400;
          color: white;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Footer Controls */
        .footer-controls {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .footer-selects {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-select-wrapper {
          position: relative;
          width: 120px;
        }
        .footer-select {
          width: 100%;
          padding: 0.5rem 2rem 0.5rem 0.75rem;
          background: #e5e7eb;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          color: #374151;
          appearance: none;
          cursor: pointer;
        }
        .footer-select-chevron {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          width: 0.875rem;
          height: 0.875rem;
          color: #6b7280;
        }
        .footer-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-button {
          padding: 0.5rem 1.5rem;
          background: #1e3a5f;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          min-width: 100px;
        }
        .footer-button:hover {
          background: #1e3a8a;
        }

        /* Bottom Section */
        .footer-bottom-row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }
        .footer-logo-icon {
          font-size: 1.25rem;
        }
        .footer-logo-text {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
        }
        .follow-us-section {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .follow-us-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }
        .social-icons {
          display: flex;
          gap: 0.5rem;
        }
        .social-icon {
          width: 2rem;
          height: 2rem;
          background: #1e3a5f;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.75rem;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
        }
        .social-icon:hover {
          transform: scale(1.1);
          background: #1e3a8a;
        }
        .social-icon svg {
          width: 0.875rem;
          height: 0.875rem;
        }

        @media (max-width: 380px) {
          .explore-more-grid {
            gap: 0.4rem;
          }
          .explore-item {
            padding: 0.4rem 0.6rem;
            height: 2rem;
          }
          .explore-item-number {
            width: 1.35rem;
            height: 1.35rem;
            font-size: 0.6rem;
            margin-right: 0.4rem;
          }
          .explore-item-text {
            font-size: 0.65rem;
          }
          .footer-select-wrapper {
            width: 100px;
          }
          .footer-select {
            font-size: 0.7rem;
            padding: 0.4rem 1.75rem 0.4rem 0.6rem;
          }
          .footer-button {
            padding: 0.4rem 1rem;
            font-size: 0.7rem;
            min-width: 80px;
          }
          .social-icon {
            width: 1.75rem;
            height: 1.75rem;
            font-size: 0.7rem;
          }
        }
      `}</style>
      <section className="explore-more-section">
        <h2 className="explore-more-title">Explore more with Trips Adora</h2>

        <div className="explore-more-grid">
          {exploreItems.map((item) => (
            <div key={item.id} className="explore-item">
              <div className="explore-item-number">{item.number}</div>
              <div className="explore-item-text">{item.text}</div>
            </div>
          ))}
        </div>

        <div className="footer-controls">
          <div className="footer-selects">
            <div className="footer-select-wrapper">
              <select className="footer-select" aria-label="Select language">
                <option value="en">Language</option>
                <option value="en">English</option>
                <option value="ja">Japanese</option>
              </select>
              <svg className="footer-select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <div className="footer-select-wrapper">
              <select className="footer-select" aria-label="Select currency">
                <option value="usd">Currency</option>
                <option value="usd">USD ($)</option>
                <option value="jpy">JPY (¥)</option>
              </select>
              <svg className="footer-select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          <div className="footer-buttons">
            <button className="footer-button">Help</button>
            <button className="footer-button">Feedback</button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-logo">
            <span className="footer-logo-icon">🐼</span>
            <span className="footer-logo-text">TripsAdora</span>
          </div>

          <div className="follow-us-section">
            <div className="follow-us-label">Follow Us</div>
            <div className="social-icons">
              <div className="social-icon" aria-label="Email">@</div>
              <div className="social-icon" aria-label="LinkedIn">in</div>
              <div className="social-icon" aria-label="Facebook">f</div>
              <div className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreMore;
