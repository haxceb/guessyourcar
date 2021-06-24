import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import carImage from '../../Media/FORD FREESTYLE.png';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#FFC000'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#FFC000',
        "&:hover": {
            backgroundColor: 'gray'
        }
    },
}));

export default function Index() {
    const classes = useStyles();
    const [screen, setScreen] = useState({
        login: true,
        signup: false,
        forgotPassword: false
    });

    if (screen?.login) {
        return (
            <Container component="main" maxWidth="xs" style={{ marginBottom: 50, marginTop: 80 }}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login in to Guess Your Car
        </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Box display="flex" alignItems="center">
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                            /><Typography varinat="p">I agree to the <Link href='/termsandconditions'>Terms &amp; Conditions</Link> and <Link to='privacy-policy'>Privacy Policy</Link></Typography>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
          </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link onClick={() => setScreen({
                                    login: false,
                                    signup: false,
                                    forgotPassword: true
                                })} style={{ cursor: 'pointer' }} variant="body2">
                                    Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={() => setScreen({
                                    login: false,
                                    signup: true,
                                    forgotPassword: false
                                })} style={{ cursor: 'pointer' }} variant="body">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {/* <Box mt={8}>
                <Copyright />
            </Box> */}
            </Container>
        );
    }
    if (screen?.signup) {
        return (
            <Container component="main" maxWidth="sm" style={{ marginTop: 80 }}>
                <CssBaseline />
                <div className={classes.paper} style={{ marginBottom: 50 }}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up to Guess Your Car
            </Typography>
                    <form className={classes.form} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="dealerName"
                                    label="Dealer Name"
                                    name="dealerName"
                                    autoComplete="dealer"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="brandName"
                                    label="Brand Name"
                                    name="brankName"
                                    autoComplete="brand"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="mobile"
                                    label="Mobile"
                                    name="mobile"
                                    autoComplete="mobile"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" alignItems="center">
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                    /><Typography varinat="p">I agree to the <Link href='/termsandconditions'>Terms &amp; Conditions</Link> and <Link href='privacy-policy'>Privacy Policy</Link></Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
              </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link onClick={() => setScreen({
                                    login: true,
                                    signup: false,
                                    forgotPassword: false
                                })} style={{ cursor: 'pointer' }} variant="body2">
                                    Already have an account? Sign in
                  </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {/* <Box mt={5}>
                    <Copyright />
                </Box> */}
            </Container>
        )
    }
    if (screen?.forgotPassword) {
        return (
            <Container component="main" maxWidth="xs" style={{ marginBottom: 50, marginTop: 80 }}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Forgot Your Password ?
        </Typography>
                    <Typography component="p" variant="p">
                        Please enter your email address and we will send you a reset password link.
        </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Reset Password
          </Button>
                        <Grid container>

                            <Grid item>
                                <Link onClick={() => setScreen({
                                    login: true,
                                    signup: false,
                                    forgotPassword: false
                                })} style={{ cursor: 'pointer' }} variant="body">
                                    {"Back to Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {/* <Box mt={8}>
                <Copyright />
            </Box> */}
            </Container>
        );
    }
}