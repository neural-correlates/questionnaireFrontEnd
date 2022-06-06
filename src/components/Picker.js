import { Component } from "react";
import Picked from "./Picked";

export default class Picker extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "radio"
        }
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    updateValue(e){
        this.setState({
            value: [e.target.value]
        })
    }
    handleSubmit(e){
        e.preventDefault();
        alert('submitted ' + this.state.value);
        // To do when middleware is complete

        /* fetch('api/endpoint/to/post', data).then(res => {

        }).catch(e => {
            console.log(e);
        }) */
    }
    render(){
        return(
            <>
            <div>
                <label style={{margin: '10px'}}>choose a type</label>
                <select onChange={this.updateValue}>
                    <option value='radio'>Radio</option>
                    <option value='select'>Select</option>
                    <option value='multiselect'>Multiselect</option>
                    <option value='text'>Text</option>
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            <Picked option={this.state.value} />
            </>
        )
    }

}