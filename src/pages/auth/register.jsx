import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  form: {
    width: '100%',
    maxWidth: 400,
    marginTop: theme.spacing(2),
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAlien, setIsAlien] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!username) {
      validationErrors.username = 'Username is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Perform registration logic
      console.log('Registration successful');
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAlien(e.target.checked);
  };

  return (
    <div className={classes.root}>
      <h1>Register Page</h1>
      <form className={classes.form} onSubmit={handleRegister}>
        <TextField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
          error={!!errors.username}
          helperText={errors.username}
          className={classes.formControl}
        />
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          error={!!errors.email}
          helperText={errors.email}
          className={classes.formControl}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          error={!!errors.password}
          helperText={errors.password}
          className={classes.formControl}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          required
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          className={classes.formControl}
        />
        <FormControlLabel
          control={<Checkbox checked={isAlien} onChange={handleCheckboxChange} />}
          label="Are you an alien?"
          className={classes.formControl}
        />
        <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;