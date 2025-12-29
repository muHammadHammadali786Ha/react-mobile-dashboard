import React, { useState } from 'react';

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const menuData = [
    {
      title: 'Company',
      items: ['About Us', 'Careers', 'Press', 'Blog', 'Contact Us']
    },
    {
      title: 'Support',
      items: ['Help Center', 'Safety Information', 'Cancellation Options', 'Report a Concern', 'FAQs']
    },
    {
      title: 'Partner With Us',
      items: ['List Your Property', 'Become an Affiliate', 'Travel Agents', 'Business Travel', 'Advertise']
    },
    {
      title: 'Explore',
      items: ['Destinations', 'Travel Guides', 'Best Deals', 'Last Minute Offers', 'Seasonal Packages']
    }
  ];

  const paymentMethods = [
    { name: 'American Express', bg: '#1a4789', text: 'AMEX', textSize: '0.5rem' },
    { name: 'Visa', bg: '#1a1f71', text: 'VISA', textSize: '0.55rem' },
    { name: 'PayPal', bg: '#003087', text: 'P', textSize: '0.9rem' },
    { name: 'Mastercard', bg: '#0ea5e9', text: '₹', textSize: '0.9rem' },
    { name: 'Stripe', bg: '#635bff', text: 'S', textSize: '0.9rem' },
    { name: 'Apple Pay', bg: '#000000', icon: 'apple' }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <style>{`
        .mobile-footer {
          width: 100%;
          padding: 1rem 1rem 1.5rem;
          background: #f5f7fa;
          border-top: none;
          margin-top: 0;
        }

        .mobile-footer-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 400px;
          margin: 0 auto;
        }

        /* Accordion Menu Section */
        .mobile-menu-section {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .accordion-item {
          border-bottom: 1px solid #f1f5f9;
        }

        .accordion-item:last-child {
          border-bottom: none;
        }

        .accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: white;
          border: none;
          width: 100%;
          text-align: left;
        }

        .accordion-header:hover {
          background: #f8fafc;
        }

        .accordion-header:active {
          background: #f1f5f9;
        }

        .accordion-title {
          font-size: 0.95rem;
          font-weight: 500;
          color: #334155;
        }

        .accordion-chevron {
          width: 18px;
          height: 18px;
          color: #94a3b8;
          transition: transform 0.3s ease;
        }

        .accordion-chevron.open {
          transform: rotate(180deg);
        }

        .accordion-header:hover .accordion-chevron {
          color: #64748b;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: #f8fafc;
        }

        .accordion-content.open {
          max-height: 300px;
        }

        .accordion-list {
          padding: 0.5rem 1.25rem 1rem;
          margin: 0;
          list-style: none;
        }

        .accordion-list-item {
          padding: 0.5rem 0;
          font-size: 0.85rem;
          color: #64748b;
          cursor: pointer;
          transition: color 0.2s ease;
          border-bottom: 1px solid #e2e8f0;
        }

        .accordion-list-item:last-child {
          border-bottom: none;
        }

        .accordion-list-item:hover {
          color: #1e40af;
        }

        /* Payment Section */
        .mobile-payment-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-payment-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
          text-align: center;
          margin-bottom: 0.25rem;
        }

        .mobile-payment-grid {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 0.5rem;
          padding: 0 0.5rem;
        }

        .mobile-payment-card {
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0.25rem;
          height: 32px;
          width: 44px;
        }

        .mobile-payment-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
        }

        .mobile-payment-icon {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-weight: 700;
          color: white;
        }

        /* Contact Info */
        .mobile-contact-section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 1.5rem;
          padding-top: 0.5rem;
        }

        .mobile-contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
        }

        .mobile-contact-icon {
          width: 16px;
          height: 16px;
          color: #94a3b8;
        }

        /* Copyright */
        .mobile-copyright {
          text-align: center;
          padding-top: 1.5rem;
          margin-top: 0.5rem;
          border-top: 1px solid #e2e8f0;
          font-size: 0.8rem;
          color: #94a3b8;
        }
      `}</style>

      <footer className="mobile-footer">
        <div className="mobile-footer-wrapper">
          {/* Accordion Menu */}
          <div className="mobile-menu-section">
            {menuData.map((menu, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="accordion-title">{menu.title}</span>
                  <svg
                    className={`accordion-chevron ${openAccordion === index ? 'open' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`accordion-content ${openAccordion === index ? 'open' : ''}`}>
                  <ul className="accordion-list">
                    {menu.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="accordion-list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Section */}
          <div className="mobile-payment-section">
            <h3 className="mobile-payment-title">Secure Payment Channels</h3>
            <div className="mobile-payment-grid">
              {paymentMethods.map((method, index) => (
                <div key={index} className="mobile-payment-card" title={method.name}>
                  <div
                    className="mobile-payment-icon"
                    style={{
                      backgroundColor: method.bg,
                      fontSize: method.textSize || '0.9rem'
                    }}
                  >
                    {method.icon === 'apple' ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    ) : method.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mobile-contact-section">
              <div className="mobile-contact-item">
                <svg
                  className="mobile-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+1-800-Travel</span>
              </div>
              <div className="mobile-contact-item">
                <svg
                  className="mobile-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span>Secure Booking</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-copyright">
          © 2025 TripAdora. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
