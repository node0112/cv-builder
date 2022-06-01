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
                    <div className="form-footer">
                        <div className="footer-text label">All Fields Marked With * Are Required To Be Filled </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Form