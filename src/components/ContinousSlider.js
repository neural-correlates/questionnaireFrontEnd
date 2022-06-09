import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(30);
  const [X, setX] = React.useState(0);
  const [Y, setY] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Box sx={{width: 100 }}>{value}</Box>
      <Slider defaultValue={30} aria-label="Disabled slider" onChange={(event, newValue) => {handleChange(event, newValue);}} />
    </Box>
  );
}