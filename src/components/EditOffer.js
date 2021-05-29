import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'

import 'fontsource-roboto';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
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


function EditOffer(props) {
    const classes = useStyles()
    const {data} = useContext(LoginContext)
    let history = useHistory()
    const [campaignName, setCampaignName] = React.useState(data.campaign_name)
    const [headline, setHeadline] = React.useState(data.headline)
    const [description, setDescription] = React.useState(data.description)


    function editAttempt(token, id, name,  headline, description) {
        fetch("http://localhost:5000/offer/edit/" + id, {
            method: "PATCH",
            headers: {
                "Authorization": "Bearer " + token,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                campaign_name: name,
                headline: headline,
                description: description
            }),
        })
            .then((res) => res.text())
            .then((Json) => {
                history.push('/offerBusiness')
            })
            .catch((err) => console.log(err));
    }

    const handleCampaignName = (event) => {
        setCampaignName(event.target.value)
    }
    const handleHeadline = (event) => {
        setHeadline(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }


    return (

        <div className="add-container">
            <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                    <TextField className={classes.fieldStyle} defaultValue={data.campaign_name} variant="outlined" label="Campaign Name" onChange={handleCampaignName} />
                </Grid>
                <Grid item>
                    <TextField className={classes.fieldStyle} defaultValue={data.headline} variant="outlined" label="Headline" onChange={handleHeadline} />
                </Grid>
                <Grid item>
                    <TextField className={classes.descFieldStyle} defaultValue={data.description} variant="outlined" label="Description" onChange={handleDescription} />
                </Grid>
                <Grid item>
                    <Button className={classes.buttonStyle} variant="outlined" onClick={() => editAttempt(data.token, data.id, campaignName, headline, description)}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default EditOffer