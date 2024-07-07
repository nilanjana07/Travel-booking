// src/components/Results/HotelResults.js
import React from 'react';

const HotelResults = ({ hotels }) => {
    return (
        <div>
            <h2>Hotel Results</h2>
            <ul>
                {hotels.map((hotel, index) => (
                    <li key={index}>
                        {hotel.name} - {hotel.location} - ${hotel.pricePerNight}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HotelResults;
