import { Component } from "react";
import { Box,
    Button,
Container, 
Typography} from '@mui/material';

export default class TimedQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            interval: null
        };
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    time: this.state.time + 1
                });
            }, 1000)
        });
    }
    componentWillUnmount() {
        //clearInterval(this.state.interval);
    }
    render() {
        return (
            <Box sx={{border: "solid 2px grey", borderRadius: '10px', width: 900}}>
                <Container sx={{padding: '50px'}}>
                <Typography variant="h6">{this.props.question}</Typography>
                    <Box component="span" sx={{width: 150, position: 'relative', top: '0px', left: '70%'}}>
                        <h4>Time spent on this question: {this.state.time}</h4>
                    </Box>
                    <div style={{position: "relative", top: "0px", left: "75%"}}>
                        <Button sx={{margin: '5px'}} variant="contained" color="primary">Next</Button>
                        <Button sx={{margin: '5px'}} variant="contained" color="primary">Previous</Button>
                    </div>
                </Container>
            </Box>
        );
    }
}