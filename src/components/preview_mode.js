import React,{Component} from 'react';
import '../styles/preview_mode.css'
class PreviewMode extends Component{
    render(){
        return(
            <div>
            <div className="resume">
            <div className="resume_left">
                <div className="resume_profile">
                <img src="https://i.imgur.com/eCijV.png" alt="profile_pic" />
                </div>
                <div className="resume_content">
                <div className="resume_item resume_info">
                    <div className="title">
                    <p className="bold">{this.props.personalDetails.firstName} {this.props.personalDetails.secondName}</p>
                    </div>
                    <ul>
                    <li>
                        <div className="icon">
                        <i className="fas fa-venus-mars"></i>
                        </div>
                        <div className="data">
                        {this.props.personalDetails.gender}
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <i className="fas fa-map-signs"></i>
                        </div>
                        <div className="data">
                        21 Street, Texas <br /> USA
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className="data">
                        {this.props.personalDetails.phone}
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <i className="fas fa-envelope"></i>
                        </div>
                        <div className="data">
                        {this.props.personalDetails.email}
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="resume_item resume_social">
                    <div className="title">
                    <p className="bold">Social</p>
                    </div>
                    <ul>
                    <li>
                        <div className="icon">
                        <i className="fab fa-twitter-square"></i>
                        </div>
                        <div className="data">
                        <p className="semi-bold">Twitter</p>
                        <p>{this.props.personalDetails.twitter}</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <i className="fab fa-linkedin"></i>
                        </div>
                        <div className="data">
                        <p className="semi-bold">Linkedin</p>
                        <p>{this.props.personalDetails.linkedin}</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="resume_right">
                <div className="resume_item resume_about">
                    <div className="title">
                    <p className="bold">About us</p>
                    </div>
                    <p>{this.props.personalDetails.Description}</p>
                </div>
                <div className="resume_item resume_work">
                    <div className="title">
                    <p className="bold">Work Experience</p>
                    </div>
                    <ul>
                    {this.props.workExperiance.map((work)=>{
                        return(
                            <li>
                                <div className="date">{work.StartDate}-{work.EndDate}</div> 
                                <div className="info">
                                    <p className="semi-bold">{work.Title}</p> 
                                    <p>{work.company}</p>
                                </div>
                            </li>
                              )
                    })}
                    </ul>
                </div>
                <div className="resume_item resume_education">
                <div className="title">
                    <p className="bold">Education</p>
                    </div>
                <ul>
                    {this.props.educationDetails.map((data)=>{
                        return(
                            <li>
                                <div className="date">{data.StartDate}-{data.EndDate}</div> 
                                <div className="info">
                                    <p className="semi-bold">{data.school}</p> 
                                    <p>{data.Degree}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                </div>
                <div className="resume_item resume_hobby">
                <div className="title">
                    <p className="bold">Hobby</p>
                    </div>
                <ul>
                    <li><i className="fas fa-book"></i></li>
                    <li><i className="fas fa-gamepad"></i></li>
                    <li><i className="fas fa-music"></i></li>
                    <li><i className="fab fa-pagelines"></i></li>
                </ul>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default PreviewMode
