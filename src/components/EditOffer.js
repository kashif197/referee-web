import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "fontsource-roboto";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fieldStyle: {
    width: "350px",
  },
  buttonStyle: {
    width: "350px",
    backgroundColor: "#2EC4B6",
    color: "#FFF",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
  },
}));

function editAttempt(campaign_name, headline, description) {
  fetch("http://localhost:5000/offer", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVmZDlkNTQ2M2U5MDM3NTFkMDllYThkNyIsInRpdGxlIjoidGVzdCIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6InRlc3QxMjMiLCJjb250YWN0IjoiMTIzNDQ1NjciLCJkZXNpZ25hdGlvbiI6IjE2MDgxMTE0MzAzNjQiLCJfX3YiOjB9LCJpYXQiOjE2MDg1MDczOTQsImV4cCI6MTYwODUxMDk5NH0.R4vZRy1f75x53FqCsONAlNRDP1zd83gyTt_4QaV2xXc",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      campaign_name: campaign_name,
      headline: headline,
      description: description,
    }),
  })
    .then((res) => res.text(res))
    .then((Json) => console.log(Json))
    .catch((err) => console.log(err));
}

function EditOffer() {
  const classes = useStyles();

  const [campaign_name, setCampaignName] = React.useState("");
  const [headline, setHeadline] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleCampaignName = (event) => {
    setCampaignName(event.target.value);
  };
  const handleHeadline = (event) => {
    setHeadline(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="login-container">
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <TextField
            className={classes.fieldStyle}
            variant="outlined"
            label="Edit Campaign Name"
            onChange={handleCampaignName}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.fieldStyle}
            variant="outlined"
            label="Edit Headline"
            onChange={handleHeadline}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.fieldStyle}
            variant="outlined"
            label="Edit description"
            onChange={handleDescription}
          />
        </Grid>
        <Grid item>
          <Button
            className={classes.buttonStyle}
            variant="outlined"
            onClick={() =>
              editAttempt(campaign_name, headline, description)}>
            Edit Offer
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyle} variant="outlined">
            back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default EditOffer;
