import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    buttonStyle: {
      backgroundColor: '#2EC4B6',
      color: '#FFF',
      fontFamily: 'Segoe UI',
      fontWeight: 'bold',
      margin: 5,
      '&:hover': {
        color: '#2EC4B6',
        backgroundColor: '#fff',
        border: '2px solid #2EC4B6'
      }
    }
  }))

function Home(props) {
    const classes = useStyles()
    return (
        <div className="button-container">
          <Button className={classes.buttonStyle} size="large" variant="outlined" onClick={() => props.handleScreen('login')}>Login</Button>
          <Button className={classes.buttonStyle} size="large" variant="outlined" onClick={() => props.handleScreen('register')}>Register</Button>

        </div>
    )
}

export default Home