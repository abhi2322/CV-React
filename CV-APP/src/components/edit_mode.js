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
        />
        <h4>Education Details</h4>
        <button onClick={this.props.educationHandler}>ADD</button>
        {this.props.educationDetails.map((items)=>{
            const id=items.id
            return(
                <EducationDetails 
                    key={id}
                    educationDetails={items}
                    schoolHandler={(ev)=>{this.props.schoolHandler(ev,id)}}
                    degreeHandler={(ev)=>{this.props.degreeHandler(ev,id)}}
                    durationHandler={(ev)=>{this.props.durationHandler(ev,id)}}
                />
            )
        })}
        <h4>Work Experiance</h4>
        <button onClick={this.props.workHandler}>ADD</button>
        {
            this.props.workExperiance.map((work)=>{
                const id=work.id
                return(
                    <WorkExperianceComponent
                        key={id}
                        workExperiance={work}
                        companyHandler={(ev)=>{this.props.companyHandler(ev,id)}}
                        titleHandler={(ev)=>{this.props.titleHandler(ev,id)}}
                        companyDurationHandler={(ev)=>{this.props.companyDurationHandler(ev,id)}}
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
