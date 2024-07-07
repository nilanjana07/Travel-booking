// src/components/Profile/BookingHistory.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../contexts/AuthContext';

const BookingHistory = () => {
    const [bookings, setBookings] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/api/bookings', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings', error);
            }
        };

        fetchBookings();
    }, [token]);

    return (
        <div>
            <h2>Booking History</h2>
            <ul>
                {bookings.map((booking, index) => (
                    <li key={index}>
                        {booking.type} - {booking.details} - ${booking.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingHistory;
