import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PostInput = ({ createPost }) => {
  const [post, setPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(post);
    setPost('');
  };
  const isTextInput = post.length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        size='small'
        id='outlined-basic'
        label='Post'
        variant='outlined'
        name='post'
        value={post}
        onChange={(e) => setPost(e.target.value)}
        sx={{
          margin: 1,
        }}
      />
      <Button
        disabled={isTextInput}
        type='submit'
        variant='outlined'
        color='success'
        sx={{
          margin: 1,
        }}
        size='large'
      >
        Add Post
      </Button>
    </form>
  );
};

export default PostInput;
