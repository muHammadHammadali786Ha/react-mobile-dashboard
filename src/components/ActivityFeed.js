import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'order',
      title: 'New order received',
      description: 'Order #1234 from John Smith',
      time: '2 min ago',
      icon: '📦',
    },
    {
      id: 2,
      type: 'user',
      title: 'New user registered',
      description: 'Sarah Johnson joined the platform',
      time: '15 min ago',
      icon: '👤',
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment processed',
      description: '$450 payment from Order #1230',
      time: '1 hour ago',
      icon: '💳',
    },
    {
      id: 4,
      type: 'update',
      title: 'System update',
      description: 'Dashboard v2.1 deployed successfully',
      time: '2 hours ago',
      icon: '🔄',
    },
  ];

  return (
    <section className="activity-feed-section">
      <div className="activity-header">
        <h2 className="section-title">Recent Activity</h2>
        <button className="view-all-button">View All</button>
      </div>
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-content">
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityFeed;

