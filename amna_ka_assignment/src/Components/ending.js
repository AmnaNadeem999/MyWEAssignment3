import React, {Component} from 'react';
import './ending.css';
import cip from '../profile.png';

class Ending extends Component{ 
    render(){
        return(
<div class="container">
            <div className="userbox" id='contact' style={{padding: '100px',display: 'flex', flexWrap: 'wrap', justifyContent:'center', height: 'auto',}}>
            <img src={cip} alt='pic1'></img>
            <h1>Amna Nadeem</h1>
            <p>Future Front End Developer</p>
            </div>
        
      
<footer className="userbox" style={{backgroundColor: 'transparent', color: 'black',paddingBottom:'30px',}}>
    <center>
       <p style={{fontWeight:'bold', fontFamily: 'sans-serif', fontSize: '30px', paddingTop: '50px', }}>Amna's Portfolio</p>
        
        <p style={{padding:'20px',}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo saepe<br/> hic expedita sapiente explicabo,
            obcaecati maiores sunt sint, est, voluptatem asperiores ipsum reiciendis.</p>
       
                <a href="https://facebook.com/" target='blank' class="fa fa-facebook"></a>
                <a href="https://twitter.com/" target='blank' class="fa fa-twitter"></a>
                <a href="https://www.youtube.com/" target='blank' class="fa fa-youtube"></a>
                <a href="https://instagram.com/" target='blank' class="fa fa-instagram"></a>
                <br/>
            </center>
</footer>   
</div>
        );
    }
    }
    export default Ending;