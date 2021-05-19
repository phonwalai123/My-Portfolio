import React,{Component} from 'react'
import profilepic from '../img/profile.jpg';

class About extends Component{
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic"/>
                <h3>Hi,I'm Phonwalai</h3>
                <p>I am a student in computer engineering.I am interested in Front-end and Back-end development.
                   I am a highly organized and hard-working individual looking to secure a responsible career opportunity in a reputable organization to gain practical experience, expand my learnings, knowledge and skills which is willing to make use of my training and interpersonal skills to achieve company goals.
                </p>
            </div>

        );
    }
}

export default About;