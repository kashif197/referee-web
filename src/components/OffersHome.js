import React from 'react';

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

import makeStyles from '@material-ui/styles/makeStyles'

import logo from '../assets/referee-web-bg.svg'

import 'fontsource-roboto';
import { CardActionArea, CardContent, CardMedia, CardActions } from '@material-ui/core';

const useStyles = makeStyles({
    cardStyle: {
        width: 320,
        margin: 5
    },
    mediaStyle: {
        height: 140
    },
    buttonStyle: {
        margin: 10
    }
})

const offerArray = [
    {
        "_id": "5fe113db66437242f0953321",
        "business_id": "5fe0a6e2c82b6a31dc591bc8",
        "campaign_name": "Offer One",
        "headline": "Earn 5% On Sale of PKR 10,000",
        "live_date": "2020-12-21T21:30:03.842Z",
        "expiry_date": "2020-12-21T21:30:03.842Z",
        "commission_based": true,
        "commission_value": 5,
        "target_transaction": 5,
        "description": "Make some money with Zombie Burger!",
        "__v": 0
    },
    {
        "_id": "5fe1142a66437242f0953322",
        "business_id": "5fe0a6e2c82b6a31dc591bc8",
        "campaign_name": "Offer Two",
        "headline": "Sell Ten Zingers Get One Free",
        "live_date": "2020-12-21T21:31:22.270Z",
        "expiry_date": "2020-12-21T21:31:22.270Z",
        "commission_based": false,
        "commission_value": 0,
        "target_transaction": 10,
        "description": "Here is a zinger on the house!",
        "__v": 0
    }
]


function Offers(props) {
    
    const classes = useStyles()
    return (
        <div><span className="add-button">
            <Button className={classes.buttonStyle} variant="outlined" color="primary" size="medium" onClick={() => props.handleScreen('add')}>Add Offer</Button>
        </span>
            <div className="offers-container">
                {offerArray.map(item => (
                    <Card className={classes.cardStyle}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.mediaStyle}
                                image={logo}
                                title={item.name}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {item.headline}
                                </Typography>
                                <Typography variant="body2">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                    </Button>
                            <Button size="small" color="primary">
                                Delete
                    </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
}
export default Offers