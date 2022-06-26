import React, {Component} from 'react';
import pic from '../profile.png';
import './navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <div className="banner">
                     <div className="nav">
                        <div><img src={pic} className="logo" alt='Pic'></img></div>
                            <div className='items'>
                                <ul className='list'>
                                    <li className='list'><a href="index.html">Home</a></li>
                                    <li className='list'><a href="#about">About Me</a></li>
                                    <li className='list'><a href="#skills">Skills</a></li>
                                    <li className='list'><a href="#resume">Resume</a></li>
                                    {/* <li className='list'><a href="#services">Services</a></li>            */}
                                    <li className='list'><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        
           
        );
    }
}

export default Navbar;