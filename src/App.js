import React from 'react';
import './App.css';

import Login from './components/Login'
import Offer from './components/OffersHome'
import AddOffer from './components/AddOffer'

function App() {
  const [screen, setScreen] = React.useState('login')
  const [userData, setUserData] = React.useState({})

  const handleScreen = (data) => {
    setScreen(data)
  }

  const handleUserData = (data) => {
    console.log(data)
    setUserData(data)
  }

  if (screen === 'login') {
    return (
      <div className="App">
        <Login handleScreen={handleScreen} handleUserData={handleUserData} />
      </div>
    )
  }
  else if (screen === 'offer' && userData.status === 2) {
    return (
      <div>
        <Offer handleScreen={handleScreen} userData={userData} />
      </div>
    )
  }
  else if (screen === 'add' && userData.status === 2) {
    return (
      <div>
        <AddOffer />
      </div>
    )
  }

}

export default App;
