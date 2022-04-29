import React from 'react';
import { useSelector } from 'react-redux';
import PostList from './Components/PostList';
import { ThemeProvider } from './ThemeContext';
import { Box } from '@mui/material';

function App() {
  const state = useSelector((state) => ({ ...state }));
  console.log('state => ', state);

  return (
    <div>
      <ThemeProvider>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <PostList />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
