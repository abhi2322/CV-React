import React,{Component} from 'react';
import PersonalInfo from './personal_info';
import EducationDetails from './education_details';

class EditMode extends Component{
    
    render(){
      return(
        <div>
        <PersonalInfo 
            personalDetails={this.props.personalDetails}
            firstNameHandler={(ev)=>{this.props.firstNameHandler(ev)}} 
            secondNameHandler={(ev)=>{this.props.secondNameHandler(ev)}}
            phoneHandler={(ev)=>{this.props.phoneHandler(ev)}}
            genderHandler={(ev)=>{this.props.genderHandler(ev)}}
            emailHandler={(ev)=>{this.props.emailHandler(ev)}}
            descriptionHandler={(ev)=>{this.props.descriptionHandler(ev)}}
        />
        <h4>EducationDetails</h4>
        <EducationDetails
            educationDetails={this.props.educationDetails}
            schoolHandler={(ev)=>{this.props.schoolHandler(ev)}}
            degreeHandler={(ev)=>{this.props.degreeHandler(ev)}}
            durationHandler={(ev)=>{this.props.durationHandler(ev)}}
        />
        </div>
        
      )
    }
}

export default EditMode
