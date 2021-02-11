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
import db from '../../Firebase/firebase';

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

  const [name, setName] = useState('');
  const [singleFare, setSingleFare] = useState(0);
  const [returnFare, setReturnFare] = useState(0);
  const [available, setAvailable] = useState(true);

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

  const addHandler = () => {
    const tutorialsRef = db.collection(type);

    tutorialsRef
      .add({
        name,
        singleFare,
        returnFare,
        available,
      })
      .then(function (docRef) {
        console.log('Conveyance added with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding Conveyance: ', error);
      });

    props.history.push({
      pathname: './manage-conveyance/show-conveyance',
      state: { type: type },
    });
  };

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
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className={classes.textField}
          label='Single Fare'
          fullWidth={true}
          inputProps={{ maxLength: 5 }}
          type='Number'
          required
          onChange={(e) => setSingleFare(e.target.value)}
        />
        <TextField
          className={classes.textField}
          label='Return Fare'
          fullWidth={true}
          inputProps={{ maxLength: 11 }}
          type='number'
          required
          onChange={(e) => setReturnFare(e.target.value)}
        />
        <FormControlLabel
          className={classes.textField}
          control={<Checkbox defaultChecked color='primary' />}
          label='Available'
          onChange={(e) => setAvailable(e.target.checked)}
        />
        <Button
          fullWidth={true}
          variant='contained'
          color='primary'
          size='large'
          onClick={addHandler}
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddConveyance;
