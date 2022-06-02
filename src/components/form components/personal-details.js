import React, { Component } from "react";
import InputElement from "./inputElement";

class PersonalDetails extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="personal-details-section">
                <div className="section-header label">1. Personal Details* <div className={this.props.filled}>  Please Fill All The Required Fields!</div></div>
                <div className="input-container">
                    <InputElement logo="account_circle" labelClass="label form-text" labelText="Full Name* :" inputClass="name" inputType="text" inputSize="13" function={this.props.nameChange} />
                    <div className="gender-selector label" onChange={event => this.props.changeGender(event,'gender')}>
                    <div className="label" style={{marginLeft: "5%"}}>Pronoun*: </div>
                    <input type="radio" value="Male" name="gender" /> Mr.
                    <input type="radio" value="Female" name="gender" /> Mrs.
                    <input type="radio" value="Other" name="gender" /> Other
                    </div>
                </div>
                <div className="input-container">
                <InputElement logo="email" labelClass="label form-text" labelText="E-Mail* :" inputClass="email" inputType="tel" inputSize="14" function={this.props.changeEmail}/>
                <InputElement logo="phone_in_talk" labelClass="label form-text" labelText="Phone No. :" inputClass="telephone" inputType="tel" inputSize="13" function={this.props.changeTelephone}/>
                </div>
                <div className="input-container">
                <InputElement logo="link" labelClass="label form-text" labelText="Active Social Profile* :" inputClass="social" inputType="text" inputSize="35" />
                </div>
            </div>
        )
    }
}

export default PersonalDetails