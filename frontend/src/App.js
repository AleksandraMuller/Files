import React, { useState, useEffect } from 'react';
import { fetchData, addFile } from './services/services';
import { FileList } from './components/FileList';
import { Form } from './components/Form';
import { Header } from 'components/Header';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  container: {
    width: '95%',
    margin: '0 auto',
    marginTop: 20,
  },
});

export const App = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    fetchData(setError, setFiles);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <Form />
      <TableContainer
        component={Paper}
        elevation={3}
        className={classes.container}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>File name</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">File Size (MB)</StyledTableCell>
              <StyledTableCell align="right">Created at</StyledTableCell>
              <StyledTableCell align="right">Author</StyledTableCell>
            </TableRow>
          </TableHead>
          <FileList files={files} />
        </Table>
      </TableContainer>
    </>
  );
};
