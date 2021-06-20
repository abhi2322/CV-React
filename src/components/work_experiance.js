import "../styles/work_experiance.css"

function WorkExperianceComponent(props){
    return(
        <div className="workExperiance">
            <h4>Work Experiance {props.counter}</h4>
            <input 
                placeholder="Company"
                value={props.workExperiance.company} 
                onChange={props.companyHandler}
            />
            <input
                placeholder="Title"
                value={props.workExperiance.Title}
                onChange={props.titleHandler}
            />
            <input 
                placeholder="Start Date"
                value={props.workExperiance.StartDate}
                onChange={props.companyStartHandler} 
            />
            <input
                placeholder="End Date"
                value={props.workExperiance.EndDate}
                onChange={props.endDateHandler}
            />
        </div>
    )
}
export default WorkExperianceComponent