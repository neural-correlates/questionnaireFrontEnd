import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label="Age"
          onChange={props.setValue}
          sx={props.sx}
        >
          <MenuItem value={'option 1'}>Option 1</MenuItem>
          <MenuItem value={'option 2'}>Option 2</MenuItem>
          <MenuItem value={'option 3'}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}