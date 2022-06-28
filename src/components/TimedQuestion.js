import { Component } from "react";

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
            <div>
                <h1>{this.props.question}</h1>
                <p>{this.state.time}</p>
            </div>
        );
    }
}