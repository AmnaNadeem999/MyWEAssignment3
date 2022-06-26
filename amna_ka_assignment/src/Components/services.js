import React, {Component} from 'react';
import './services.css';
import pic1 from '../service 3.png';
import pic2 from '../service2.jpg';
import pic3 from '../service1.jpg';

class Servicess extends Component{ 
    render(){
        return( 
            <div class="container">
            <div class="service" id="services">
            <div >
                <h1 style={{textAlign:'center', padding: '10px',color: 'white',}}>My Services</h1>
                 <div class="service" >
                 <img src={pic1} alt="pic1"></img>
                 <img src={pic2} alt="pic2"></img>
                 <img src={pic3} alt="pic3"> </img>
                 </div>            
             </div>
             </div>
             </div>
         );
    }
}

export default Servicess;