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
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import db from '../../Firebase/firebase';

const ShowConveyance = (props) => {
  const [type, setType] = useState('');
  const [data, setData] = useState([]);
  const [id, setID] = useState('');

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

  const fetchBlogs = async (type) => {
    const response = db.collection(type);
    const data = await response.get();
    let arr = [];
    data.docs.forEach((item) => {
      arr.push({
        id: item.id,
        name: item.data().name,
        singleFare: item.data().name,
        returnFare: item.data().returnFare,
        available: item.data().available,
      });
    });
    setData(arr);
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
                    <CheckIcon style={{ color: 'red', fontSize: '30px' }} />
                  ) : (
                    <ClearIcon style={{ color: 'green', fontSize: '30px' }} />
                  )}
                </TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button color='primary' variant='contained'>
                      Update
                    </Button>
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
