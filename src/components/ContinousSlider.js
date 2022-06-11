import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function ContinuousSlider(props) {
  return (
    <Box sx={{ ...props.sx, width: '90%' }}>
      <Box sx={{width: 100 }}>{props.value}</Box>
      <Slider value={props.value} aria-label="Disabled slider" onChange={props.setValue}/>
    </Box>
  );
}