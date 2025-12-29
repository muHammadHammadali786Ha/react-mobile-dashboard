import React from 'react';

const TravelConsultation = () => {
  const benefits = [
    { id: 1, text: 'Personalized recommendations' },
    { id: 2, text: 'Flexible scheduling' },
    { id: 3, text: '24/7 support available' }
  ];

  const contactOptions = [
    { id: 1, text: 'Live Chat' },
    { id: 2, text: 'Call Us' },
    { id: 3, text: 'Schedule a Call' }
  ];

  return (
    <>
      <style>{`
        .consultation-section {
          width: 100%;
          padding: 1rem;
          background: #f5f7fa;
        }
        .consultation-card {
          background: linear-gradient(135deg, #f9b233 0%, #f5a623 100%);
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 4px 15px rgba(245, 166, 35, 0.3);
        }
        .consultation-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        .consultation-description {
          font-size: 0.8rem;
          color: #333;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .consultation-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .consultation-left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
        .consultation-right {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }
        .consultation-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .consultation-icon {
          width: 16px;
          height: 16px;
          color: #1a1a1a;
          flex-shrink: 0;
        }
        .consultation-text {
          font-size: 0.75rem;
          color: #1a1a1a;
          font-weight: 500;
          line-height: 1.3;
        }
        .consultation-button {
          background: #fffbeb;
          color: #92400e;
          border: none;
          border-radius: 1.5rem;
          padding: 0.6rem 1.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 0.75rem;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .consultation-button:hover {
          background: #fef3c7;
          transform: translateY(-1px);
        }
        .consultation-button:active {
          transform: translateY(0);
        }

        @media (max-width: 380px) {
          .consultation-card {
            padding: 1rem;
          }
          .consultation-title {
            font-size: 1rem;
          }
          .consultation-description {
            font-size: 0.75rem;
            margin-bottom: 0.875rem;
          }
          .consultation-content {
            gap: 0.5rem;
          }
          .consultation-item {
            gap: 0.375rem;
          }
          .consultation-icon {
            width: 14px;
            height: 14px;
          }
          .consultation-text {
            font-size: 0.7rem;
          }
          .consultation-button {
            font-size: 0.7rem;
            padding: 0.5rem 1rem;
            margin-top: 0.5rem;
          }
        }
      `}</style>
      <section className="consultation-section">
        <div className="consultation-card">
          <h2 className="consultation-title">Get Free Travel Consultation</h2>

          <p className="consultation-description">
            Our expert travel consultants are here to help you plan the perfect trip. From destination selection to customized itineraries, we've got you covered.
          </p>

          <div className="consultation-content">
            <div className="consultation-left">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="consultation-item">
                  <svg className="consultation-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {benefit.id === 1 && <><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></>}
                    {benefit.id === 2 && <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 16l2 2 4-4"/></>}
                    {benefit.id === 3 && <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></>}
                  </svg>
                  <span className="consultation-text">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="consultation-right">
              {contactOptions.map((option) => (
                <div key={option.id} className="consultation-item">
                  <svg className="consultation-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {option.id === 1 && <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>}
                    {option.id === 2 && <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></>}
                    {option.id === 3 && <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>}
                  </svg>
                  <span className="consultation-text">{option.text}</span>
                </div>
              ))}
              <button className="consultation-button">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelConsultation;
