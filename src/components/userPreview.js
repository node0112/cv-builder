// render this when user has submitted
import React, { Component } from "react";

class  UserPreview extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const values=this.props.states
        return(
            <div className="preview-form">
            <div className="preview-content" style={{color: values.cvTextColor}}>
                <div className="left-content" style={{backgroundColor: values.accentColor}}>
                    <div className="preview-text label">{values.gender} {values.name}</div>
                    <ul>
                        <li><i class="material-icons">email</i><div className="label sub-text">{values.email}</div></li>
                        <li><i class="material-icons">phone</i><div className="label sub-text">{values.telephone}</div></li>
                        <li><i class="material-icons">link</i><a className="label sub-text" target={"blank"} href={values.socialProfile} style={{color: values.cvTextColor}}>Social</a></li>
                    </ul>
                </div>
                <div className="right-content">
                    <div>
                        <div className="section-header label header-text" style={{...{color: values.accentColor},...{borderBottom: "2px solid"}}}>Education</div>
                        <div className="label label-text"  style={{color: values.accentColor}}>Institution:<div style={{color: values.cvTextColor}}>{values.institution}</div></div>
                        <div className="label label-text" style={{color: values.accentColor}}>Course: <div style={{color: values.cvTextColor}}>{values.course}</div></div>
                        <div className="label label-text" style={{color: values.accentColor}}>Year Taken: <div style={{color: values.cvTextColor}}>{values.year}</div></div>
                    </div>
                    <div>
                        <div className="section-header label header-text" >Practical Experience</div>
                        <div className="label label-text"  style={{color: values.accentColor}}>{values.practicalExperience}</div>
                        {values.experience ? 
                        <div>
                            <div className="label label-text"  style={{color: values.accentColor}}>Company:<div style={{color: values.cvTextColor}}>{values.company}</div></div>
                            <div className="label label-text" style={{color: values.accentColor}}>Position: <div style={{color: values.cvTextColor}}>{values.position}</div></div>
                            <div className="label label-text" style={{color: values.accentColor}}>Years On The Job: <div style={{color: values.cvTextColor}}>{values.experienceYear}</div></div>
                            <div className="label label-text" style={{color: values.accentColor}}>Tasks On The Job: <div style={{color: values.cvTextColor}}>{values.jobTasks}</div></div>
                        </div>
                        : null
                            }
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default UserPreview