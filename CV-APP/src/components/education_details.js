function EducationDetails(props){
    return(
        <div>
            <label>School/Intitution name</label>
            <input value={props.educationDetails.school} onChange={props.schoolHandler}></input><br/>
            <label>Degree</label>
            <input value={props.educationDetails.Degree} onChange={props.degreeHandler}></input><br/>
            <label>Duration</label>
            <input value={props.educationDetails.duration} onChange={props.durationHandler}></input>
        </div>
    )

}
export default EducationDetails