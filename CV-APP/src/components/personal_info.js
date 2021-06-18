import "../styles/personal_details.css"

function PersonalInfo(props){
return(
    <div className="personalDetails">
        <div className='personalHeader'>Personal Details</div>
        <input 
            placeholder='First Name'
            onChange={props.firstNameHandler} 
            value={props.personalDetails.firstName}
        />
        <input 
            placeholder='Second Name'
            onChange={props.secondNameHandler} 
            value={props.personalDetails.secondName}
        />
        <input 
            placeholder='Phone'
            onChange={props.phoneHandler} 
            value={props.personalDetails.phone}
        />
        <input 
            placeholder='Gender'
            onChange={props.genderHandler} 
            value={props.personalDetails.gender}
        />
        <input 
            placeholder='Email Address'
            onChange={props.emailHandler} 
            value={props.personalDetails.email}
        />
        <textarea
            placeholder='Description'
            onChange={props.descriptionHandler} 
            value={props.personalDetails.Description}
        />
    </div>
)
}
export default PersonalInfo
