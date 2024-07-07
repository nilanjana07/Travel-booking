
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/Profile/UserProfile';
import BookingHistory from './components/Profile/BookingHistory';
import FlightSearch from './components/Search/FlightSearch';
import HotelSearch from './components/Search/HotelSearch';
import CarRentalSearch from './components/Search/CarRentalSearch';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/booking-history" element={<BookingHistory />} />
                    <Route path="/search/flights" element={<FlightSearch />} />
                    <Route path="/search/hotels" element={<HotelSearch />} />
                    <Route path="/search/cars" element={<CarRentalSearch />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
