import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';
import { 
  Typography,
  Button,
  Container,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  Card,
  CardContent,
  CardActions
} from '@mui/material';
import BasicRating from './BasicRating';
import OutlinedCard from './OutlineCard';
import ContinuousSlider from './ContinousSlider';
import BasicSelect from './BasicSelect';
import Questions from './Questions';

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
      sliderVal: 0,
      selectVal: 'option 1',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
  updateSelectVal = (event, newValue) => {
    this.setState({
      selectVal: event.target.value
    })
  }
  handleSubmit(e) {
    let uri = 'https://neuralcorr.herokuapp.com';
    e.preventDefault();
    console.log(this.state);
    axios.post(uri + '/responses', {
      data:{
        rating: this.state.rating,
        shortAns: this.state.shortAns,
        sliderVal: this.state.sliderVal,
        selectVal: this.state.selectVal
      }
    }).then(res => {
      alert('Successfully submitted');
    })
  }
  render() {
    const questions = [
      {question: 'How do you feel about this question?', answer: 'rating', type: 'basicRating'},
      {question: 'who is your favourite person?', options: ['option 1', 'option 2', 'option 3'], type: 'select'},
      {question: 'Why is benedict cucumber hot?', options: ['because it is', 'because it is', 'because it is', 'because it is'], type: 'select'},
      {question: 'Crister ROnaldo? SUI?', answer: 'Crister Ronaldo is the best player in the world', type: 'shortAns'},
      {question: 'How do you feel?', answer: 'I feel good', type: 'shortAns'},
    ]
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Container>
          <Tabs value={this.state.tabValue} onChange={this.updateTab} aria-label="basic tabs example">
            <Tab label="Feedback" {...a11yProps(0)} />
            <Tab label="Designer" {...a11yProps(1)} />
            <Tab label="Timed" {...a11yProps(2)} />
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
              <BasicRating value={this.state.rating} setValue={this.updateRating} sx={{marginLeft: '20px'}}/>
              <Typography component="legend" sx={{margin: '20px', marginLeft: '10px'}}>Question 4</Typography>
              <ContinuousSlider value={this.state.sliderVal} setValue={this.updateSliderVal} sx={{marginLeft: '5px', marginBottom: '30px'}}/>
              <Typography component="legend" sx={{margin: '20px', marginLeft: '10px'}}>Question 5</Typography>
              <BasicSelect value={this.state.selectVal} setValue={this.updateSelectVal} sx={{width: '90%'}}/>
              <Button variant="contained" color="success" onClick={this.handleSubmit} sx={{marginTop: '60px'}}>Submit</Button>
            </Grid>
            <Grid item xs={4}>
              <OutlinedCard />
            </Grid>
          </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={this.state.tabValue} index={1}>
          <Container>
            Item 2
          </Container>
        </TabPanel>
        <TabPanel value={this.state.tabValue} index={2}>
          <Container>
            <Questions questions={questions} />
            <Box sx={{"border": "1 px solid"}}>
            </Box>
          </Container>
        </TabPanel>
      </Box>
    )
  }
}
