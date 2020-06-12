import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteFile } from '../services/services';

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

export const FileItem = ({ file, index, files }) => {
  const bytestoMB = (bytes) => {
    const MB = (bytes / (1024 * 1024)).toFixed(2);
    return MB;
  };

  const handleDelete = (index) => {
    const foundOne = files[index]._id;
    const id = files.filter((file) => file._id === foundOne._id);
    deleteFile(foundOne);
  };
  return (
    <StyledTableRow key={file.name}>
      <StyledTableCell component="th" scope="row">
        <DeleteIcon onClick={() => handleDelete(index)} />
      </StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {file.name}
      </StyledTableCell>
      <StyledTableCell align="right">{file.description}</StyledTableCell>
      <StyledTableCell align="right">{bytestoMB(file.size)}</StyledTableCell>
      <StyledTableCell align="right">
        {moment(file.date).format('DD/MMM/YYYY')}
      </StyledTableCell>
      <StyledTableCell align="right">{file.author}</StyledTableCell>
    </StyledTableRow>
  );
};
