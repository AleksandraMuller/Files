import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
      marginTop: 20,
    },
    '& .MuiButton-root': {
      marginTop: 20,
      width: '20ch',
      margin: theme.spacing(1),
      alignSelf: 'center',
    },
  },
  form: { display: 'flex', justifyContent: 'space-around' },
}));

export const Form = () => {
  const classes = useStyles();

  return (
    <form
      id="uploadForm"
      action="http://localhost:9000/upload"
      method="post"
      encType="multipart/form-data"
      className={classNames(classes.form, classes.root)}
    >
      <TextField name="myFile" type="file" variant="outlined" size="80" />

      <TextField
        name="description"
        label="Description"
        type="text"
        autoComplete="current-descrition"
        variant="outlined"
      />
      <TextField
        name="author"
        label="Author"
        type="text"
        autoComplete="current-author"
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.styledButton}
      >
        Upload File
      </Button>
      {/* <button type="submit">Upload File</button> */}
    </form>
  );
};
