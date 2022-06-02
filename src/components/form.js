import React, { Component } from "react";
import PersonalDetails from "./form components/personal-details";
import EducationDetails from "./form components/educationdetails";

class Form extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const functions=this.props.functions
        return(
            <div className="form">
                <div className="form-content">
                    <PersonalDetails nameChange={functions.nameChange} changeGender={functions.changeGender} changeEmail={functions.changeEmail} changeTelephone={functions.changeTelephone} filled={this.props.filled}/>
                    <EducationDetails changeSchoolName={functions.changeSchoolName} changeCourse={functions.changeCourse} changeYear={functions.changeYear} experienceFunctions={this.props.functions} filled={this.props.filled} submitClick={functions.submitClick}/>
                    <div className="form-options">
                        <div className="section-header label">Form Options</div>
                        <div className="label color-picker" style={{fontSize:"20px"}}>CV Accent Color: <input type={"color"} value={this.props.accentColor} onChange={event => functions.changeColor(event)}/></div>
                        <div className="label color-picker" style={{fontSize:"20px"}}>CV Text Color: <input type={"color"} value={this.props.textColor} onChange={event => functions.changeTextColor(event)}/></div>
                    </div>
                    <div className="form-footer">
                        <div className="footer-text label">Fields Marked With * Are Required To Be Filled </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Form