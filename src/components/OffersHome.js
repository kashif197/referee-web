import React, { useContext } from 'react';

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

import makeStyles from '@material-ui/styles/makeStyles'

import logo from '../assets/referee-web-bg.svg'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import 'fontsource-roboto';
import { CardActionArea, CardContent, CardMedia, CardActions, IconButton } from '@material-ui/core';

import Nav from '../components/Nav'
import { LoginContext } from '../contexts/LoginContext'
import { useHistory } from 'react-router-dom'


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
        marginTop: 10,
        marginBottom: 7,
        '&:hover': {
            color: '#2EC4B6',
            backgroundColor: '#fff',
            border: '2px solid #2EC4B6'

        }
    }
})



function Offers(props) {

    const classes = useStyles()
    let history = useHistory()

    const [offers, setOffers] = React.useState('')
    const { data } = useContext(LoginContext) // State Context For User Information

    function deleteOffer(token, id) {
        fetch("http://localhost:5000/offer/deleteOffer/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then((res) => res.json())
            .then((Json) => {
                if (Json.success) {
                    alert('Offer Deleted')
                    getOffers(data.id, data.token)
                }

            })
            .catch((err) => console.log(err));
    }

    function getOffers(id, token) {
        console.log('here2')
        fetch('http://localhost:5000/offer/find/' + id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
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
        getOffers(data.id, data.token)
        console.log('here1')
        return <div></div>
    }

    else {
        return (
            <div>
                <Nav />
                {/* <span className="back-button">
                        <IconButton onClick={() => history.push('/home')}>
                            <ArrowBackIcon />
                        </IconButton>
                    </span> */}
                {/* <span className="add-button">
                    <Button className={classes.boxButton} variant="outlined" size="medium" onClick={() => history.push('/addOffer')}>Add Offer</Button>
                </span> */}
                <div className="offers-container">
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
                                    <Button className={classes.boxButton} size="small" color="primary" onClick={() => {
                                        history.push('/editOffer')
                                        // props.handleOfferData({ id: item._id, campaign_name: item.campaign_name, headline: item.headline, description: item.description })
                                    }}>
                                        Edit
                                    </Button>
                                    <Button className={classes.boxButton}
                                        size="small"
                                        color="primary"
                                        onClick={() => {
                                            deleteOffer(data.token, item._id)
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        ))
                    }
                    <Card className={classes.cardStyle}>
                        <CardActionArea onClick={() => history.push('/addOffer')}>
                            <CardMedia
                                className={classes.mediaStyle}
                                image={logo}
                                title={"Add A New Offer"}
                            />
                            <CardContent>
                                <Typography variant="h5" align="center" gutterBottom >
                                    {"Add A New Offer"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        );
    }
}


export default Offers