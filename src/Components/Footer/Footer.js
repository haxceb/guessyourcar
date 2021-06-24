import { Divider, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <>
            <Grid item container xs={12} style={{ display: 'flex', justifyContent: "space-around" }} direction="row">
                <Grid item>
                    <Typography variant="h6">Company</Typography>
                    <List component="div" aria-label="company" style={{ display: 'inline-block', }}>
                        <ListItem>
                            <ListItemText primary="About Us" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Privacy Policy" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item>
                    <Typography variant="h6">Customer Care</Typography>
                    <List component="div" aria-label="company" style={{ display: 'inline-block', }}>
                        <ListItem>
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Terms &amp; Conditions" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item>
                    <Typography variant="h6">Connect with Us</Typography>
                    <Grid item style={{ marginTop: 15 }}>
                        <FacebookIcon color="primary" style={{ margin: 5 }} />
                        <YouTubeIcon color="secondary" style={{ margin: 5 }} />
                        <TwitterIcon color="primary" style={{ margin: 5 }} />
                        <InstagramIcon color="error" style={{ margin: 5 }} />
                        <LinkedInIcon color="primary" style={{ margin: 5 }} />
                    </Grid>
                </Grid>
                <Grid item >
                    <Typography variant="h6" style={{ marginBottom: 15 }}>NewsLetter</Typography>
                    <TextField
                        label="Enter You Email Address"
                        InputProps={{
                            endAdornment: <InputAdornment position="start"><DoubleArrowIcon /></InputAdornment>,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
            <Grid item xs={12} style={{ padding: 15, backgroundColor: 'lightgray' }}>
                <Typography>Copyright @2021 GuessYourCar.com. All Rights Reserved.</Typography>
            </Grid>
        </>
    )
}

export default Footer;