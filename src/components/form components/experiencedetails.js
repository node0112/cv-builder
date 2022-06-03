import { click } from "@testing-library/user-event/dist/click";
import React, { Component } from "react";
import InputElement from "./inputElement";

class ExperienceDetails extends Component{

    constructor(props){
        super(props)
        this.state={
            clicked: 'material-icons add-button',
            renderSection: false
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
        const functions=this.props.functions
        return(
            <div className="experience-details-section">
                <div className="section-header-form label">3. Experience In The Field 
                <i className={this.state.clicked} style={{marginLeft: "2%"}} onClick={this.addSection}>add_circle</i> 
                </div>
                {this.state.renderSection ? 
                    <div className="label note" >Leave Empty If You Have No Experience</div>
                 : null 
                 }
                {this.state.renderSection ? 
                    <div className="input-container">
                        <InputElement logo="store" labelClass="label form-text" labelText="Company :" inputClass="company" inputType="text" inputSize="14" function={functions.changeCompany}/>
                        <InputElement logo="stars" labelClass="label form-text" labelText="Position :" inputClass="position" inputType="tel" inputSize="13" function={functions.changePosition}/>
                    </div>
                 : null 
                 }
                 {this.state.renderSection ? 
                    <div className="input-container">
                    <InputElement logo="event" labelClass="label form-text" labelText="Years of Experience :" inputClass="experience" inputType="number" max="59" function={functions.changeExperienceYears}/>
                    </div>
                 : null 
                 }
                 {this.state.renderSection ? 
                    <div className="input-container">
                    <InputElement logo="task" labelClass="label form-text" labelText="Main Tasks On Job :" inputClass="tasks" inputType="text" inputSize="24" function={functions.changeJobTasks}/>
                    </div>
                 : null 
                 }
            </div>
        )
    }
}

export default ExperienceDetails