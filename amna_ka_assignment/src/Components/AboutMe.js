import React, {Component} from 'react';
import pic from '../profile-pic.jpg';
import './AboutMe.css';


class AboutMe extends Component{ 
    render(){
        return(
        <div className="container" id='about'>
            <img src={pic} className="profile-img" alt='My pic'></img>
            <h2 style={
                {
                    fontSize:'40px',
                    textAlign:'center',
                    marginTop:'40px',
                    padding:'30px',
                    alignItems:'center',
                    justifyContent:'center',
                    color:'#fff',
                }
            } >About Me</h2>
            <p style={
                {
                alignItems:'center',
                justifyContent:'center',
                textAlign:'center',
                margin: '10px',
                fontWeight: '100',
                fontSize:'16px',
                lineHeight: '30px', 
                color: '#fff',
                }
            } >I'm a Third Year Software Engineering student at Bahria University Karachi Campus.<br/> My fellows describe me as A Passionate Learner, a Brilliant Student,<br/> and the one who Love to Lead her group fellows. I prefer smart work to hard work.<br/>  I'm able to handle multiple tasks on daily basis and work under the pressure of deadlines. <br></br> I meet my deadlines and am very conscious of my commitments. <br/> I have experience working as part of a team and individually. <br></br> My goal is to make my country proud of me. </p>
        </div>
        
        );
    }
}
export default AboutMe;