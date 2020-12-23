import React from 'react';
import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import OfferHome from './components/OffersHome'
import AddOffer from './components/AddOffer'
import EditOffer from './components/EditOffer'
import SignUp from './components/SignUp'
import OfferCustomer from './components/OfferCustomer'

function App() {
  const [screen, setScreen] = React.useState('home')
  const [userData, setUserData] = React.useState({})
  const [offerData, setOfferData] = React.useState({})
  const handleScreen = (data) => {
    setScreen(data)
  }

  const handleUserData = (data) => {
    setUserData(data)
  }

  const handleOfferData = (data) => {
    setOfferData(data)
  }

  if (screen === 'home') {
    return <div className="App">
      <Home handleScreen={handleScreen} />
    </div>
  }

  else if (screen === 'register') {
    return <div className="App">
      <SignUp handleScreen={handleScreen} />
    </div>
  }

  else if (screen === 'login') {
    return (
      <div className="App">
        <Login handleScreen={handleScreen} handleUserData={handleUserData} />
      </div>
    )
  }

  else if (screen === 'offer' && userData.status === 1) {
    return (
      <div>
        <OfferCustomer handleScreen={handleScreen} />
      </div>
    )
  }


  else if (screen === 'offer' && userData.status === 2) {
    return (
      <div>
        <OfferHome handleScreen={handleScreen} userData={userData} handleOfferData={handleOfferData} />
      </div>
    )
  }
  else if (screen === 'add' && userData.status === 2) {
    return (
      <div>
        <AddOffer handleScreen={handleScreen} userData={userData} />
      </div>
    )
  }
  else if (screen === 'edit' && userData.status === 2) {
    return (
      <div>
        <EditOffer token={userData.token} handleScreen={handleScreen} offerData={offerData} />
      </div>
    )
  }

}

export default App;
