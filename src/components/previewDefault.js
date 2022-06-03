// render this by default when inputCheck == false
import React, { Component } from "react";
import PersonalDetails from "./form components/personal-details";

class PreviewDefault extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="preview-form">
                <div className="preview-content" style={{color: this.props.textColor}}>
                    <div className="left-content" style={{backgroundColor: this.props.accentColor}}>
                        <div className="preview-text label">Mrs. Jane Doe</div>
                        <ul>
                            <li><i class="material-icons">email</i><div className="label sub-text">janedoe420@wecrash.com</div></li>
                            <li><i class="material-icons">phone</i><div className="label sub-text">+1 781-844-2765</div></li>
                            <li><i class="material-icons">link</i><a className="label sub-text" target={"blank"} href="https://github.com/node0112/cv-builder" style={{color: this.props.textColor}}>Social</a></li>
                        </ul>
                    </div>
                    <div className="right-content">
                        <div>
                        <div className="section-header label header-text" style={{...{color: this.props.accentColor},...{borderBottom: "2px solid"}}}>Education</div>
                            <div className="label label-text"  style={{color: this.props.accentColor}}>School:<div style={{color: this.props.textColor}}>Hillsdale College</div></div>
                            <div className="label label-text" style={{color: this.props.accentColor}}>Course: <div style={{color: this.props.textColor}}>Full Stack Web Developement</div></div>
                            <div className="label label-text" style={{color: this.props.accentColor}}>Year Taken: <div style={{color: this.props.textColor}}>05/05/2021</div></div>
                        </div>
                        <div>
                        <div className="section-header label header-text" style={{...{color: this.props.accentColor},...{borderBottom: "2px solid"}}}>Practical Experience</div>
                            <div className="label label-text"  style={{color: this.props.accentColor}}>Here Are The Details About My Experience In The Field:</div>
                            <div className="label label-text"  style={{color: this.props.accentColor}}>Company:<div style={{color: this.props.textColor}}>WeWork</div></div>
                            <div className="label label-text" style={{color: this.props.accentColor}}>Position: <div style={{color: this.props.textColor}}>Senior Full Stack Web Developer</div></div>
                            <div className="label label-text" style={{color: this.props.accentColor}}>Years On The Job: <div style={{color: this.props.textColor}}>5</div></div>
                            <div className="label label-text" style={{color: this.props.accentColor}}>Tasks On The Job: <div style={{color: this.props.textColor}}>-Handling Frontend Architecture -Creating Backend Infrastructure To Handle All Users</div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewDefault