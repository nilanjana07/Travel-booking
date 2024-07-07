// src/components/Results/FlightResults.js
import React from 'react';

const FlightResults = ({ flights }) => {
    return (
        <div>
            <h2>Flight Results</h2>
            <ul>
                {flights.map((flight, index) => (
                    <li key={index}>
                        {flight.airline} - {flight.departure} to {flight.arrival} - ${flight.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightResults;
