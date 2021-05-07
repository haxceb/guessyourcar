import { Avatar, Button, Card, Typography } from '@material-ui/core'
import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import BannerImage from '../../Media/pic1.jpg'
import Image from '../../Media/Datsunredigo.png'
import UpcomingCarCard from '../../Components/UpcomingCar/UpcomingCar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import FooterAll from '../../Components/Footer/FooterAll'
import Slider from "react-slick";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import CarImage from "../../Media/2021-mercedes-benz-s-class.jpg";
import Testimonials from '../../Components/UserExperience/userexperience'
import { useHistory } from "react-router";
import Login from '../../Components/Login'



export default function Index() {

    return (
        <Grid container className="mt-2 mb-5">

            <Grid container className="mt-5" xs={11} alignItems="center" className="m-auto" spacing={2}>
                <Grid item>
                    <Typography variant="h4" alignItems="center" className="mb-3 mt-2">Login </Typography>
                    <Divider />
                </Grid>
                <Grid item container spacing={2} xs={12} justify="center">
                    <Login />
                </Grid>
            </Grid>
        </Grid>
    )
}
