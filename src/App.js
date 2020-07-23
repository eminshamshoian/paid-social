import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import HomeGuest from './components/home-guest/HomeGuest';
import Footer from './components/footer/Footer';
import About from './components/About/About';
import Terms from './components/terms/Terms';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact>
                    <HomeGuest />
                </Route>
                <Route path='/about-us' exact>
                    <About />
                </Route>
                <Route path='/terms' exact>
                    <Terms />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
