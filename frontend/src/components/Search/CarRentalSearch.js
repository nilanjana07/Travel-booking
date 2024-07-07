// src/components/Search/CarRentalSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import CarRentalResults from '../Results/CarRentalResults';

const CarRentalSearch = () => {
    const [location, setLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [cars, setCars] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/search/cars', { location, pickupDate, returnDate });
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching car rentals', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <div>
                    <label>Location:</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <div>
                    <label>Pickup Date:</label>
                    <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />
                </div>
                <div>
                    <label>Return Date:</label>
                    <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
                </div>
                <button type="submit">Search Cars</button>
            </form>
            {cars.length > 0 && <CarRentalResults cars={cars} />}
        </div>
    );
};

export default CarRentalSearch;

