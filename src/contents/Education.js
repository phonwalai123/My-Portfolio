import React,{Component} from 'react';
import Widecard from '../components/Widecard';

class Education extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelor of Computer Engineering" where="King Mongkut's Institute of Technology Ladkrabang" from ="Aug 2017" to="Present"/>
                <Widecard title="Science and Mathematics" where="Princess Chulabhorn Science High School Buriram" from ="Aug 2015" to="2017"/>
            </div>
        );
    }
}
export default Education;