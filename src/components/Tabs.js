import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { 
  Typography,
  Button,
  Container,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid
} from '@mui/material';
import BasicRating from './BasicRating';
import OutlinedCard from './OutlineCard';
import ContinuousSlider from './ContinousSlider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default class BasicTabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      tabValue: 0,
      shortAns: '',
      sliderVal: 0
    }
  }
  updateTab = (event, newValue) => {
    this.setState({
      tabValue: newValue
    })
  };
  updateRating = (event, newValue) => {
    this.setState({
      rating: newValue
    })
  }
  updateShortAns = (event, newValue) => {
    this.setState({
      shortAns: event.target.value
    })
  }
  updateSliderVal = (event, newValue) => {
    this.setState({
      sliderVal: newValue
    })
  }
  render() {
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Container>
          <Tabs value={this.state.tabValue} onChange={this.updateTab} aria-label="basic tabs example">
            <Tab label="Feedback" {...a11yProps(0)} />
            <Tab label="Designer" {...a11yProps(1)} />
          </Tabs>
          </Container>
        </Box>
        <TabPanel value={this.state.tabValue} index={0}>
          <Container>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <Typography component="legend" sx={{margin: '20px', marginLeft: '10px'}}>Question 1</Typography>
              <TextField id="outlined-basic" label="write your answer briefly ... " variant="outlined" 
                sx={{width: '90%', marginBottom: '30px'}}
                onChange={this.updateShortAns}/>
              <BasicRating value={this.state.rating} setValue={this.updateRating}/>
              <Typography component="legend" sx={{margin: '20px', marginLeft: '10px'}}>Question 4</Typography>
              <ContinuousSlider value={this.state.sliderVal} setValue={this.updateSliderVal}/>
            </Grid>
            <Grid item xs={4}>
              <OutlinedCard />
            </Grid>
          </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={this.state.tabValue} index={1}>
          Item Two
        </TabPanel>
      </Box>
    )
  }
}

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Container>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Feedback" {...a11yProps(0)} />
//           <Tab label="Designer" {...a11yProps(1)} />
//         </Tabs>
//         </Container>
//       </Box>
//       <TabPanel value={value} index={0}>
//         <Container>
//         <Grid container spacing={0}>
//           <Grid item xs={8}>
//             <Typography component="legend" sx={{margin: '20px', marginLeft: '10px'}}>Question 1</Typography>
//             <TextField id="outlined-basic" label="write your answer briefly ... " variant="outlined" sx={{width: '90%', marginBottom: '30px'}}/>
//             <BasicRating />
//             <Typography component="legend" sx={{margin: '20px', 'marginLeft': '10px'}}>Question 3</Typography>
//             <FormGroup sx={{marginBottom: '50px'}}>
//               <FormControlLabel control={<Checkbox />} label="Label" value="Label 1"/>
//               <FormControlLabel control={<Checkbox />} label="Label" value="Label 2"/>
//               <FormControlLabel control={<Checkbox />} label="Label" value="Label 3"/>
//             </FormGroup>
//             <Typography component="legend" sx={{margin: '20px', marginLeft: '10px'}}>Question 4</Typography>
//             <ContinuousSlider />
//           </Grid>
//           <Grid item xs={4}>
//             <OutlinedCard />
//           </Grid>
//         </Grid>
//         </Container>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//     </Box>
//   );
// }
