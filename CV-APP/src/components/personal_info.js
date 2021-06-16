function PersonalInfo(props){
return(
    <div>
        <label>Name:</label>
        <input onChange={props.firstNameHandler} value={props.personalDetails.firstName}></input>
        <input onChange={props.secondNameHandler} value={props.personalDetails.secondName}></input><br/>
        <label>Phone:</label>
        <input onChange={props.phoneHandler} value={props.personalDetails.phone}></input><br/>
        <label>Gender:</label>
        <input onChange={props.genderHandler} value={props.personalDetails.gender}></input><br/>
        <label>Email:</label>
        <input onChange={props.emailHandler} value={props.personalDetails.email}></input><br/>
        <label>Description:</label>
        <input onChange={props.descriptionHandler} value={props.personalDetails.Description}></input>
    </div>
)
}
export default PersonalInfo
