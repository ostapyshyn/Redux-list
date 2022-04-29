import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Todo = ({ toggleTodo, task, completed, id, removePost, updatePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editPost, setEditPost] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    updatePost(id, editPost);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <TextField
            size='small'
            id='outlined-basic'
            label='Post'
            variant='outlined'
            name='post'
            value={editPost}
            onChange={(e) => setEditPost(e.target.value)}
          />
          <Button
            type='submit'
            variant='outlined'
            color='primary'
            sx={{
              margin: 1,
            }}
            size='small'
          >
            Save
          </Button>
        </form>
      ) : (
        // <li onClick={toggleTodo}>{task}</li>
        <List>
          <ListItem>
            <ListItemText onClick={toggleTodo} primary={task} />
          </ListItem>
        </List>
      )}

      <Button
        onClick={() => setIsEditing(true)}
        variant='outlined'
        color='secondary'
        sx={{
          margin: 1,
        }}
        size='small'
      >
        Edit
      </Button>
      <Button
        onClick={removePost}
        variant='outlined'
        color='error'
        sx={{
          margin: 1,
        }}
        size='small'
      >
        Remove
      </Button>
    </div>
  );
};

export default Todo;
