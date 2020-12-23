import React from 'react';

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

import makeStyles from '@material-ui/styles/makeStyles'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import logo from '../assets/referee-web-bg.svg'

import 'fontsource-roboto';
import { CardActionArea, CardContent, CardMedia, CardActions, IconButton } from '@material-ui/core';

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
    },
    boxButton: {
        color: '#fff',
        backgroundColor: '#2EC4B6',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        margin: 5,
        '&:hover': {
            color: '#2EC4B6',
            backgroundColor: '#fff',
            border: '2px solid #2EC4B6'

        }
    }
})



function OffersCustomer(props) {

    const [offers, setOffers] = React.useState('')
    const classes = useStyles()


    function getOffers() {
        fetch('http://localhost:5000/offer/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(Json => {
                setOffers(Json)
            })
            .catch(err => console.log(err))
    }

    if (offers === '') {
        getOffers()


        return <div></div>
    }

    else {
        return (
            <div className="offers-container">
                <span className="back-button">
                    <IconButton onClick={() => props.handleScreen('home')}>
                        <ArrowBackIcon />
                    </IconButton>
                </span>
                {
                    offers.map(item => (
                        <Card key={item.id} className={classes.cardStyle}>
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
                                <Button className={classes.boxButton} size="small" color="primary">
                                    Avail
                                    </Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </div>
        )

    }
}
export default OffersCustomer