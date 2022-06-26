import React, {Component} from 'react';
import './skills.css';

class Skills extends Component{ 
    render(){
        return(
            <div className="skills" id="skills">
                {/* <div class="inner"> */}
                    <h1 style={{
                        fontWeight:'bold',
                        textAlign:'center',
                        padding:'10px',
                        color:'black',
                        width:'100%',
                    }}>My Skills</h1>
                    <br/>
                    <p>SQL Queries</p>
                    <div className="progress">
                        <div  className="progress-bar" style={{width:'90%',}}>90%</div>
                    </div>
    
                    <p>Java Programming</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:'85%',}}>85%</div>
                    </div>
    
                    <p>Android Studio</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:'80%',}}>80%</div>
                    </div>       
    
                    <p>Website Front End</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:'70%',}}>70%</div>
                    </div>
                {/* </div>     */}
            </div>       
      
        );
    }
}
export default Skills;