import React from 'react';

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fieldStyle: {
    width: '350px',
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
    '&:hover': {
      color: '#2EC4B6'
    }
  }
}))

function Login(props) {

  const validateData = (email, password) => {
    if (re.test(email)) {
      setError(false)
      return true
    }
    else setError(true)
  }

  const loginAttempt = (email, password) => {
    if (validateData(email, password)) {
      fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(res => res.json())
        .then(data => {
          setUserData({
            status: data.status,
            name: data.name,
            id: data.id,
            token: data.token
          })
        })
        .catch(err => console.log(err))
    }

  }

  const classes = useStyles()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userData, setUserData] = React.useState('abc')
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    if (userData.status) {
      props.handleScreen('offer')
      props.handleUserData(userData)
    }
  }, [userData])

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <div className="login-container">
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <TextField className={classes.fieldStyle} variant="outlined" label="Email Address" onChange={handleEmail}
            error={error}
            helperText={error ? "Please enter a valid email." : ""} />
        </Grid>
        <Grid item>
          <TextField className={classes.fieldStyle} variant="outlined" label="Password" type="password" onChange={handlePassword} />
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle} variant="outlined"
            onClick={() => {
              loginAttempt(email, password)
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle} variant="outlined">Forgot Password</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
