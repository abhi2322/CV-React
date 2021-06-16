import React,{Component} from 'react';
import EditMode from './components/edit_mode';
import PreviewMode from './components/preview_mode';

class App extends Component{
  constructor(){
    super();
    this.state={
      peronalDetails:{
        firstName:"",
        lastNAme:"",
        phone:"",
        gender:"",
        email:"",
        Description:"",
      },
      educationDetails:{
        school:"",
        Degree:"",
        duration:"",
      },
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
  schoolHandler(ev){
    const education=this.state.educationDetails
    education.school=ev.target.value;
    this.setState({
      educationDetails:education
    })
  }
  degreeHandler(ev){
    const education=this.state.educationDetails
    education.Degree=ev.target.value;
    this.setState({
      educationDetails:education
    })
  }
  durationHandler(ev){
    const education=this.state.educationDetails
    education.duration=ev.target.value;
    this.setState({
      educationDetails:education
    })
  }
  
 
  render(){
    let mode=null
    if(this.state.editMode){
      mode=<EditMode
              personalDetails={this.state.peronalDetails}
              educationDetails={this.state.educationDetails}
              firstNameHandler={(ev)=>{this.firstNameHandler(ev)}}
              secondNameHandler={(ev)=>{this.secondNameHandler(ev)}}
              phoneHandler={(ev)=>{this.phoneHandler(ev)}}
              genderHandler={(ev)=>{this.genderHandler(ev)}}
              emailHandler={(ev)=>{this.emailHandler(ev)}}
              descriptionHandler={(ev)=>{this.descriptionHandler(ev)}}
              schoolHandler={(ev)=>{this.schoolHandler(ev)}}
              degreeHandler={(ev)=>{this.degreeHandler(ev)}}
              durationHandler={(ev)=>{this.durationHandler(ev)}}
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
