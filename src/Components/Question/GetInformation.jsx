import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControl, FormLabel, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function GetInformationQuestion({
  currentQuestion,
  checkBox,
  setCheckBox,
  questionNumber,
}) {
  const classes = useStyles();

  const onChange = (e) => {
    setCheckBox({
      ...checkBox,
      [questionNumber]: {
        ...checkBox[questionNumber],
        [e.target.name]: e.target.value,
      },
    });
  };

  useEffect(() => {
    console.log({ checkBox });
  }, [checkBox]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid item container spacing={1} className="w-50" justify="flex-start">
        <Grid item xs={6}>
          <TextField
            onChange={onChange}
            name="firstName"
            id="name"
            label="First Name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="mobile"
            onChange={onChange}
            name="lastName"
            label="Last Name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="Mobile"
            onChange={onChange}
            name="mobileNumber"
            label="Mobile Number"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField id="city" onChange={onChange} name="city" label="City" />
        </Grid>
        <Grid item xs={6}>
          <TextField id="OTP" onChange={onChange} label="OTP" name="OTP" />
        </Grid>
      </Grid>
    </form>
  );
}
