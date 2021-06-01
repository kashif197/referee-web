import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginContextProvider from './contexts/LoginContext';

import Home from './components/Home'
import Login from './components/Login'
import OfferHome from './components/OffersHome'
import AddOffer from './components/AddOffer'
import EditOffer from './components/EditOffer'
import SignUp from './components/SignUp'
import Settings from './components/Settings'
import Analytics from './components/Analytics'
import AddCredit from './components/AddCredit'
import NewLogin from './components/NewLogin'


function App() {


  return (
    <LoginContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/offerBusiness" component={OfferHome} />
            <Route path="/addOffer" component={AddOffer} />
            <Route path="/editOffer" component={EditOffer} />
            <Route path="/settings" component={Settings} />
            <Route path="/addcredit" component={AddCredit} />
            <Route path="/analytics" component={Analytics} />
          </Switch>
        </div>
      </Router>
    </LoginContextProvider>
  );


}

export default App;
