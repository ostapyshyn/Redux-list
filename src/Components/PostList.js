import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost, addPost, removePost, updatePost } from '../redux/actions';
import PostInput from './PostInput';
import Todo from './Todo';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../ThemeContext';

const PostList = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const state = useSelector((state) => ({ ...state.posts }));
  let dispatch = useDispatch();

  const create = (newPost) => {
    dispatch(addPost(newPost));
  };

  const update = (id, updatedPost) => {
    dispatch(updatePost({ id, updatedPost }));
  };
  let color = theme ? 'lightgray' : 'background.default';
  return (
    <Container maxWidth='sm'>
      <Box bgcolor={color} color={'text.primary'}>
        <Typography variant='h3' component='div' align='center' gutterBottom>
          List of posts using Redux
        </Typography>
        Color theme: <Switch onChange={(e) => setTheme(theme ? false : true)} />
      </Box>

      <PostInput createPost={create} />
      <ul>
        <div>
          {state.posts &&
            state.posts.map((post) => {
              return (
                <Todo
                  key={post.id}
                  id={post.id}
                  task={post.post}
                  completed={post.completed}
                  toggleTodo={() => dispatch(readPost(post))}
                  removePost={() => dispatch(removePost(post))}
                  updatePost={update}
                />
              );
            })}
        </div>
      </ul>
    </Container>
  );
};

export default PostList;
