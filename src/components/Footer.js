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

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <style>{`
        .footer-container {
          width: 100%;
          background: #f5f5f5;
          padding: 24px 16px 20px;
        }

        .footer-content {
          display: flex;
          flex-direction: row;
          gap: 24px;
          max-width: 100%;
        }

        /* Left Column - Accordion Menu */
        .footer-menu-column {
          flex: 1;
          min-width: 0;
        }

        .accordion-item {
          border-bottom: 1px solid #d1d5db;
        }

        .accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
        }

        .accordion-title {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
        }

        .accordion-chevron {
          width: 20px;
          height: 20px;
          color: #6b7280;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .accordion-chevron.open {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .accordion-content.open {
          max-height: 300px;
        }

        .accordion-list {
          padding: 0 0 12px 0;
          margin: 0;
          list-style: none;
        }

        .accordion-list-item {
          padding: 8px 0;
          font-size: 14px;
          color: #6b7280;
          cursor: pointer;
        }

        /* Right Column - Payment Section */
        .footer-payment-column {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .payment-title {
          font-size: 13px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 12px 0;
          text-align: right;
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(3, 36px);
          gap: 8px;
          margin-bottom: 16px;
        }

        .payment-icon {
          width: 36px;
          height: 26px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
        }

        /* American Express */
        .payment-amex {
          background: #1a4789;
          font-size: 5px;
          line-height: 1.1;
          text-align: center;
        }

        /* Visa */
        .payment-visa {
          background: #1a1f71;
          font-size: 9px;
          font-weight: 800;
          font-style: italic;
        }

        /* PayPal */
        .payment-paypal {
          background: #003087;
          font-size: 14px;
          font-style: italic;
          font-weight: 800;
        }

        /* Mastercard */
        .payment-mastercard {
          background: #1a4789;
          padding: 2px;
        }

        /* 27 Icon */
        .payment-27 {
          background: #22c55e;
          font-size: 11px;
          font-weight: 800;
        }

        /* Apple */
        .payment-apple {
          background: transparent;
        }

        /* Skrill */
        .payment-skrill {
          background: #6366f1;
          font-size: 14px;
          font-weight: 700;
        }

        /* Cherry Icon */
        .payment-cherry {
          background: transparent;
        }

        /* Contact Info Section */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #374151;
        }

        .contact-icon {
          width: 16px;
          height: 16px;
          color: #6b7280;
        }

        /* Copyright Section */
        .footer-copyright {
          text-align: center;
          padding-top: 24px;
          margin-top: 20px;
          border-top: 1px solid #e5e7eb;
          font-size: 13px;
          color: #9ca3af;
        }
      `}</style>

      <footer className="footer-container">
        <div className="footer-content">
          {/* Left Column - Accordion Menu */}
          <div className="footer-menu-column">
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

          {/* Right Column - Payment Section */}
          <div className="footer-payment-column">
            <h3 className="payment-title">Secure Payment Channels</h3>

            <div className="payment-grid">
              {/* Row 1 */}
              <div className="payment-icon payment-amex">
                AMERICAN<br/>EXPRESS
              </div>
              <div className="payment-icon payment-visa">VISA</div>
              <div className="payment-icon payment-paypal">P</div>

              {/* Row 2 */}
              <div className="payment-icon payment-mastercard">
                <svg width="28" height="18" viewBox="0 0 32 20">
                  <circle cx="11" cy="10" r="9" fill="#eb001b"/>
                  <circle cx="21" cy="10" r="9" fill="#f79e1b"/>
                </svg>
              </div>
              <div className="payment-icon payment-27">27</div>
              <div className="payment-icon payment-apple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#b91c1c">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>

              {/* Row 3 */}
              <div className="payment-icon payment-skrill">S</div>
              <div className="payment-icon payment-cherry">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#b91c1c">
                  <path d="M12 21c-1.5 0-2.8-.4-3.8-1.2-.5.1-1 .2-1.5.2-2.8 0-5-2.2-5-5 0-1.7.9-3.3 2.3-4.2-.2-.6-.3-1.2-.3-1.8 0-2.5 1.7-4.6 4-5.2.6-1.7 2.2-3 4.1-3s3.5 1.2 4.1 3c2.3.6 4 2.7 4 5.2 0 .6-.1 1.2-.3 1.8 1.4.9 2.3 2.5 2.3 4.2 0 2.8-2.2 5-5 5-.5 0-1-.1-1.5-.2-1 .8-2.3 1.2-3.8 1.2z"/>
                </svg>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <svg
                  className="contact-icon"
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
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span>Secure Booking</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          © 2025 TripAdora. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
