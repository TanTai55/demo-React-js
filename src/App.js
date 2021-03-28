import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Route,
    Link
} from "react-router-dom";

import './App.css'


import Header from './components/Header';
import Footer from './components/Footer';
import "tailwindcss/tailwind.css"
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import Address from './Views/Address';
import Example from './components/Example';



function App() {
    return (
        <div className="relative pb-10 min-h-screen">
            <Router>
                <Header />
                <div className="p-3">
                    <Switch>
                        <Route exact path="/"> <Home /> </Route>
                        <Route path="/about"> <About /> </Route>
                        <Route path="/address"> <Address /> </Route>
                        <Route path="/products/:id"> <Product />  </Route>
                    </Switch>
                </div>
                <Footer />
                {/* <Example /> */}
            </Router>
        </div>
    );
}

export default App;
