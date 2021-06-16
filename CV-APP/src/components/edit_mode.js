import React,{Component} from 'react';
import PersonalInfo from './personal_info';

class EditMode extends Component{
    render(){
      return(
        <div>
        <PersonalInfo 
        firstNameHandler={(ev)=>{this.props.firstNameHandler(ev)}} 
        secondNameHandler={(ev)=>{this.props.secondNameHandler(ev)}}
        phoneHandler={(ev)=>{this.props.phoneHandler(ev)}}
        genderHandler={(ev)=>{this.props.genderHandler(ev)}}
        emailHandler={(ev)=>{this.props.emailHandler(ev)}}
        descriptionHandler={(ev)=>{this.props.descriptionHandler(ev)}}
        />
        </div>
      )
    }
}

export default EditMode
