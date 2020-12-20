import React from 'react';

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fieldStyle: {
    width: '350px',
  },
  buttonStyle: {
    width: '350px',
    backgroundColor: '#2EC4B6',
    color: '#FFF',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold'
  }
}))

function loginAttempt(email, password) {
  fetch('http://localhost:5000/user/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: "abc@gmail.com",
      password: "abc<3"
    })
  })
    .then(res => res.text())
    .then(text => console.log(text))
    .catch(err => console.log(err))
}


function Login() {
  const classes = useStyles()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="login-container">
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <TextField className={classes.fieldStyle} variant="outlined" label="Email Address" onChange={handleEmail} />
        </Grid>
        <Grid item>
          <TextField className={classes.fieldStyle} variant="outlined" label="Password" type="password" onChange={handlePassword} />
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle} variant="outlined" onClick={() => loginAttempt(email, password)}>Login</Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle} variant="outlined">Forgot Password</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
