// src/components/Results/CarRentalResults.js
import React from 'react';

const CarRentalResults = ({ cars }) => {
    return (
        <div>
            <h2>Car Rental Results</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.brand} - {car.model} - ${car.pricePerDay}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarRentalResults;
