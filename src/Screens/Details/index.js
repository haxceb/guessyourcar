import { Button, Grid, LinearProgress, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


export default function Index() {

    return (
        <Grid container >
            <Grid item container xs={12} className="mb-2 mt-2" justify="center" alignContent="center">
                <Grid item container xs={2} className="border mb-2 mt-2" justify="center" alignContent="center">
                    Ad Here
            </Grid>
                <Grid item container xs={8} className="mb-2 mt-2" justify="center" alignContent="center">
                    Content Here
            </Grid> <Grid item container xs={2} className="border mb-2 mt-2" justify="center" alignContent="center">
                    Ad Here
            </Grid>
            </Grid>
            <Grid item container className="border mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>
        </Grid>

    )
}
