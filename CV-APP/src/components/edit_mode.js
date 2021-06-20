import React,{Component} from 'react';
import PersonalInfo from './personal_info';
import EducationDetails from './education_details';
import WorkExperianceComponent from './work_experiance';

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
            linkedinHandler={(ev)=>{this.props.linkedinHandler(ev)}}
            twitterHandler={(ev)=>{this.props.twitterHandler(ev)}}
        />
        <h4>Education Details</h4>
        <button onClick={this.props.educationHandler}>ADD</button>
        {this.props.educationDetails.map((items,step)=>{
            const id=items.id
            return(
                <EducationDetails 
                    key={id}
                    counter={step+1}
                    educationDetails={items}
                    schoolHandler={(ev)=>{this.props.schoolHandler(ev,id)}}
                    degreeHandler={(ev)=>{this.props.degreeHandler(ev,id)}}
                    schoolStartHandler={(ev)=>{this.props.schoolStartHandler(ev,id)}}
                    schoolEndHandler={(ev)=>{this.props.schoolEndHandler(ev,id)}}
                />
            )
        })}
        <h4>Work Experiance</h4>
        <button onClick={this.props.workHandler}>ADD</button>
        {   
            this.props.workExperiance.map((work,step)=>{
                const id=work.id
                return(
                    <WorkExperianceComponent
                        counter={step+1}
                        key={id}
                        workExperiance={work}
                        companyHandler={(ev)=>{this.props.companyHandler(ev,id)}}
                        titleHandler={(ev)=>{this.props.titleHandler(ev,id)}}
                        companyStartHandler={(ev)=>{this.props.companyStartHandler(ev,id)}}
                        endDateHandler={(ev)=>{this.props.endDateHandler(ev,id)}}
                    />
                )
            })
        }
        </div>
        
      )
    }
}

export default EditMode
