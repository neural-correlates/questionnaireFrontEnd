import { Component } from "react";
import { Box,
    Button,
Container, 
Typography} from '@mui/material';
import Questions from "./Questions";

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
        clearInterval(this.state.interval);
    }
    render() {
        return (
            <Box>
                <Container>
                <Typography variant="h6">{this.props.questionNumber}. {this.props.question}</Typography>
                    <Box component="span">
                        <h4>Time spent on this question: {this.state.time} s</h4>
                    </Box>
                </Container>
            </Box>
        );
    }
}