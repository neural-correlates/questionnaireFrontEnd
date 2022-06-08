import './App.css';
import { 
          Typography,
          Button,
          Container,
          TextField,
          Box
        } from '@mui/material';
import React, { Component } from 'react';
import BasicRating from './components/BasicRating';
import Tabs from './components/Tabs';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
      <Box sx={{padding: '0'}} fixed>
        <Container>
        <Typography variant="h1" component="h2" sx={{marginY: '5vh'}}>
          Correlates Questionnaire
        </Typography>
        </Container>
        <Tabs />
      </Box>
      </>
    )
  }
}

export default App;
