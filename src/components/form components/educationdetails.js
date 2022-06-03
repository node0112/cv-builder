import { click } from "@testing-library/user-event/dist/click";
import React, { Component } from "react";
import ExperienceDetails from "./experiencedetails";
import InputElement from "./inputElement";

class EducationDetails extends Component{

    constructor(props){
        super(props)
        this.state={
            clicked: 'material-icons add-button',
            renderSection: false, //set to false
        }
        this.addSection=this.addSection.bind(this)
    }
    
    addSection(){
        this.setState({
            clicked: 'material-icons add-button hide',
            renderSection: true
        })
    }
    render(){
        return(
            <div className="education-details-section">
                <div className="section-header-form label">2. Education Details* <i className={this.state.clicked} style={{marginLeft: "2%"}} onClick={this.addSection}>add_circle</i><div className={this.props.filled}>  Please Fill All The Required Fields!</div></div>
                {this.state.renderSection ? 
                    <div className="input-container">
                    <InputElement logo="school" labelClass="label form-text" labelText="Institution*:" inputClass="institution" inputType="text" inputSize="14" function={this.props.changeinstitution}/>
                    <InputElement logo="history_edu" labelClass="label form-text" labelText="Course Chosen* :" inputClass="telephone" inputType="tel" inputSize="13" function={this.props.changeCourse} />
                    </div>
                 : null 
                 }
                 {this.state.renderSection ? 
                    <div className="input-container">
                    <InputElement logo="calendar_month" labelClass="label form-text" labelText="Date Course Was Taken* :" inputClass="course-date" inputType="date" inputSize="14" function={this.props.changeYear}/>
                    </div>
                 : null 
                 }
                 {this.state.renderSection ? 
                 <div className="form-options">
                 <div className="section-header label">Form Options</div>
                 <div className="label color-picker" style={{fontSize:"20px"}}>CV Accent Color: <input type={"color"} value={this.props.accentColor} onChange={this.props.changeColor}/></div>
                 <div className="label color-picker" style={{fontSize:"20px"}}>CV Text Color: <input type={"color"} value={this.props.textColor} onChange={this.props.changeTextColor}/></div>
                 </div>
                :
                null}
                 {this.state.renderSection ? 
                    <ExperienceDetails functions={this.props.experienceFunctions}/> //this is called in section 2 so that the form doesn't look crowded
                 : null 
                 }
                 {this.state.renderSection ? 
                   <div className="form-buttons">
                       <div className="submit-button label" onClick={this.props.submitClick}>Submit</div>
                    </div>
                 : null 
                 }
            </div>
        )
    }
}

export default EducationDetails