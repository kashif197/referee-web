import React from 'react';

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import 'fontsource-roboto';
import { IconButton, makeStyles, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    fieldStyle: {
        width: '350px',
        '&:hover': {
            outlineColor: '#2EC4B6',
        }
    },
    nameFieldStyle: {
        width: '170px',
        margin: '0px 5px',
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
    },
    toggleStyle: {
        width: 175,
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
    },
}))

function SignUp(props) {

    const classes = useStyles()

    const [type, setType] = React.useState('customer')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [contact, setContact] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [designation, setDesignation] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [success, setSuccess] = React.useState(false)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handleContact = (event) => {
        setContact(event.target.value)
    }
    const handleType = (event, value) => {
        if (value !== null) setType(value)
    }
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleDesignation = (event) => {
        setDesignation(event.target.value)
    }
    const handleGender = (event) => {
        setGender(event.target.value)
    }
    const handleSuccess = (event) => {
        setSuccess(true)
    }

    React.useEffect(() => {
        if (success) props.handleScreen('login')
    })

    const signUpCustomerAttempt = (email, password, first_name, last_name, username, gender, contact) => {

        fetch('http://localhost:5000/user/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer: true,
                first_name: first_name,
                last_name: last_name,
                username: username,
                email: email,
                password: password,
                gender: gender,
                contact: contact
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    handleSuccess(true)
                    alert('Account Created')
                }
                else alert(data.message)
            })
            .catch(err => console.log(err))


    }

    const signUpBusinessAttempt = (email, password, title, username, designation, contact) => {

        fetch('http://localhost:5000/user/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer: false,
                title: title,
                username: username,
                email: email,
                password: password,
                designation: designation,
                contact: contact
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    handleSuccess(true)
                    alert('Account Created')
                }
                else alert(data.message)
            })
            .catch(err => console.log(err))


    }

    if (type === 'customer') {
        return <div className="signup-container">
            <span className="back-button">
                <IconButton onClick={() => props.handleScreen('home')}>
                    <ArrowBackIcon />
                </IconButton>
            </span>
            <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                    <ToggleButtonGroup value={type} exclusive onChange={handleType}>
                        <ToggleButton className={classes.toggleStyle} value="customer">Customer</ToggleButton>
                        <ToggleButton className={classes.toggleStyle} value="business">Business</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item>
                    <TextField className={classes.nameFieldStyle} variant="outlined" label="First Name" onChange={handleFirstName} />
                    <TextField className={classes.nameFieldStyle} variant="outlined" label="Last Name" onChange={handleLastName} />
                </Grid>
                <Grid item>
                    <TextField className={classes.fieldStyle} variant="outlined" label="Username" onChange={handleUsername} />
                </Grid>
                <Grid item>
                    <TextField className={classes.fieldStyle} id="select" variant="outlined" value={gender} label="Gender" onChange={handleGender} select>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField className={classes.fieldStyle} variant="outlined" label="Email Address" onChange={handleEmail} />
                </Grid>
                <Grid item>
                    <TextField className={classes.fieldStyle} variant="outlined" label="Password" type="password" onChange={handlePassword} />
                </Grid>
                <Grid item>
                    <TextField className={classes.fieldStyle} variant="outlined" label="Contact Number" onChange={handleContact} />
                </Grid>
                <Grid item>
                    <Button className={classes.buttonStyle} variant="outlined" onClick={() => signUpCustomerAttempt(email, password, firstName, lastName, username, gender, contact)}>
                        Register
                        </Button>
                </Grid>
            </Grid>
        </div>
    }

    if (type === 'business') {
        return (
            <div className="signup-container">
                <span className="back-button">
                    <IconButton onClick={() => props.handleScreen('home')}>
                        <ArrowBackIcon />
                    </IconButton>
                </span>
                <Grid container spacing={2} direction="column" alignItems="center">
                    <Grid item>
                        <ToggleButtonGroup value={type} exclusive onChange={handleType}>
                            <ToggleButton className={classes.toggleStyle} value="customer">Customer</ToggleButton>
                            <ToggleButton className={classes.toggleStyle} value="business">Business</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item>
                        <TextField className={classes.fieldStyle} variant="outlined" label="Business Title" onChange={handleTitle} />
                    </Grid>
                    <Grid item>
                        <TextField className={classes.fieldStyle} variant="outlined" label="Username" onChange={handleUsername} />
                    </Grid>
                    <Grid item>
                        <TextField className={classes.fieldStyle} variant="outlined" label="Email Address" onChange={handleEmail} />
                    </Grid>
                    <Grid item>
                        <TextField className={classes.fieldStyle} variant="outlined" label="Password" type="password" onChange={handlePassword} />
                    </Grid>
                    <Grid item>
                        <TextField className={classes.fieldStyle} variant="outlined" label="Contact Number" onChange={handleContact} />
                    </Grid>
                    <Grid item>
                        <TextField className={classes.fieldStyle} variant="outlined" label="Designation" onChange={handleDesignation} />
                    </Grid>
                    <Grid item>
                        <Button className={classes.buttonStyle} variant="outlined" onClick={() => signUpBusinessAttempt(email, password, title, username, designation, contact)}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }



}

export default SignUp