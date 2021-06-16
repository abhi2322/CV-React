function PersonalInfo(props){
return(
    <div>
        <label>Name:</label>
        <input onChange={props.firstNameHandler}></input>
        <input onChange={props.secondNameHandler}></input><br/>
        <label>Phone:</label>
        <input onChange={props.phoneHandler}></input><br/>
        <label>Gender:</label>
        <input onChange={props.genderHandler}></input><br/>
        <label>Email:</label>
        <input onChange={props.emailHandler}></input><br/>
        <label>Description:</label>
        <input onChange={props.descriptionHandler}></input>
    </div>
)
}
export default PersonalInfo
