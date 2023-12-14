// components/SalesDashboard.tsx
import React from 'react';
import SalesChannelDetails from './SalesChannelDetails';

const SalesDashboard: React.FC = () => {
  // Dummy data for each sales channel
  const salesData = [
    { channel: 'Physical Store', totalProductsSold: 100, lastSevenDaysSold: 20 },
    { channel: 'Social Media', totalProductsSold: 150, lastSevenDaysSold: 30 },
    { channel: 'Ecommerce', totalProductsSold: 200, lastSevenDaysSold: 40 },
  ];

  return (
    <div>
      <h2>Sales Overview</h2>
      {salesData.map((data) => (
        <SalesChannelDetails key={data.channel} {...data} />
      ))}
    </div>
  );
};

export default SalesDashboard;
