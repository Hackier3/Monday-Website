import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Nav from './components/nav';
import Home from './components/home/home';
import He from './components/he/he';
import She from './components/she/she';
import Kids from './components/kids/kids';
import Sale from './components/sale/sale';

export const Layout = () => {
    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/he" exact component={() => <He />} />
                    <Route path="/she" exact component={() => <She />} />
                    <Route path="/kids" exact component={() => <Kids />} />
                    <Route path="/sale" exact component={() => <Sale />} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
};
