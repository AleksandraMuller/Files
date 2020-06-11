import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const FileItem = ({ file }) => {
  return (
    <StyledTableRow key={file.name}>
      <StyledTableCell component="th" scope="row">
        {file.name}
      </StyledTableCell>
      <StyledTableCell align="right">{file.description}</StyledTableCell>
      <StyledTableCell align="right">{file.size}</StyledTableCell>
      <StyledTableCell align="right">{file.date}</StyledTableCell>
      <StyledTableCell align="right">{file.author}</StyledTableCell>
    </StyledTableRow>
  );
};
