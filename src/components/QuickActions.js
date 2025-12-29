import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    { id: 1, label: 'Add New', icon: '➕', color: '#667eea' },
    { id: 2, label: 'Analytics', icon: '📊', color: '#10b981' },
    { id: 3, label: 'Reports', icon: '📄', color: '#f59e0b' },
    { id: 4, label: 'Settings', icon: '⚙️', color: '#6b7280' },
  ];

  return (
    <section className="quick-actions-section">
      <h2 className="section-title">Quick Actions</h2>
      <div className="quick-actions">
        {actions.map((action) => (
          <button key={action.id} className="action-button" style={{ '--action-color': action.color }}>
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;

