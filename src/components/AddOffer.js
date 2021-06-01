import React, {useContext} from 'react';
import {useHistory } from 'react-router-dom'
import 'fontsource-roboto';
import { Button, Grid, IconButton, makeStyles, TextField } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { LoginContext } from '../contexts/LoginContext';

const useStyles = makeStyles(theme => ({
    fieldStyle: {
        width: '350px',
        '&:hover': {
            outlineColor: '#2EC4B6',
        }
    },
    descFieldStyle: {
        width: '350px'
    },
    toggleStyle: {
        width: '175px'
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
            border: '1px solid #2EC4B6'
        }
    },
}))


function AddOffer(props) {
    const classes = useStyles()
    let history = useHistory()
    const {data} = useContext(LoginContext)
    const [type, setType] = React.useState(false)
    const [campaignName, setCampaignName] = React.useState('')
    const [headline, setHeadline] = React.useState('')
    const [commValue, setCommValue] = React.useState(0)
    const [target, setTarget] = React.useState()
    const [description, setDescription] = React.useState('')

    function addAttempt(token, id, campaign_name, headline, commission_based, commission_value, target_transaction, description) {
        // if (type) {
        //     fetch("http://localhost:5000/offer/addOffer", {
        //         method: "POST",
        //         headers: {
        //             "Authorization": "Bearer " + token,
        //             "Accept": "application/json",
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             business_id: id,
        //             campaign_name: campaign_name,
        //             headline: headline,
        //             commission_based: commission_based,
        //             commission_value: commission_value,
        //             target_transaction: target_transaction,
        //             description: description
        //         }),
        //     })
        //     .then((res) => res.json())
        //     .then((data) => {
        //             if (data.status) {
        //                 history.push('/offerBusiness')
        //                 alert('Offer Created')
        //             }
        //             else {
        //                 alert(data.message)
        //             }
        //         })
        //         .catch((err) => console.log(err));
        // }
        // else {
            fetch("http://localhost:5000/offer/addOffer", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    business_id: id,
                    campaign_name: campaign_name,
                    headline: headline,
                    commission_based: commission_based,
                    target_transaction: target_transaction,
                    description: description
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                    if (data.status) {
                        history.push('/offerBusiness')
                        alert('Offer Created')
                    }
                    else {
                        alert(data.message)
                    }
                })
                .catch((err) => console.log(err));
        // }


    }

    const handleCampaignName = (event) => {
        setCampaignName(event.target.value)
    }
    const handleHeadline = (event) => {
        setHeadline(event.target.value)
    }
    const handleCommValue = (event) => {
        setCommValue(event.target.value)
    }
    const handleTarget = (event) => {
        setTarget(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleType = (event, value) => {
        if (value !== null) setType(value)
    }

    return (

        <div className="add-container">
            <span className="back-button">
                {/* <IconButton onClick={() => history.push('/offerBusiness')}>
                    <ArrowBackIcon />
                </IconButton> */}
            </span>
            <Grid container spacing={2} direction="column" alignItems="center">
                {/* <Grid item>
                    <ToggleButtonGroup value={type} exclusive onChange={handleType}>
                        <ToggleButton className={classes.toggleStyle} value={true}>Commission</ToggleButton>
                        <ToggleButton className={classes.toggleStyle} value={false}>Non-Commission</ToggleButton>
                    </ToggleButtonGroup>
                </Grid> */}
                <Grid item>
                    <TextField className={classes.fieldStyle} variant="outlined" label="Campaign Name" onChange={handleCampaignName} />
                </Grid>
                <Grid item>
                    <TextField className={classes.fieldStyle} variant="outlined" label="Headline" onChange={handleHeadline} />
                </Grid>
                {/* <Grid item>
                    <TextField className={classes.fieldStyle} disabled={!type} variant="outlined" label="Commission Value" onChange={handleCommValue} />
                </Grid> */}
                <Grid item>
                    <TextField className={classes.fieldStyle} variant="outlined" label="Target Transaction" onChange={handleTarget} />
                </Grid>
                <Grid item>
                    <TextField className={classes.descFieldStyle} variant="outlined" label="Description" onChange={handleDescription} />
                </Grid>
                <Grid item>
                    <Button className={classes.buttonStyle} variant="outlined" onClick={() => addAttempt(data.token, data.id, campaignName, headline, type, commValue, target, description)}>
                        Submit
                        </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddOffer