import React from 'react';
import '../App.css';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import CssBaseline from "@material-ui/core/CssBaseline";

import logo from '../assets/referee-logo-bg.png'

import Avatar from '@material-ui/core/Avatar';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import Paper from '@material-ui/core/Paper';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { LoginContext } from '../contexts/LoginContext';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    topBar: {
        display: "flex",
        justifyContent: "space-between"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        backgroundColor: '#2ec4b6',
        // height: '73px'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 30,
        marginTop: 10,
        fontSize: 'large'
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        backgroundColor: '#2ec4b6',

    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        backgroundColor: '#2ec4b6',
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    textStyle: {
        color: "#fff"
    }
}));

function Nav() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { data } = React.useContext(LoginContext)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar className={classes.topBar}>
                    <div style={{ display: 'flex' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            <img alt="" style={{ marginTop: '8px', width: '180px', height: '43px' }} src={logo} />
                        </Typography>
                    </div>
                    <Avatar alt="" style={{ marginTop: '5px', marginRight: "10px" }} src="https://lh3.googleusercontent.com/TwHrwftk8BaWEV4swcWDtdcg1halIcT2U3EWkXYkDyYPXmufMLtn1DJG569HIIsd4ty4=s630-fcrop64=1,2202423de15ce329" />

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon htmlColor={"#fff"} />
                        ) : (
                            <ChevronLeftIcon htmlColor={"#fff"} />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to="/offerBusiness" style={{ textDecoration: 'none' }}>

                        {/* <ListItem button>
                            <ListItemIcon>
                                <HomeIcon htmlColor={"#fff"} />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} className={classes.textStyle} />
                        </ListItem> */}

                        <ListItem button>
                            <ListItemIcon>
                                <LocalMallIcon htmlColor={"#fff"} />
                            </ListItemIcon>
                            <ListItemText primary={"My Offers"} className={classes.textStyle} />
                        </ListItem>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: 'none' }}>

                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon htmlColor={"#fff"} />
                            </ListItemIcon>
                            <ListItemText primary={"Settings"} className={classes.textStyle} />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <HeadsetMicIcon htmlColor={"#fff"} />
                        </ListItemIcon>
                        <ListItemText primary={"Support"} className={classes.textStyle} />
                    </ListItem>
                    <Link to="/analytics" style={{ textDecoration: 'none' }}>


                        <ListItem button>
                            <ListItemIcon>
                                <TrendingUpIcon htmlColor={"#fff"} />
                            </ListItemIcon>
                            <ListItemText primary={"Analytics"} className={classes.textStyle} />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon htmlColor={"#fff"} />
                        </ListItemIcon>
                        <ListItemText primary={"Sign Out"} className={classes.textStyle} />
                    </ListItem>


                </List>
                {/* <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} className={classes.textStyle} />
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
        </div>
    );
}

export default Nav