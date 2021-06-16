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
    console.log(this.state.peronalDetails.firstName)
  }
  firstNameHanler(ev){
    const personal=this.state.peronalDetails;
    personal.firstName=ev.target.value;
    this.setState({
      peronalDetails:personal
    })
  }
 
  render(){
    let mode=null
    if(this.state.editMode){
      mode=<EditMode
              firstNameHandler={(ev)=>{this.firstNameHanler(ev)}}
      
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
