// render this by default when inputCheck == false
import React, { Component } from "react";
import PersonalDetails from "./components/form components/personal-details";

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
                            <li><i class="material-icons">link</i><a className="label sub-text">+1 781-844-2765</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewDefault