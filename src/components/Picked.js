import { Component } from "react";

export default class Picked extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return this.props.option
    }
}