import logo from './logo.svg';
import React, { Component } from 'react';
import {Header,SubHeader} from './components/header';
import Form from './components/form';
import UserPreview from './userPreview';
import PreviewDefault from './previewDefault';



class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name: undefined,
      gender: undefined,
      email: undefined,
      telephone: undefined,
      socialProfile: undefined,
      //education input
      institution: undefined,
      course: undefined,
      year: undefined,
      //practical experience input
      practicalExpereince: "No Previous Practical Experience",
      company: undefined,
      position: undefined,
      experienceYears: undefined,
      jobTasks: undefined,
      //----------miscellaneous
      accentColor: "#3476b0",
      cvTextColor: "#fec700",
      unfilled: "label hide",
      submit: false, //change to true if clicked and false if incomplete when clicked
      formSubmitted: false,
      makeMineSelected: 'form-container hide', //remove to hide when done
      previewSelected: 'preview-container',
      preview: "menu-button preview label selected",
      makeMine: "menu-button make-yours label",
      previewCV: <PreviewDefault textColor={this.cvTextColor} accentColor={this.accentColor}/>
    }
    this.changeGender = this.changeGender.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeTelephone = this.changeTelephone.bind(this)
    this.changeSocialProfile = this.changeSocialProfile.bind(this)
    this.changeinstitution = this.changeinstitution.bind(this)
    this.changeCourse = this.changeCourse.bind(this)
    this.changeYear = this.changeYear.bind(this)
    this.changeCompany = this.changeCompany.bind(this)
    this.changePosition = this.changePosition.bind(this)
    this.changeExperienceYears = this.changeExperienceYears.bind(this)
    this.changeJobTasks = this.changeJobTasks.bind(this)
    this.checkInput = this.checkInput.bind(this)
    this.submitClick = this.submitClick.bind(this)
    this.previewClick = this.previewClick.bind(this)
    this.makeMineClick = this.makeMineClick.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.changeTextColor = this.changeTextColor.bind(this)
  }
  //input functions here------>
  nameChange(event){
    this.setState({
      name: event.target.value
    })
  }
  changeGender(event){
    this.setState({
      gender: event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email: event.target.value
    })
  }
  changeTelephone(event){
    this.setState({
      telephone: event.target.value
    })
  }
  changeSocialProfile(event){
    this.setState({
      socialProfile: event.target.value
    })
  }
  //ed input
  changeinstitution(event){
    this.setState({
      institution: event.target.value
    })
  }
  changeCourse(event){
    this.setState({
      course: event.target.value
    })
  }
  changeYear(event){
    this.setState({
      year: event.target.value
    })
  }
  //experience input
  changeCompany(event){
    this.setState({
      company: event.target.value
    })
  }
  changePosition(event){
    this.setState({
      position: event.target.value
    })
  }
  changeExperienceYears(event){
    this.setState({
      experienceYears: event.target.value
    })
  }
  changeJobTasks(event){
    this.setState({
      jobTasks: event.target.value
    })
  }
 //----------------------------
  checkInput(){
    const item=this.state
    if(item.name==undefined || item.gender || item.email==undefined || item.socialProfile==undefined || item.institution==undefined || item.course==undefined || item.year==undefined){
      console.log(item.name,item.email,item.socialProfile,item.institution,item.course,item.year,item.gender)
      return false
    }
    else{
      if(this.state.company != undefined){
        this.setState({
          practicalExpereince: "Here Are My Details About My Experience In The Field"
        })
      }
      return true
    }
  }
  submitClick(){
    if(this.state.submit == false){
      if(this.checkInput() == false){
        this.setState({
          unfilled:  "label warning"
        })
        window.scrollTo(0, 0)
        this.previewClick()
      }
      else if(this.checkInput() == true){
        this.setState({
          formSubmitted: true
        })
        this.previewClick()
      }
    }
  }
  changeColor(event){
    this.setState({
      accentColor: event.target.value
    })
  }
  changeTextColor(event){
    this.setState({
      cvTextColor: event.target.value
    })
  }
  previewClick(){
    if(this.checkInput==true && this.state.formSubmitted == true){
      this.setState({
        previewCV: <UserPreview states={this.state} />
      })
    }
    else{
      this.setState({
        makeMineSelected: 'form-container hide',
        previewSelected: 'preview-container',
        preview: "menu-button preview label selected",
        makeMine: "menu-button make-yours label ",
        previewCV: <PreviewDefault textColor={this.state.cvTextColor} accentColor={this.state.accentColor}/>
      })
    }
  }
  makeMineClick(){
    this.setState({
      makeMineSelected: 'form-container',
      previewSelected: 'preview-container hide',
      preview: "menu-button preview label ",
      makeMine: "menu-button make-yours label selected"
    })
  }
  render(){
    return(
      <div className='container'>
        <Header headerTitle="Make My CV"/>
        <SubHeader states={this.state} previewClick={this.previewClick} makeMineClick={this.makeMineClick} preview={this.state.preview} makeMine={this.state.makeMine}/>
        <div className={this.state.previewSelected}>
          {this.state.previewCV}
        </div>
        <div className={this.state.makeMineSelected}>
          <Form accentColor={this.state.accentColor} textColor={this.state.cvTextColor} functions={this} filled={this.state.unfilled}/>
        </div>
      </div>
    )
  }
}


export default App;
