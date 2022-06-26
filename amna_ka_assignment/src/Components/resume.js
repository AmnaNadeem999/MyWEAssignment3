import React, {Component} from 'react';
import './resume.css';

class Resume extends Component{ 
    render(){
        return(            

   <div className="resume" id="resume">
       <table>
           <tr>
              <td>
                <h3 style={{padding: '20px', color: 'black',}}>My Experiences</h3>
                <ul className="timeline">
                        <li>
                            <h4>2020- Front-End Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque necessitatibus Ipsam.</p>
                            <b>Company</b>- Ibex Ltd. <br/>
                            <b>Duration</b>- 1 year [2020-2021] <br/>
                            <b>Location</b>- Shahrah-e-Faisal Branch <br/>
                        </li>
                        <li>
                            <h4>2021 - Java Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque necessitatibus Ipsam.</p>
                            <b>Company</b>- TechmaSoft Pvt. Ltd. <br/>
                            <b>Duration</b>- 6 Months [March 2021-September 2021] <br/>
                            <b>Location</b>- Shahrah-e-Faisal Branch <br/>
                        </li>
                        <li>
                            <h4>2022 - Database Designer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque necessitatibus Ipsam.</p>
                            <b>Company</b>- Pinxosoft Pvt. Ltd. <br/>
                            <b>Duration</b>- Ongoing [2022] <br/>
                            <b>Location</b>- Shahrah-e-Faisal Branch <br/>
                        </li>
                 </ul>
               </td>
               <td>
                <h3 style={{padding: '20px',color: 'black',}}>My Education</h3>
                <ul className="timeline">'
                        <li>
                            <h4>Bachelors of Software Engineering</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque necessitatibus Ipsam.</p>
                            <b>Institute</b>- Bahria Univeristy Karachi Campus <br/>
                            <b>Duration</b>- 4 year [2019-2023] <br/>
                            <b>Result</b>- 3.9 cgpa <br/>
                        </li>
                        <li>
                            <h4>Intermediate in Pre-Engineering</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque necessitatibus Ipsam.</p>
                            <b>Institute</b>- Bahria College Karsaz <br/>
                            <b>Duration</b>- 2 years [2017-2019] <br/>
                            <b>Result</b>- 74% 837/1100 <br/>
                        </li>
                        
                        <li>
                            <h4>Metric in Computer Science</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque necessitatibus Ipsam.</p>
                            <b>Institute</b>- Bahria Model School EAB Campus <br/>
                            <b>Duration</b>- 2 years [2015-2017] <br/>
                            <b>Result</b>- 90% 945/1050 <br/>
                        </li>
                 </ul>
               </td>
           </tr>
       </table>
   </div>
        );
    }
}

export default Resume;