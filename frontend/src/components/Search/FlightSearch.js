// src/components/Search/FlightSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const FlightSearch = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [flights, setFlights] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/search/flights', { from, to, date });
            setFlights(response.data);
        } catch (error) {
            console.error('Error fetching flights', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <div>
                    <label>From:</label>
                    <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} required />
                </div>
                <div>
                    <label>To:</label>
                    <input type="text" value={to} onChange={(e) => setTo(e.target.value)} required />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <button type="submit">Search Flights</button>
            </form>
            {flights.length > 0 && (
                <div>
                    <h2>Flight Results</h2>
                    <ul>
                        {flights.map((flight, index) => (
                            <li key={index}>{flight.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FlightSearch;
