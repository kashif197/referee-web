import React from 'react';

import 'fontsource-roboto';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

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

    const [campaignName, setCampaignName] = React.useState(props.offerData.campaign_name)
    const [headline, setHeadline] = React.useState(props.offerData.headline)
    const [description, setDescription] = React.useState(props.offerData.description)


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
                props.handleScreen('offer')
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
                    <TextField className={classes.fieldStyle} defaultValue={props.offerData.campaign_name} variant="outlined" label="Campaign Name" onChange={handleCampaignName} />
                </Grid>
                <Grid item>
                    <TextField className={classes.fieldStyle} defaultValue={props.offerData.headline} variant="outlined" label="Headline" onChange={handleHeadline} />
                </Grid>
                <Grid item>
                    <TextField className={classes.descFieldStyle} defaultValue={props.offerData.description} variant="outlined" label="Description" onChange={handleDescription} />
                </Grid>
                <Grid item>
                    <Button className={classes.buttonStyle} variant="outlined" onClick={() => editAttempt(props.token, props.offerData.id, campaignName, headline, description)}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default EditOffer