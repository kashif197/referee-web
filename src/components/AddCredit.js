import React, { useContext } from 'react';
import Nav from './Nav'

import { makeStyles, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router';
import { LoginContext } from '../contexts/LoginContext';

const useStyles = makeStyles(theme => ({
  fieldStyle: {
    width: '350px',
    marginBottom: '20px',
    '&:hover': {
      outlineColor: '#2EC4B6',
    }
  },
  fieldStyleShort: {
    width: '170px',
    marginBottom: '20px',
    marginLeft: '5px',
    marginRight: '5px',
    '&:hover': {
      outlineColor: '#2EC4B6',
    }
  },
  buttonStyle: {
    width: '350px',
    backgroundColor: '#2EC4B6',
    color: '#FFF',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    border: '2px solid #2EC4B6',
    '&:hover': {
      color: '#2EC4B6',
      backgroundColor: '#fff',
      border: '2px solid #2EC4B6'
    }
  }
}))

function AddCredit() {
  const classes = useStyles()
  let history = useHistory()
  const {data} = useContext(LoginContext)

  const [amount, setAmount] = React.useState()
  const [cardNumber, setCardNumber] = React.useState()
  const [expiry, setExpiry] = React.useState()
  const [cvc, setCVC] = React.useState()

  function handleTransaction() {
    fetch('http://192.168.10.13:5000/payment/stripeTransaction', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: amount,
        receipt_email: data.email,
        business_username: data.username,
        description: ''
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status) {
          alert('Transaction Success!')
          history.push('/analytics')
        }
      })
  }

  const handleAmount = (event) => {
    setAmount(event.target.value)
  }

  const handleCardNumber = (event) => {
    setCardNumber(event.target.value)
  }

  const handleExpiry = (event) => {
    setExpiry(event.target.value)
  }

  const handleCVC = (event) => {
    setCVC(event.target.value)
  }

  return (
    <div>
      <Nav />
      <div style={{ width: "40%", margin: "0 auto", }}>
        <div style={{ marginTop: 100, padding: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', borderWidth: '1px', borderColor: '#2ec4b6', borderStyle: 'solid', borderRadius: '40px' }}>
          <TextField className={classes.fieldStyle} variant="outlined" label="Amount" onChange={handleAmount} />
          <TextField className={classes.fieldStyle} variant="outlined" label="Card Number" onChange={handleCardNumber} />
          <div>
            <TextField className={classes.fieldStyleShort} variant="outlined" label="Expiry Date" onChange={handleExpiry} />
            <TextField className={classes.fieldStyleShort} variant="outlined" label="CVC" type="password" onChange={handleCVC} />
          </div>
          <Button className={classes.buttonStyle} variant="outlined" onClick={() => handleTransaction()}>Add Credit</Button>

        </div>
      </div>
    </div>
  );
}

export default AddCredit