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
import { Train, Bus, Plane } from '../../data/dummyData';

const DeleteConveyance = (props) => {
  const [type, setType] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.location.state.type == 1) {
      setType('Train');
      setData(Train);
    } else if (props.location.state.type == 2) {
      setType('Bus');
      setData(Bus);
    } else if (props.location.state.type == 3) {
      setType('Plane');
      setData(Plane);
    }
  });

  const deleteHandler = (name) => {
    // setTodos(todos.filter((el) => el.id !== todo.id));
    const newData = data.filter((el) => el.name !== name);
    console.log(newData);
    setData([...data, newData]);
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
                <TableCell>{item.available === true ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button
                      onClick={() => deleteHandler(item.name)}
                      color='secondary'
                      variant='contained'
                      size='large'
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

export default DeleteConveyance;
