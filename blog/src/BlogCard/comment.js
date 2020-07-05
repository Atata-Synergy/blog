import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70%',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div> 
  <TextField id="outlined-basic" label="Name or Email" variant="outlined" />      
        <TextField
          id="outlined-multiline-static"
          label="Comment Here"
          multiline
          rows={6}
          variant="outlined"
        />
      </div>
      <Button
        variant="contained"
        color="#0e8502"
        className={classes.button}
        endIcon={<CreateIcon />}
      >
        Comment
      </Button>
    </form>
  );
}
