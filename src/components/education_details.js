import '../styles/education_details.css'
function EducationDetails(props){
    return(
        <div className='educationDetails'>
            <h5>Education Experiance {props.counter}</h5>
            <input 
                placeholder="School/Intitution name"
                value={props.educationDetails.school} 
                onChange={props.schoolHandler}
            />
            <input 
                placeholder="Degree"
                value={props.educationDetails.Degree} 
                onChange={props.degreeHandler}
            />
            <input 
                placeholder="Start Date"
                value={props.educationDetails.StartDate} 
                onChange={props.schoolStartHandler}
            />
            <input 
                placeholder="End Date"
                value={props.educationDetails.EndDate} 
                onChange={props.schoolEndHandler}
            />
        </div>
    )

}
export default EducationDetails