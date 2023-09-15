import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import "./login.scss"
import { useState } from 'react';
import { Link } from 'react-router-dom';


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  }));
  
  const LoginModal = ({ open, onClose}) => {

    const classes = useStyles();
  
    const handleClose = () => {
      onClose();
    };
  
    const handleLogin = () => {
      // Handle login logic here
    };

  return <Dialog open={open} 
  onClose={handleClose}
  aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Login</DialogTitle>
    <DialogContent>
      <DialogContentText>Please enter your email and password to login.</DialogContentText>
      <form className={classes.root}>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
      </form>
      <Link className="login__link" to="/signup">Don't have an account? Sign up</Link>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleLogin} color="primary">
        Login
      </Button>
    </DialogActions>
  </Dialog>
  }
  export default LoginModal;
