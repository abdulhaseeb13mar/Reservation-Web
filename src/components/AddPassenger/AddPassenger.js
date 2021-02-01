import {
  Grid,
  makeStyles,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  margin: {
    marginTop: "15px",
  },
  textStyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginTop: "10px",
  },
});

function AddPassenger() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs="1" md="3"></Grid>
      <Grid item xs="10" md="6">
        <Typography className={classes.textStyle} variant="h4">
          Insert New Passenger
        </Typography>
        <form>
          <TextField
            className={classes.margin}
            fullWidth={true}
            label="Name"
            variant="outlined"
            required
          />
          <TextField
            className={classes.margin}
            fullWidth={true}
            label="Father/Husband Name"
            variant="outlined"
            required
          />
          <Grid container>
            <Grid item xs="6">
              <FormControl
                className={classes.margin}
                style={{ width: "95%" }}
                variant="outlined"
              >
                <InputLabel id="demo">Gender</InputLabel>
                <Select label="Gender" labelId="demo">
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs="6">
              <TextField
                className={classes.margin}
                label="CNIC"
                variant="outlined"
                required
                fullWidth={true}
                inputProps={{ maxLength: 13 }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs="6">
              <FormControl
                className={classes.margin}
                style={{ width: "95%" }}
                variant="outlined"
              >
                <InputLabel id="city">City</InputLabel>
                <Select label="City" labelId="city">
                  <MenuItem value={"karachi"}>Karachi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs="6">
              <TextField
                className={classes.margin}
                label="Phone Number"
                variant="outlined"
                required
                fullWidth={true}
                inputProps={{ maxLength: 11 }}
              />
            </Grid>
          </Grid>
          <TextField
            className={classes.margin}
            label="Address"
            variant="outlined"
            required
            fullWidth={true}
            inputProps={{ maxLength: 11 }}
          />
          <Grid container>
            <Grid item xs="6">
              <FormControl
                className={classes.margin}
                style={{ width: "95%" }}
                variant="outlined"
              >
                <InputLabel id="travel">Mode of Travelling</InputLabel>
                <Select label="Mode of Travelling" labelId="travel">
                  <MenuItem value={"train"}>Train</MenuItem>
                  <MenuItem value={"bus"}>Bus</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs="6">
              <FormControl
                className={classes.margin}
                fullWidth={true}
                variant="outlined"
              >
                <InputLabel id="available">Available</InputLabel>
                <Select label="Available" labelId="available">
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs="6">
              <FormControl className={classes.margin} component="fieldset">
                <FormLabel component="hgroup">Journey</FormLabel>
                <RadioGroup row name="journey">
                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="Single"
                  />
                  <FormControlLabel
                    value="return"
                    control={<Radio />}
                    label="Return"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs="6">
              <TextField
                className={classes.margin}
                label="No. of Seats"
                variant="outlined"
                required
                fullWidth={true}
                inputProps={{ maxLength: 2 }}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Grid item xs="6">
              <Typography className={classes.textStyle} variant="h4">
                Fare: 0
              </Typography>
            </Grid>
            <Grid item xs="6">
              <Typography className={classes.textStyle} variant="h4">
                Amount Paid: 0
              </Typography>
            </Grid>
          </Grid>
          <Button
            className={classes.margin}
            fullWidth={true}
            variant="contained"
            color="primary"
            size="large"
          >
            Submit
          </Button>
        </form>
      </Grid>
      <Grid item xs="1" md="3"></Grid>
    </Grid>
  );
}

export default AddPassenger;
