import React, { useContext } from 'react';
import Nav from './Nav'
import Typography from '@material-ui/core/Typography'
import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import { LoginContext } from '../contexts/LoginContext';
import { Card, CardActionArea, CardContent, CardMedia, CardActions, IconButton } from '@material-ui/core';
import logo from '../assets/referee-web-bg.svg'

const useStyles = makeStyles(theme => ({
    cardStyle: {
        width: 320,
        margin: 5
    },
    mediaStyle: {
        height: 140
    },
    buttonStyle: {
        width: '180px',
        backgroundColor: '#2EC4B6',
        color: '#FFF',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        marginRight: '30px',
        border: '2px solid #2EC4B6',
        '&:hover': {
            color: '#2EC4B6',
            backgroundColor: '#fff',
            border: '2px solid #2EC4B6'
        }
    }
}))


function Analytics() {
    const classes = useStyles()
    let history = useHistory()


    const { data } = useContext(LoginContext)
    const [balance, setBalance] = React.useState('')
    const [totalOffers, setTotalOffers] = React.useState('')
    const [totalAvailedOffers, setTotalAvailedOffers] = React.useState('')
    const [totalRedeemedOffers, setTotalRedeemedOffers] = React.useState('')
    const [totalPurchasedOffers, setTotalPurchasedOffers] = React.useState('')
    const [bestOffer, setBestOffer] = React.useState('')
    const [count, setCount] = React.useState('')

    const getStats = () => {
        fetch('http://192.168.10.13:5000/analytics/getBalance/' + data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) setBalance(data.data)
            })
        fetch('http://192.168.10.13:5000/analytics/getTotalOffers/' + data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) setTotalOffers(data.data)
            })
        fetch('http://192.168.10.13:5000/analytics/getTotalAvailedOffers/' + data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) setTotalAvailedOffers(data.data)
            })
        fetch('http://192.168.10.13:5000/analytics/getTotalRedeemedOffers/' + data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) setTotalRedeemedOffers(data.data)
            })
        fetch('http://192.168.10.13:5000/analytics/getTotalOffersPurchased/' + data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                if (data.status) setTotalPurchasedOffers(data.data)
            })
        fetch('http://192.168.10.13:5000/analytics/getBestOffer/' + data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            // .then(res => res.text())
            // .then(data => console.log(data))
            .then(res => res.json())
            .then(data => {
                console.log(data.data.obj)
                if (data.status) { setBestOffer(data.data.obj); setCount(data.data.count) }
            })
    }



    if (balance !== '' && totalPurchasedOffers !== '') {
        return (
            <div>
                <Nav />
                <div style={{ marginTop: '100px', marginLeft: '120px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: '35px', fontWeight: 'bold' }}>Analytics</Typography>
                    <Button className={classes.buttonStyle} variant="outlined" onClick={() => history.push('./addcredit')}>Add Credit</Button>
                </div>
                <div style={{ width: "80%", margin: "0 auto", marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', marginTop: '20px', flexWrap: 'wrap' }}>
                        <div style={{ marginRight: '70px', marginLeft: '70px' }}>
                            <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#707070' }}>Balance</Typography>
                            <Typography style={{ fontSize: '55px', fontWeight: 'bold', color: '#2EC4B6' }}>{balance}</Typography>
                        </div>
                        <div style={{ marginRight: '70px', marginLeft: '70px' }}>
                            <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#707070' }}>Offers Availed</Typography>
                            <Typography style={{ fontSize: '55px', fontWeight: 'bold', color: '#000' }}>{totalAvailedOffers}</Typography>
                        </div>
                        <div style={{ marginRight: '70px', marginLeft: '70px' }}>
                            <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#707070' }}>Offers Redeemed</Typography>
                            <Typography style={{ fontSize: '55px', fontWeight: 'bold', color: '#000' }}>{totalRedeemedOffers}</Typography>
                        </div>
                        <div style={{ marginRight: '70px', marginLeft: '70px' }}>
                            <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#707070' }}>Offers Purchased</Typography>
                            <Typography style={{ fontSize: '55px', fontWeight: 'bold', color: '#000' }}>{totalPurchasedOffers}</Typography>
                        </div>
                        <div style={{ marginRight: '70px', marginLeft: '70px' }}>
                            <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#707070' }}>Total Offers</Typography>
                            <Typography style={{ fontSize: '55px', fontWeight: 'bold', color: '#000' }}>{totalOffers}</Typography>
                        </div>
                    </div>
                </div>
                <div style={{ display: count === 0 ? "none" : "block", marginLeft: '120px' }}>
                    <Typography style={{ fontSize: '35px', fontWeight: 'bold' }}>Top Offer</Typography>
                    <Card className={classes.cardStyle}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.mediaStyle}
                                image={logo}
                                title={bestOffer.offer_name}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {bestOffer.offer_headline}
                                </Typography>
                                <Typography variant="body2">
                                    {bestOffer.offer_description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        );
    }
    else {
        getStats()
        return (
            <div></div>
        );
    }
}

export default Analytics