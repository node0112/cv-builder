import React, { Component } from "react";


class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="header">
                <div className="logo">{this.props.headerTitle}</div>
            </div>
        )
    }
}

class SubHeader extends Component{
    constructor(props){
        super(props)
        this.state={
            buttons: [{id: 1, clicked: true}]

        }
    }

    render(){
        return(
            <div className="sub-header">
                <div className="menu-button preview label">Preview</div>
                <div className="line">|</div>
                <div className="menu-button Make Yours label selected">Make Yours</div>
            </div>
        )
    }
}

export  {Header,SubHeader}