import { Avatar, Button, Card, Typography } from '@material-ui/core'
import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import BannerImage from '../../Media/pic1.jpg'
import Image from '../../Media/Datsunredigo.png'
import UpcomingCarCard from '../../Components/UpcomingCar/UpcomingCar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Slider from "react-slick";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import CarImage from "../../Media/2021-mercedes-benz-s-class.jpg";
import Testimonials from '../../Components/UserExperience/userexperience'
import { useHistory } from "react-router";



export default function Index() {

    const history = useHistory();
    const handleGetStarted = () => {
        history.push({
            pathname: "/quiz"
        })
    }
    return (
        <Grid container style={{ marginTop: 80 }}>

            <Grid container className="mt-5" justify="center" xs={11} alignItems="center" className="m-auto" spacing={2}>
                <Grid item>
                    <Typography variant="h4" alignItems="center" className="mb-3 mt-2">Upcoming Cars </Typography>
                    <Divider />
                </Grid>
                <Grid item container spacing={2} xs={12}>

                    <Grid item xs={12} md={6} lg={3}>
                        <UpcomingCarCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <UpcomingCarCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <UpcomingCarCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <UpcomingCarCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <UpcomingCarCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <UpcomingCarCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <UpcomingCarCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <UpcomingCarCard />
                    </Grid>
                </Grid>
            </Grid>


            <Grid container item className="border mt-5 mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>


        </Grid>
    )
}
