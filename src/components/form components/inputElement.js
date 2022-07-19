import React, { Component } from "react";

class InputElement extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="input-element">
                <i class="material-icons form-logo">{this.props.logo}</i>
                <label className={this.props.labelClass}>{this.props.labelText}</label>
                <input className={this.props.inputClass} type={this.props.inputType} size={this.props.inputSize} onChange={this.props.function} max={this.props.max} placeholder={this.props.placeholder}></input>
            </div>
        )
    }
}

export default InputElement