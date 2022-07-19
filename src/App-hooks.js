import { useEffect, useState } from "react"
import React from "react"
import {Header,SubHeader} from './components/header';
import Form from './components/form';
import UserPreview from './components/userPreview';
import PreviewDefault from './components/previewDefault';



const App = ()=>{
    const [name,nameChange]=useState(undefined)
    const[gender,changeGender]=useState(undefined)
    const[email,changeEmail]=useState(undefined)
    const[telephone,changeTelephone]=useState(undefined)
    const[socialProfile,changeSocialProfile]=useState(undefined)
    //education input 
    const[institution,changeInstitution]=useState(undefined)
    const[course,changeCourse]=useState(undefined)
    const[year,changeYear]=useState(undefined)
    //practical experience input
    const[practicalExperience,setPracticalExperience]=useState("No Previous Practical Experience")
    const[experience,setExperience]=useState(false)
    const[company,changeCompany]=useState(undefined)
    const[position,changePosition]=useState(undefined)
    const[experienceYears,changeExperienceYears]=useState(undefined)
    const[jobTasks,changeJobTasks]=useState(undefined)
    //-------------miscellaneous--------
    const[accentColor,setAccentColor]=useState("#ED7E7E")
    const[cvTextColor,setCvTextColor]=useState("#fec700")
    const[unfilled,setUnfilled]=useState("label hide")
    const[submit]=useState(false)
    const[formSubmitted,setFormSubmitted]=useState(false)
    const[makeMineSelected,setMakeMineSelected]=useState('form-container hide')
    const[previewSelected,setPreviewSelected]=useState('preview-container')
    const[preview,setPreview]=useState("menu-button preview label selected")
    const[makeMine,setMakeMine]=useState("menu-button make-yours label")
    const[rendered,setRendered]=useState(false)
    const[previewCv,setPreviewCv]=useState(undefined)
    const[scrollButton,setScrollButton]=useState(false)


    
    //<----functions here---->
    const capitalize= (input)=>{  
        var words = input.split(' ');  
        var CapitalizedWords = [];  
        words.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
        return CapitalizedWords.join(' ');  
    }
    const checkInput=()=>{ //checks if all required fields have been filled / no form validation is implemented yet
        if(name==undefined || gender==undefined || email==undefined || socialProfile==undefined || institution==undefined || course==undefined || year==undefined){
          return false
        }
        else{
          if(company != undefined){
              setPracticalExperience("Here Are The Details About My Experience In The Field")
              setExperience(true)
          }
          return true
        }
      }

    const submitClick=()=>{// checks form on submit and does suitable actions 
        if(submit == false){
          if(checkInput() == false){
            setUnfilled("label warning")
            window.scrollTo(0, 0)
          }
          if(checkInput() == true){
            setFormSubmitted(true)
            previewClick();
          }
        }
      }
    const changeColor=(event)=>{
        setAccentColor(event.target.value)
      }
    const changeTextColor=(event)=>{
        setCvTextColor(event.target.value)
      }
    const previewClick=()=>{// used to switch tabs along with the makeMineCLick Function
        if(checkInput() == true && formSubmitted == true){

            setMakeMineSelected('form-container hide')
            setPreviewSelected('preview-container')
            setPreview("menu-button preview label selected")
            setMakeMine("menu-button make-yours label ")
            setPreviewCv(<UserPreview   />)
        }
        else{
            setMakeMineSelected('form-container hide')
            setPreviewSelected('preview-container')
            setPreview("menu-button preview label selected")
            setMakeMine("menu-button make-yours label ")
            setPreviewCv(<PreviewDefault textColor={cvTextColor} accentColor={accentColor}/>)
        }
      }
    const makeMineClick=()=>{
            setMakeMineSelected('form-container')
            setPreviewSelected('preview-container hide')
            setPreview("menu-button preview label ")
            setMakeMine("menu-button make-yours label selected")
    }
    const checkRender=()=>{
        if(rendered==false){
            setRendered(true)
            setPreviewCv(<PreviewDefault textColor={cvTextColor} accentColor={accentColor}/>)
        }
      }
    const checkPos=()=>{
      window.addEventListener('scroll',()=>{
        let nav=document.querySelector(".container")
        let navHeight = nav.offsetTop;
        let scrollHeight = window.scrollY;
        if(scrollHeight>navHeight){
          setScrollButton(true)
        }
        else{
          setScrollButton(false)
        }
      });
    }
    useEffect(()=>{
        checkRender()
    },[])
    //<----rendering here------>
    return(
        <div className='container'>
          <Header headerTitle="Make My CV"/>
          <SubHeader name={name} gender={gender} email={email} telephone={telephone} socialProfile={socialProfile} institution={institution} course={course} year={year} practicalExperience={practicalExperience} experience={experience} 
          company={company} position={position} experienceYears={experienceYears} jobTasks={jobTasks} accentColor={accentColor} cvTextColor={cvTextColor} previewClick={previewClick} makeMineClick={makeMineClick} preview={preview} makeMine={makeMine}/>
          <div className={previewSelected}>
            {previewCv}
          </div>
          <div className={makeMineSelected}>
            <Form setaccentColor={setAccentColor} changeColor={changeColor} textColor={cvTextColor} namechange={nameChange} functions={[{changeGender},{changeEmail},{changeSocialProfile},{changeTextColor}]} filled={unfilled}/>
          </div>
          {scrollButton? <button className="scroll-up">ꜛ</button> : null}
        </div>
      )
}

export default App