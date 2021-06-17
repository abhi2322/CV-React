import React,{Component} from 'react';
import EditMode from './components/edit_mode';
import PreviewMode from './components/preview_mode';
import uniqid from "uniqid";

class App extends Component{
  constructor(){
    super();
    this.state={
      peronalDetails:{
        firstName:"",
        secondName:"",
        phone:"",
        gender:"",
        email:"",
        Description:"",
      },
      educationDetails:[],
      workExperiance:{
        company:"",
        Tile:"",
        duration:"",
        EndDate:""
      },
      editMode:true
    }
  }
 edit=()=>{
   this.setState({
     editMode:true
   })
  }
  preview=()=>{
    this.setState({
      editMode:false
    })
    console.log(this.state.peronalDetails)
    console.log(this.state.educationDetails)
  }
  firstNameHandler(ev){
    const personal=this.state.peronalDetails;
    personal.firstName=ev.target.value;
    this.setState({
      peronalDetails:personal
    })
  }
  secondNameHandler(ev){
    const personal=this.state.peronalDetails;
    personal.secondName=ev.target.value;
    this.setState({
      peronalDetails:personal
    })
  }
  phoneHandler(ev){
    const personal=this.state.peronalDetails;
    personal.phone=ev.target.value;
    this.setState({
      peronalDetails:personal
    })
  }
  genderHandler(ev){
    const personal=this.state.peronalDetails;
    personal.gender=ev.target.value;
    this.setState({
      peronalDetails:personal
    })
  }
  emailHandler(ev){
    const personal=this.state.peronalDetails;
    personal.email=ev.target.value;
    this.setState({
      peronalDetails:personal
    })
  }
  descriptionHandler(ev){
    const personal=this.state.peronalDetails;
    personal.Description=ev.target.value;
    this.setState({
      peronalDetails:personal
    })
  }
  schoolHandler(ev,id){
    let len=this.state.educationDetails.length
    const education=this.state.educationDetails
      for(let i=0;i<len;i++){
        if(education[i].id===id){
        education[i].school=ev.target.value;
        this.setState({
          educationDetails:education
        })
      }
    }
  }
  degreeHandler(ev,id){
    let len=this.state.educationDetails.length
    const education=this.state.educationDetails
      for(let i=0;i<len;i++){
        if(education[i].id===id){
        education[i].Degree=ev.target.value;
        this.setState({
          educationDetails:education
        })
      }
    }
  }
  durationHandler(ev,id){
    let len=this.state.educationDetails.length
    const education=this.state.educationDetails
      for(let i=0;i<len;i++){
        if(education[i].id===id){
        education[i].duration=ev.target.value;
        this.setState({
          educationDetails:education
        })
      }
    }
  }

  educationHAndler(){
    const education={
      id:uniqid(),
      school:"",
      Degree:"",
      duration:"",
    }
    this.setState({
      educationDetails:this.state.educationDetails.concat(education)
    })
  }
 
  render(){
    let mode=null
    if(this.state.editMode){
      mode=<EditMode
              educationHandler={()=>{this.educationHAndler()}}
              personalDetails={this.state.peronalDetails}
              educationDetails={this.state.educationDetails}
              firstNameHandler={(ev)=>{this.firstNameHandler(ev)}}
              secondNameHandler={(ev)=>{this.secondNameHandler(ev)}}
              phoneHandler={(ev)=>{this.phoneHandler(ev)}}
              genderHandler={(ev)=>{this.genderHandler(ev)}}
              emailHandler={(ev)=>{this.emailHandler(ev)}}
              descriptionHandler={(ev)=>{this.descriptionHandler(ev)}}
              schoolHandler={(ev,id)=>{this.schoolHandler(ev,id)}}
              degreeHandler={(ev,id)=>{this.degreeHandler(ev,id)}}
              durationHandler={(ev,id)=>{this.durationHandler(ev,id)}}
          />
    }else{
      mode=<PreviewMode />
    }
    return(
      <div>
      <button onClick={this.edit}>Edit</button>
      <button onClick={this.preview}>preview</button>
        <div>{mode}</div>
      </div>
    )
  }
}


export default App;
