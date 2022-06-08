import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
    const [value, setValue] = React.useState(0);
  
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend" sx={{margin: '20px', marginLeft: '10px'}}>field 2</Typography>
        <Rating name="no-value" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
      </Box>
    );
  }