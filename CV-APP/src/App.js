import React,{Component} from 'react';
import EditMode from './components/edit_mode';
import PreviewMode from './components/preview_mode';

class App extends Component{
  constructor(){
    super();
    this.state={
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
  }
 
  render(){
    let mode=null
    if(this.state.editMode){
      mode=<EditMode />
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
