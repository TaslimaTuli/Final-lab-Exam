// components/SalesChannelDetails.tsx
import React from 'react';

interface SalesChannelDetailsProps {
  channel: string;
  totalProductsSold: number;
  lastSevenDaysSold: number;
}

const SalesChannelDetails: React.FC<SalesChannelDetailsProps> = ({
  channel,
  totalProductsSold,
  lastSevenDaysSold,
 
}) => {
  return (
    <div>
      <h3>{channel}</h3>
      <p>Total Products Sold: {totalProductsSold}</p>
      <p>Last Seven Days Sold: {lastSevenDaysSold}</p>
    </div>
  );
};

export default SalesChannelDetails;
