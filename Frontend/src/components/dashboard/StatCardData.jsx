import React, { memo } from 'react';
import StatCard from '../dashboard/StatCard';
import STATS_DATA  from './StatCard.js'; 

const StatCardData = () => {
    return (
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 will-change-transform">
            {STATS_DATA.map((stat) => (
                <StatCard 
                    key={stat.id}
                    title={stat.title}
                    value={stat.value}
                    Icon={stat.Icon}
                    color={stat.color}
                    bg_color={stat.bg_color}
                />
            ))}
        </div>
    );
};


export default memo(StatCardData);