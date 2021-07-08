import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ResultCard from './ResultCard';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import carImage2 from '../../Media/MG MG ZS.png';
import carImage1 from '..//../Media/MINI MINI.png';

const Index = () => {
    return <Grid container spacing={2} style={{ marginTop: 80 }}>

        <Grid item container lg={10} xs={12} >
            <Grid item lg={12} className="mt-2 mb-2">
                <Typography variant="h4"  >Your Top 3 Products</Typography>
            </Grid>
            <Grid item xs={12} lg={8} className="h-100">
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </Grid>
            <Grid item lg={4} xs={12} className="h-100">
                <Card elevation={3} className="p-3 mt-2">
                    <Typography variant="h5">Share on Social Media</Typography>
                    <Grid item style={{ marginTop: 15 }}>
                        <FacebookIcon color="primary" style={{ margin: 5 }} />
                        <YouTubeIcon color="secondary" style={{ margin: 5 }} />
                        <TwitterIcon color="primary" style={{ margin: 5 }} />
                        <InstagramIcon color="error" style={{ margin: 5 }} />
                        <LinkedInIcon color="primary" style={{ margin: 5 }} />
                    </Grid>
                </Card>
                <Grid item className="card shadow mt-2">
                    <div className="header">
                        <h4>Additional Recommendations</h4>
                    </div>
                    <div className="body widget popular-post">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single_post">
                                    <p className="m-b-0">Apple Introduces Search Ads Basic</p>
                                    <span>jun 22, 2018</span>
                                    <div className="img-post">
                                        <img src={carImage1} alt="Awesome Image" />
                                    </div>
                                </div>
                                {/* <div className="single_post">
                                    <p className="m-b-0">new rules, more cars, more races</p>
                                    <span>jun 8, 2018</span>
                                    <div className="img-post">
                                        <img src={carImage2} alt="Awesome Image" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </Grid>
        <Grid item container lg={2} xs={12} className="border mb-2 mt-2" justify="center" alignContent="center">
            Ad Here
            </Grid>

        <Grid item container className="border mb-2" style={{ height: 150 }} justify="center" alignContent="center">
            Ad Here
            </Grid>
    </Grid>
}

export default Index;