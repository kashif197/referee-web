import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

import { IconButton, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'fontsource-roboto';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


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
      color: '#2EC4B6',
      backgroundColor: '#fff',
      border: '2px solid #2EC4B6'
    }
  },
  buttonStyleGoogle: {
    width: '350px',
    backgroundColor: '#FF3E30',
    color: '#FFF',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    // '&:hover': {
    //   color: '#2EC4B6',
    //   backgroundColor: '#fff',
    //   border: '2px solid #2EC4B6'
    // }
  },
  buttonStyleFacebook: {
    width: '350px',
    backgroundColor: '#3B5998',
    color: '#FFF',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    '&:hover': {
      color: '#2EC4B6',
      backgroundColor: '#fff',
      border: '2px solid #2EC4B6'
    }
  }
}))

function Login(props) {
  let history = useHistory()
  const { data, changeData, signInLocal, signInGoogle } = useContext(LoginContext) // State Context For User Information
  const classes = useStyles()

  const validateData = (email, password) => {
    if (re.test(email)) {
      setError(false)
      return true
    }
    else setError(true)
  }

  // Navigate After Data Is Updated
  useEffect(
    () => {
      if (data !== '') {
        history.push('/offerBusiness')
      }
    }
  );


  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;  // Email Regex

  return (
    <div className="login-container">
      <span className="back-button">
        <IconButton onClick={() => props.handleScreen('home')}>
          <ArrowBackIcon />
        </IconButton>
      </span>
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
              console.log('click')
              signInLocal(email, password)
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle} variant="outlined">Forgot Password</Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyleGoogle} variant="outlined" onClick={() => {console.log('click');signInGoogle();}}>Login With Google</Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyleFacebook} variant="outlined">Login With Facebook</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
