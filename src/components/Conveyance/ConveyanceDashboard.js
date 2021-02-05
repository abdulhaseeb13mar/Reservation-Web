import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Button,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  headingStyle: {
    marginTop: '70px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1.25px',
  },
  buttonStyle: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
  },
  planeButtonStyle: {
    backgroundColor: 'tomato',
    color: 'white',
  },
  buttonWidth: {
    width: '90%',
  },
});

function ConveyanceDashboard(props) {
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <div>
        <Typography className={classes.headingStyle} variant='h4'>
          Manage Trains
        </Typography>
        <Grid container>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={classes.buttonWidth}
              size='large'
              color='primary'
              variant='contained'
            >
              Show All Trains
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={classes.buttonWidth}
              size='large'
              color='primary'
              variant='contained'
              onClick={() =>
                props.history.push({
                  pathname: './manage-conveyance/add-conveyance',
                  state: { type: 1 },
                })
              }
            >
              Add Train
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={classes.buttonWidth}
              size='large'
              color='primary'
              variant='contained'
            >
              Update Train
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={classes.buttonWidth}
              size='large'
              color='primary'
              variant='contained'
            >
              Delete Train
            </Button>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography className={classes.headingStyle} variant='h4'>
          Manage Buses
        </Typography>
        <Grid container>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={classes.buttonWidth}
              size='large'
              color='secondary'
              variant='contained'
            >
              Show All Buses
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={classes.buttonWidth}
              size='large'
              color='secondary'
              variant='contained'
              onClick={() =>
                props.history.push({
                  pathname: './manage-conveyance/add-conveyance',
                  state: { type: 2 },
                })
              }
            >
              Add Bus
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={classes.buttonWidth}
              size='large'
              color='secondary'
              variant='contained'
            >
              Update Bus
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={classes.buttonWidth}
              size='large'
              color='secondary'
              variant='contained'
            >
              Delete Bus
            </Button>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography className={classes.headingStyle} variant='h4'>
          Manage Planes
        </Typography>
        <Grid container>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={[classes.planeButtonStyle, classes.buttonWidth]}
              size='large'
              variant='contained'
            >
              Show All Planes
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={[classes.planeButtonStyle, classes.buttonWidth]}
              size='large'
              variant='contained'
              onClick={() =>
                props.history.push({
                  pathname: './manage-conveyance/add-conveyance',
                  state: { type: 3 },
                })
              }
            >
              Add Plane
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={[classes.planeButtonStyle, classes.buttonWidth]}
              size='large'
              variant='contained'
            >
              Update Plane
            </Button>
          </Grid>
          <Grid className={classes.buttonStyle} item xs={6} sm={3}>
            <Button
              className={[classes.planeButtonStyle, classes.buttonWidth]}
              size='large'
              variant='contained'
            >
              Delete Plane
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
export default ConveyanceDashboard;

/* <button
        onClick={() => props.history.push('./manage-conveyance/add-conveyance')}
      >
        add
      </button> */
