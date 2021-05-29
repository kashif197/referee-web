import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginContextProvider from './contexts/LoginContext';

// import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import OfferHome from './components/OffersHome'
import AddOffer from './components/AddOffer'
import EditOffer from './components/EditOffer'
import SignUp from './components/SignUp'
import CustomChatbot from './components/CustomChatbot'

// import OfferCustomer from './components/OfferCustomer'

function App() {
  // const [screen, setScreen] = React.useState('home')
  // const [userData, setUserData] = React.useState({})
  // const [offerData, setOfferData] = React.useState({})
  // const handleScreen = (data) => {
  //   setScreen(data)
  // }

  // const handleUserData = (data) => {
  //   setUserData(data)
  // }

  // const handleOfferData = (data) => {
  //   setOfferData(data)
  // }

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
          </Switch>
          <CustomChatbot />
        </div>
      </Router>
    </LoginContextProvider>
  );


}

export default App;
