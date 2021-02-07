import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Train, Bus, Plane } from '../../data/dummyData';

const useStyles = makeStyles({
  formStyle: {
    marginTop: '25px',
    border: '1px solid',
    padding: '10px',
    boxShadow: '5px 10px #888888',
  },
  headline: {
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textField: {
    marginBottom: '10px',
  },
  container: {
    marginTop: '100px',
  },
});

const AddConveyance = (props) => {
  const [type, setType] = useState('');

  const classes = useStyles();

  useEffect(() => {
    if (props.location.state.type == 1) {
      setType('Train');
    } else if (props.location.state.type == 2) {
      setType('Bus');
    } else if (props.location.state.type == 3) {
      setType('Plane');
    }
  });

  return (
    <Container className={classes.container} maxWidth={'sm'}>
      <form className={classes.formStyle}>
        <Typography className={classes.headline} variant='h5'>
          Add {type}
        </Typography>
        <TextField
          className={classes.textField}
          label={type + ' Name'}
          fullWidth={true}
          required
        />
        <TextField
          className={classes.textField}
          label='Single Fare'
          fullWidth={true}
          inputProps={{ maxLength: 5 }}
          type='Number'
          required
        />
        <TextField
          className={classes.textField}
          label='Return Fare'
          fullWidth={true}
          inputProps={{ maxLength: 11 }}
          type='number'
          required
        />
        <FormControlLabel
          className={classes.textField}
          control={<Checkbox defaultChecked color='primary' />}
          label='Available'
        />
        <Button
          fullWidth={true}
          variant='contained'
          color='primary'
          size='large'
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddConveyance;
