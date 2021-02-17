import { React, useState, useEffect } from 'react';
import {
  Button,
  ButtonGroup,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  makeStyles,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import db from '../../Firebase/firebase';
import Draggable from 'react-draggable';

const useStyles = makeStyles((theme) => ({
  headline: {
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textField: {
    marginBottom: '15px',
  },
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle='#draggable-dialog-title'
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const ShowConveyance = (props) => {
  const classes = useStyles();

  const [type, setType] = useState('');
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [id, setID] = useState('');
  const [singleFare, setSingleFare] = useState(0);
  const [returnFare, setReturnFare] = useState(0);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (props.location.state.type === 1) {
      setType('Train');
      fetchBlogs('Train');
    } else if (props.location.state.type === 2) {
      setType('Bus');
      fetchBlogs('Bus');
    } else if (props.location.state.type === 3) {
      setType('Plane');
      fetchBlogs('Plane');
    }
  }, [data]);

  const handleClickOpen = (item) => {
    setOpen(true);
    setID(item.id);
    setName(item.name);
    setSingleFare(item.singleFare);
    setReturnFare(item.returnFare);
    setAvailable(item.available);
  };

  const fetchBlogs = async (type) => {
    const response = db.collection(type);
    const data = await response.get();
    let arr = [];
    data.docs.forEach((item) => {
      arr.push({
        id: item.id,
        name: item.data().name,
        singleFare: item.data().singleFare,
        returnFare: item.data().returnFare,
        available: item.data().available,
      });
    });
    setData(arr);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateHandler = () => {
    db.collection(type).doc(id).set({
      name: name,
      singleFare: singleFare,
      returnFare: returnFare,
      available: available,
    });
    setOpen(false);
  };

  const deleteHandler = async (item) => {
    db.collection(type).doc(item.id).delete();
  };

  return (
    <Container width='lg'>
      <Typography style={{ fontWeight: 'bold', margin: '15px 0' }} variant='h4'>
        {type + ' Information'}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Single Fare</TableCell>
              <TableCell>Return Fare</TableCell>
              <TableCell>Available</TableCell>
              <TableCell>Update/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.title}>
                <TableCell component='th' scope='row'>
                  {item.name}
                </TableCell>
                <TableCell>{item.singleFare}</TableCell>
                <TableCell>{item.returnFare}</TableCell>
                <TableCell>
                  {item.available === true ? (
                    <CheckIcon style={{ color: 'green', fontSize: '30px' }} />
                  ) : (
                    <ClearIcon style={{ color: 'red', fontSize: '30px' }} />
                  )}
                </TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button
                      onClick={() => handleClickOpen(item)}
                      color='primary'
                      variant='contained'
                    >
                      Update
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      PaperComponent={PaperComponent}
                      aria-labelledby='draggable-dialog-title'
                    >
                      <DialogContent>
                        <Container
                          style={{ marginTop: '25px' }}
                          className={classes.container}
                          maxWidth={'sm'}
                        >
                          <form className={classes.formStyle}>
                            <Typography
                              className={classes.headline}
                              variant='h5'
                            >
                              Update {item.name}
                            </Typography>
                            <TextField
                              className={classes.textField}
                              fullWidth={true}
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                              className={classes.textField}
                              fullWidth={true}
                              value={singleFare}
                              inputProps={{ maxLength: 5 }}
                              type='number'
                              required
                              onChange={(e) => setSingleFare(e.target.value)}
                            />
                            <TextField
                              className={classes.textField}
                              fullWidth={true}
                              value={returnFare}
                              inputProps={{ maxLength: 5 }}
                              type='number'
                              required
                              onChange={(e) => setReturnFare(e.target.value)}
                            />
                            <FormControlLabel
                              className={classes.textField}
                              control={
                                <Checkbox
                                  onChange={(e) =>
                                    setAvailable(e.target.checked)
                                  }
                                  defaultChecked={available}
                                  color='primary'
                                />
                              }
                              label='Available'
                            />
                            <Button
                              fullWidth={true}
                              variant='contained'
                              color='primary'
                              size='large'
                              style={{ marginBottom: '25px' }}
                              onClick={updateHandler}
                            >
                              Update
                            </Button>
                          </form>
                        </Container>
                      </DialogContent>
                    </Dialog>
                    <Button
                      onClick={() => deleteHandler(item)}
                      color='secondary'
                      variant='contained'
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ShowConveyance;
