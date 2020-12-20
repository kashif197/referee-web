import React from 'react';
import './App.css';

import Login from './components/Login'
import Offer from './components/Offers'

function App() {
  const [screen, setScreen] = React.useState('login')

  const handleScreen = (arg) => {
    setScreen(arg)
  }

  if (screen === 'login') {
    return (
      <div className="App">
        <Login handleScreen={handleScreen('offer')}/>
      </div>
    )
  }
  else if (screen === 'offer') {
    return (
      <div>
        <Offer />
      </div>
    )
  }

}

export default App;
