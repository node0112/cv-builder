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
                    <PersonalDetails nameChange={functions.nameChange} changeGender={functions.changeGender} changeEmail={functions.changeEmail} changeTelephone={functions.changeTelephone} filled={this.props.filled} changeSocialProfile={functions.changeSocialProfile}/>
                    <EducationDetails changeInstitution={functions.changeInstitution} changeCourse={functions.changeCourse} changeYear={functions.changeYear} experienceFunctions={this.props.functions} filled={this.props.filled} submitClick={functions.submitClick} accentColor={this.props.accentColor} textColor={this.props.textColor} changeTextColor={functions.changeTextColor} changeColor={functions.changeColor}/>
                    <div className="form-footer">
                        <div className="footer-text-start footer-text label">To Edit After Submitting, Simply Type In The Value And It Will Updated In The Preview Automatically</div>
                        <div className="footer-text label">Fields Marked With * Are Required To Be Filled </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Form