function WorkExperianceComponent(props){
    return(
        <div>
            <label>Company</label>
            <input 
                value={props.workExperiance.company} 
                onChange={props.companyHandler}
            />
            <br/>
            <label>Title</label>
            <input
                value={props.workExperiance.Title}
                onChange={props.titleHandler}
            />
            <br/>
            <label>Duration</label>
            <input 
                value={props.workExperiance.duration}
                onChange={props.companyDurationHandler} 
            />
            <label>End Date</label>
            <input
                value={props.workExperiance.EndDate}
                onChange={props.endDateHandler}
            />
        </div>
    )
}
export default WorkExperianceComponent