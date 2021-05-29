import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom'

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
    let history = useHistory()

    return (
        <div className="button-container">
          <Button className={classes.buttonStyle} size="large" variant="outlined" onClick={() => history.push('login')}>Login</Button>
          <Button className={classes.buttonStyle} size="large" variant="outlined" onClick={() => history.push('register')}>Register</Button>

        </div>
    )
}

export default Home