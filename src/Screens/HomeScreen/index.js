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
import { Link } from 'react-router-dom';
import pic1 from '../../Media/1.webp';
import pic2 from '../../Media/2.webp';
import pic3 from '../../Media/3.webp';
import pic4 from '../../Media/4.webp';



export default function Index() {

    const history = useHistory();

    var bannerSliderSetting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        dots: false,
        nextArrow:
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
        ,
        prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
        </svg>,
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        slidesToScroll: 4,
        autoplay: true,
        initialSlide: 0,
        nextArrow:
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
        ,
        prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
        </svg>,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    className: "center",
                    centerMode: true,
                    centerPadding: "10px",
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    initialSlide: 0,
                    nextArrow:
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                        </svg>
                    ,
                    prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                    </svg>,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    className: "center",
                    centerMode: true,
                    centerPadding: "20px",
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    autoplay: true,
                    initialSlide: 0,
                    nextArrow:
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                        </svg>
                    ,
                    prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                    </svg>,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    className: "center",
                    centerMode: false,
                    centerPadding: "10px",
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    autoplay: true,
                    initialSlide: 1,
                    nextArrow:
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                        </svg>
                    ,
                    prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC000" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                    </svg>,
                }
            }
        ]
    };



    const handleGetStarted = () => {
        history.push({
            pathname: "/quiz"
        })
    }
    return (
        <>
            <Grid container style={{ marginTop: 75, backgroundColor: 'lightgrey' }}>
                {/* <div className="w-100 h-100" style={{ position: 'absolute', opacity: 0.15 }}>
                    <img src={CarImage} className="h-75 w-100 img-fluid" />
                </div> */}
                <Grid item lg={6} sm={12} style={{ padding: "50px", width: '100vw', }}>
                    <Slider {...bannerSliderSetting}>

                        <div elevation={3} style={{ height: '100%' }}>
                            <Link to="/quiz">
                                <Avatar src={pic1} variant="rounded" style={{ minHeight: 350, objectFit: 'contain !important', width: '100%' }} component="div" />
                            </Link>
                        </div>
                        <div elevation={3} style={{ height: '100%' }}>
                            <Link to="/quiz">
                                <Avatar src={pic2} variant="rounded" style={{ minHeight: 350, objectFit: 'contain !important', width: '100%' }} component="div" />
                            </Link>
                        </div>
                        <div elevation={3} style={{ height: '100%' }}>
                            <Link to="/quiz">
                                <Avatar src={pic3} variant="rounded" style={{ minHeight: 350, objectFit: 'contain !important', width: '100%' }} component="div" />
                            </Link>
                        </div>
                        <div elevation={3} style={{ height: '100%' }}>
                            <Link to="/quiz">
                                <Avatar src={pic4} variant="rounded" style={{ minHeight: 350, objectFit: 'contain !important', width: '100%' }} component="div" />
                            </Link>
                        </div>
                    </Slider>

                </Grid>
                <Grid item lg={6} sm={12} style={{ padding: "50px" }} alignItems="center" justify="center">
                    <Card elevation={3} style={{ height: "100%", backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="in-down">
                            <Typography variant="h2" className="in-down" style={{ fontWeight: 700 }}>Take Short Quiz </Typography>
                            <Typography variant="h4" className="in-down"> &amp;</Typography>
                            <Typography variant="h4" className="in-down">Guess Your Car</Typography>
                            <Typography variant="h6" className="in-down">(Basis your personality &amp; needs)</Typography>
                            <Button className="transition" onClick={handleGetStarted} style={{ marginTop: 20, backgroundColor: '#FFC000', fontSize: 20, fontWeight: 900, color: 'white', width: '70%', }} variant="contained">Let's Start</Button>
                        </div>
                    </Card>
                </Grid>
                <Divider variant="middle" />
            </Grid>
            <Grid container item className="border mt-5 mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>
            <Grid container className="mt-5" justify="center" xs={11} alignItems="center" className="m-auto" spacing={2}>
                <Grid item>
                    <Typography variant="h4" className="in-down" alignItems="center" className="mb-3 mt-2">Upcoming Cars </Typography>
                </Grid>
            </Grid>
            <Grid className="pl-5 pr-5 mr-3 ml-3 in-left">
                <Slider {...settings}>
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />

                </Slider>
            </Grid>


            <Grid container item className="border mt-5 mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>

            <Grid container className="mt-5 in-down" justify="center" xs={11} alignItems="center" className="m-auto" spacing={2}>
                <Grid item>
                    <Typography className="in-down" variant="h4" alignItems="center" className="mb-3 mt-2">Tips </Typography>
                </Grid>
            </Grid>

            <Grid className="pl-5 pr-5 mr-3 ml-3 in-left">
                <Slider {...settings}>
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />
                    <UpcomingCarCard />

                </Slider>
            </Grid>

            <Grid container item className="border mt-5 mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>






            <Grid container className="mt-5" justify="center" xs={11} alignItems="center" className="m-auto" spacing={2}>
                <Grid item>
                    <Typography className="in-down" variant="h4" alignItems="center" className="mb-3 mt-2">Testimonials </Typography>
                </Grid>

                <Grid item className="in-left" container spacing={2} xs={12}>
                    <Testimonials />
                </Grid>


                {/* <Grid item container spacing={2} xs={12}>
                    <Slider {...settings}>

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
                    </Slider>
                </Grid> */}
            </Grid>




            <Grid container item className="border mt-5 mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>




            <Grid container className="mt-3" justify="center">
                <NewsLetter />

            </Grid>

            <Grid container item className="border mt-5 mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>



        </>
    )
}
