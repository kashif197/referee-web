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

  function addAttempt(business_id, campaign_name, headline, commission_based, target_transaction, description) {
    fetch("http://localhost:5000/offer", {
  method: "POST",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVmZDlkNTQ2M2U5MDM3NTFkMDllYThkNyIsInRpdGxlIjoidGVzdCIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6InRlc3QxMjMiLCJjb250YWN0IjoiMTIzNDQ1NjciLCJkZXNpZ25hdGlvbiI6IjE2MDgxMTE0MzAzNjQiLCJfX3YiOjB9LCJpYXQiOjE2MDg1MDczOTQsImV4cCI6MTYwODUxMDk5NH0.R4vZRy1f75x53FqCsONAlNRDP1zd83gyTt_4QaV2xXc",
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    business_id: business_id,
    campaign_name: campaign_name,
    headline: headline,
    commission_based: false,
    target_transaction: target_transaction,
    description: description
}),
})
  //.then((res) => res.json())
  .then((res) => res.text(res))
  .then((Json) => console.log(Json))
  .catch((err) => console.log(err));

  }
  
  function AddOffer() {
    const classes = useStyles()
  
    const [business_id, setBusinessId] = React.useState('')
    const [campaign_name, setCampaignName] = React.useState('')
    const [headline, setHeadline] = React.useState('')
    const [commission_based, setCommissionBased] = React.useState('')
    const [commission_value, setCommissionValue] = React.useState('')
    const [target_transaction, setTargetTransaction] = React.useState('')
    const [description, setDescription] = React.useState('')
  
    const handleBusinessId = (event) => {
      setBusinessId(event.target.value)
    }
    const handleCampaignName = (event) => {
      setCampaignName(event.target.value)
    }
    const handleHeadline = (event) => {
        setHeadline(event.target.value)
      }
      const handleCommissionBased = (event) => {
        setCommissionBased(false)
      }
      const handleCommissionValue = (event) => {
        setCommissionValue(event.target.value)
      }
      const handleTargetTransaction = (event) => {
        setTargetTransaction(event.target.value)
      }
      const handleDescription = (event) => {
        setDescription(event.target.value)
      }
  
    return (
      <div className="login-container">
        <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
            <TextField className={classes.fieldStyle} variant="outlined" label="Business ID" onChange={handleBusinessId} />
          </Grid>
          <Grid item>
            <TextField className={classes.fieldStyle} variant="outlined" label="Campaign Name" onChange={handleCampaignName} />
          </Grid>
          <Grid item>
            <TextField className={classes.fieldStyle} variant="outlined" label="Headline" onChange={handleHeadline} />
          </Grid>
          <Grid item>
            <TextField className={classes.fieldStyle} variant="outlined" label="Commission Based" onChange={handleCommissionBased} />
          </Grid>
          <Grid item>
            <TextField className={classes.fieldStyle} variant="outlined" label="Target Transaction" onChange={handleTargetTransaction} />
          </Grid>
          <Grid item>
            <TextField className={classes.fieldStyle} variant="outlined" label="Description" onChange={handleDescription} />
          </Grid>
          <Grid item>
            <Button className={classes.buttonStyle} variant="outlined" onClick={() => addAttempt(business_id, campaign_name, headline, commission_based, target_transaction, description)}>Add Offer</Button>
          </Grid>
          <Grid item>
            <Button className={classes.buttonStyle} variant="outlined">back</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default AddOffer;