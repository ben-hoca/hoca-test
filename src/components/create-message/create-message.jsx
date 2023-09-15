import React, { useState } from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const CreateMessage = ({ open, onClose }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCreatePost = () => {
    const validationErrors = {};

    if (!title) {
      validationErrors.title = 'Title is required';
    }

    if (!file) {
      validationErrors.file = 'Please upload an image or video';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Perform post creation logic
      console.log('Post created successfully');
      onClose();
    }
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
      <DialogContent>
        <DialogContentText>Please fill in the details for your post.</DialogContentText>
        <form className={classes.root}>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            error={!!errors.title}
            helperText={errors.title}
          />
          <input
            accept="image/*, video/*"
            id="file"
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="file">
            <Button variant="contained" component="span">
              Upload Image or Video
            </Button>
          </label>
          {errors.file && <p style={{ color: 'red' }}>{errors.file}</p>}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreatePost} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateMessage;