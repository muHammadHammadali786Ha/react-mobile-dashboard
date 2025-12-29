import React from 'react';
import './StatsCards.css';

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: 'Total Revenue',
      value: '$12,450',
      change: '+12.5%',
      trend: 'up',
      icon: '💰',
    },
    {
      id: 2,
      title: 'Active Users',
      value: '2,340',
      change: '+8.2%',
      trend: 'up',
      icon: '👥',
    },
    {
      id: 3,
      title: 'Orders',
      value: '1,234',
      change: '-2.1%',
      trend: 'down',
      icon: '📦',
    },
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-content">
            <p className="stat-title">{stat.title}</p>
            <h3 className="stat-value">{stat.value}</h3>
            <div className={`stat-change ${stat.trend}`}>
              <span>{stat.change}</span>
              <span className="stat-period">vs last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

