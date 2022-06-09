import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props) {
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend" sx={{margin: '20px', marginLeft: '10px'}}>Question 2</Typography>
        <Rating name="no-value" value={props.value} onChange={props.setValue} sx={{marginBottom: '30px'}}/>
      </Box>
    );
  }