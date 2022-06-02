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
                <div className="preview-content">\</div>
            </div>
        )
    }
}

export default UserPreview