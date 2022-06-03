import logo from './logo.svg';
import React, { Component } from 'react';
import {Header,SubHeader} from './components/header';
import Form from './components/form';
import UserPreview from './components/userPreview';
import PreviewDefault from './components/previewDefault';



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
      practicalExperience: "No Previous Practical Experience",
      experience: false,
      company: undefined,
      position: undefined,
      experienceYears: undefined,
      jobTasks: undefined,
      //----------miscellaneous
      accentColor: "#ED7E7E",
      cvTextColor: "#fec700",
      unfilled: "label hide",
      submit: false, //change to true if clicked and false if incomplete when clicked
      formSubmitted: false,
      makeMineSelected: 'form-container hide', //remove to hide when done
      previewSelected: 'preview-container',
      preview: "menu-button preview label selected",
      makeMine: "menu-button make-yours label",
      rendered: false,
      previewCV :undefined
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
    this.capitalize =this.capitalize.bind(this)
    this.checkInput = this.checkInput.bind(this)
    this.submitClick = this.submitClick.bind(this)
    this.previewClick = this.previewClick.bind(this)
    this.makeMineClick = this.makeMineClick.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.changeTextColor = this.changeTextColor.bind(this)
    this.checkRender = this.checkRender.bind(this)
  }
  //input functions here------>
  nameChange(event){
    this.setState({
      name: this.capitalize(event.target.value)
    })
  }
  changeGender(event){
    this.setState({
      gender: this.capitalize(event.target.value)
    })
  }
  changeEmail(event){
    this.setState({
      email: this.capitalize(event.target.value)
    })
  }
  changeTelephone(event){
    this.setState({
      telephone: event.target.value
    })
  }
  changeSocialProfile(event){
    this.setState({
      socialProfile: event.target.value.toLowerCase()
    })
  }
  //ed input
  changeinstitution(event){
    this.setState({
      institution: this.capitalize(event.target.value)
    })
  }
  changeCourse(event){
    this.setState({
      course: this.capitalize(event.target.value)
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
      company: this.capitalize(event.target.value)
    })
  }
  changePosition(event){
    this.setState({
      position: this.capitalize(event.target.value)
    })
  }
  changeExperienceYears(event){
    this.setState({
      experienceYears: this.capitalize(event.target.value)
    })
  }
  changeJobTasks(event){
    this.setState({
      jobTasks: this.capitalize(event.target.value)
    })
  }
 //----------------------------
 capitalize(input){  
    var words = input.split(' ');  
    var CapitalizedWords = [];  
    words.forEach(element => {  
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
    });  
    return CapitalizedWords.join(' ');  
  }
  checkInput(){ //checks if all required fields have been filled / no form validation is implemented yet
    const item=this.state
    if(item.name==undefined || item.gender==undefined || item.email==undefined || item.socialProfile==undefined || item.institution==undefined || item.course==undefined || item.year==undefined){
      return false
    }
    else{
      if(this.state.company != undefined){
        this.setState({
          practicalExperience: "Here Are The Details About My Experience In The Field",
          experience: true
        })
      }
      return true
    }
  }
  submitClick(){// checks form on submit and does suitable actions 
    if(this.state.submit == false){
      if(this.checkInput() == false){
        this.setState({
          unfilled:  "label warning"
        })
        window.scrollTo(0, 0)
      }
      if(this.checkInput() == true){
        this.setState({ formSubmitted: true }, () => {
          this.previewClick()
        }); 
      }
    }
  }
  changeColor(event){ // both change colors are used to apply colors to the preview form
    this.setState({
      accentColor: event.target.value
    })
  }
  changeTextColor(event){
    this.setState({
      cvTextColor: event.target.value
    })
  }
  previewClick(){// used to switch tabs along with the makeMineCLick Function
    if(this.checkInput() == true && this.state.formSubmitted == true){
      this.setState({
        makeMineSelected: 'form-container hide',
        previewSelected: 'preview-container',
        preview: "menu-button preview label selected",
        makeMine: "menu-button make-yours label ",
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
  checkRender(){
    if(this.state.rendered==false){
      this.setState({
        rendered: true,
        previewCV: <PreviewDefault textColor={this.state.cvTextColor} accentColor={this.state.accentColor}/>
      })
    }
  }
  componentDidMount() { //renders default preview form on page load
    window.addEventListener('load', this.checkRender());
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
