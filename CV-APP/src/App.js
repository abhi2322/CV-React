import React, { Component } from 'react';
import EditMode from './components/edit_mode';
import PreviewMode from './components/preview_mode';
import uniqid from "uniqid";
import './styles/app.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      peronalDetails: {
        firstName: "",
        secondName: "",
        phone: "",
        gender: "",
        email: "",
        Description: "",
      },
      educationDetails: [],
      workExperiance:[],
      editMode: true
    }
  }
  edit = () => {
    this.setState({
      editMode: true
    })
  }
  preview = () => {
    this.setState({
      editMode: false
    })
    console.log(this.state.peronalDetails)
    console.log(this.state.educationDetails)
    console.log(this.state.workExperiance)
  }
  firstNameHandler(ev) {
    const personal = this.state.peronalDetails;
    personal.firstName = ev.target.value;
    this.setState({
      peronalDetails: personal
    })
  }
  secondNameHandler(ev) {
    const personal = this.state.peronalDetails;
    personal.secondName = ev.target.value;
    this.setState({
      peronalDetails: personal
    })
  }
  phoneHandler(ev) {
    const personal = this.state.peronalDetails;
    personal.phone = ev.target.value;
    this.setState({
      peronalDetails: personal
    })
  }
  genderHandler(ev) {
    const personal = this.state.peronalDetails;
    personal.gender = ev.target.value;
    this.setState({
      peronalDetails: personal
    })
  }
  emailHandler(ev) {
    const personal = this.state.peronalDetails;
    personal.email = ev.target.value;
    this.setState({
      peronalDetails: personal
    })
  }
  descriptionHandler(ev) {
    const personal = this.state.peronalDetails;
    personal.Description = ev.target.value;
    this.setState({
      peronalDetails: personal
    })
  }
  schoolHandler(ev, id) {
    let len = this.state.educationDetails.length
    const education = this.state.educationDetails
    for (let i = 0; i < len; i++) {
      if (education[i].id === id) {
        education[i].school = ev.target.value;
        this.setState({
          educationDetails: education
        })
      }
    }
  }
  degreeHandler(ev, id) {
    let len = this.state.educationDetails.length
    const education = this.state.educationDetails
    for (let i = 0; i < len; i++) {
      if (education[i].id === id) {
        education[i].Degree = ev.target.value;
        this.setState({
          educationDetails: education
        })
      }
    }
  }
  durationHandler(ev, id) {
    let len = this.state.educationDetails.length
    const education = this.state.educationDetails
    for (let i = 0; i < len; i++) {
      if (education[i].id === id) {
        education[i].duration = ev.target.value;
        this.setState({
          educationDetails: education
        })
      }
    }
  }

  companyHandler(ev, id) {
    const work = this.state.workExperiance
    let len = work.length
    for (let i = 0; i < len; i++) {
      if (work[i].id === id) {
        work[i].company = ev.target.value;
        this.setState({
          workExperiance: work
        })
      }
    }
  }
  titleHandler(ev, id) {
    const work = this.state.workExperiance
    let len = work.length
    for (let i = 0; i < len; i++) {
      if (work[i].id === id) {
        work[i].Title = ev.target.value;
        this.setState({
          workExperiance: work
        })
      }
    }
  }
  companyDurationHandler(ev, id) {
    const work = this.state.workExperiance
    let len = work.length
    for (let i = 0; i < len; i++) {
      if (work[i].id === id) {
        work[i].duration = ev.target.value;
        this.setState({
          workExperiance: work
        })
      }
    }
  }
  endDateHandler(ev, id) {
    const work = this.state.workExperiance
    let len = work.length
    for (let i = 0; i < len; i++) {
      if (work[i].id === id) {
        work[i].EndDate = ev.target.value;
        this.setState({
          workExperiance: work
        })
      }
    }
  }
  educationHandler() {
    const education = {
      id: uniqid(),
      school: "",
      Degree: "",
      duration: "",
    }
    this.setState({
      educationDetails: this.state.educationDetails.concat(education)
    })
  }
  workHandler(){
    const work={
        id:uniqid(),
        company: "",
        Title: "",
        duration: "",
        EndDate: ""
    }
    this.setState({
      workExperiance:this.state.workExperiance.concat(work)
    })
  }

  render() {
    let mode = null
    if (this.state.editMode) {
        mode = <EditMode
                  personalDetails={this.state.peronalDetails}
                  educationDetails={this.state.educationDetails}
                  workExperiance={this.state.workExperiance}
                  educationHandler={()=>{this.educationHandler()}}
                  workHandler={()=>{this.workHandler()}}
                  firstNameHandler={(ev)=>{this.firstNameHandler(ev)}}
                  secondNameHandler={(ev)=>{this.secondNameHandler(ev)}}
                  phoneHandler={(ev)=>{this.phoneHandler(ev)}}
                  genderHandler={(ev)=>{this.genderHandler(ev)}}
                  emailHandler={(ev)=>{this.emailHandler(ev)}}
                  descriptionHandler={(ev)=>{this.descriptionHandler(ev)}}
                  schoolHandler={(ev,id)=>{this.schoolHandler(ev,id)}}
                  degreeHandler={(ev,id)=>{this.degreeHandler(ev,id)}}
                  durationHandler={(ev,id)=>{this.durationHandler(ev,id)}}
                  companyHandler={(ev,id)=>{this.companyHandler(ev,id)}}
                  titleHandler={(ev,id)=>{this.titleHandler(ev,id)}}
                  companyDurationHandler={(ev,id)=>{this.companyDurationHandler(ev,id)}}
                  endDateHandler={(ev,id)=>{this.endDateHandler(ev,id)}}
               />
    } 
    else 
    {
      mode = <PreviewMode />
    }
    return (
      <div className="cvContainer">
        <button onClick={this.edit} className='btnEdit'>Edit Mode</button>
        <button onClick={this.preview} className='btnPreview'>Preview Mode</button>
        <div>{mode}</div>
      </div>
    )
  }
}


export default App;
