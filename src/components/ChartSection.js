import React from 'react';
import './ChartSection.css';

const ChartSection = () => {
  // Simple bar chart data
  const chartData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 80 },
    { day: 'Wed', value: 45 },
    { day: 'Thu', value: 90 },
    { day: 'Fri', value: 70 },
    { day: 'Sat', value: 55 },
    { day: 'Sun', value: 75 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <section className="chart-section">
      <div className="chart-header">
        <h2 className="section-title">Weekly Overview</h2>
        <select className="chart-filter">
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="chart-container">
        <div className="chart-bars">
          {chartData.map((item, index) => (
            <div key={index} className="chart-bar-wrapper">
              <div className="chart-bar" style={{ height: `${(item.value / maxValue) * 100}%` }}>
                <span className="chart-value">{item.value}</span>
              </div>
              <span className="chart-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChartSection;

