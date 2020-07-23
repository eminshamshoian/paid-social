import React from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import HomeGuest from './components/home-guest/HomeGuest';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <HomeGuest />
            <Footer />
        </>
    );
};

export default App;
