import logo from './logo.svg';
import React, { Component } from 'react';
import {Header,SubHeader} from './components/header';
import Form from './components/form';



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
      schoolName: undefined,
      course: undefined,
      year: undefined,
      //practical experience input
      company: undefined,
      position: undefined,
      experienceYears: undefined,
      jobTasks: undefined,
      //----------miscellaneous
      unfilled: "label hide",
      submit: false, //change to true if clicked and false if incomplete when clicked
      formSubmitted: false
    }
    this.changeGender = this.changeGender.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeTelephone = this.changeTelephone.bind(this)
    this.changeSocialProfile = this.changeSocialProfile.bind(this)
    this.changeSchoolName = this.changeSchoolName.bind(this)
    this.changeCourse = this.changeCourse.bind(this)
    this.changeYear = this.changeYear.bind(this)
    this.changeCompany = this.changeCompany.bind(this)
    this.changePosition = this.changePosition.bind(this)
    this.changeExperienceYears = this.changeExperienceYears.bind(this)
    this.changeJobTasks = this.changeJobTasks.bind(this)
    this.checkInput = this.checkInput.bind(this)
    this.submitClick = this.submitClick.bind(this)
    this.submitForm = this.submitForm.bind(this)
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
  changeSchoolName(event){
    this.setState({
      schoolName: event.target.value
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
    return false
  }
  submitClick(){
    if(this.state.submit==false){
      this.setState({
        submit: true
      })
      console.log("hi")
      if(this.checkInput() == false){
        this.setState({
          unfilled:  "label warning"
        })
        console.log("hi")
      }
        
    }
    if(this.state.submit == true && this.state.formSubmitted== false){
      if(this.checkInput == true){
      this.setState({
        unfilled:  "label warning"
      })}
    }
  }

  submitForm(){
    //make formsubit true and switch over to preview
  }
  render(){
    return(
      <div className='container'>
        <Header headerTitle="Make My CV"/>
        <SubHeader />
        <div className='form-container'>
          <Form nameChange={this.nameChange} changeGender={this.changeGender} functions={this} filled={this.state.unfilled}/>
        </div>
      </div>
    )
  }
}



export default App;
