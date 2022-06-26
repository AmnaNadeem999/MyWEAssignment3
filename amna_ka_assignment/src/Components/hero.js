import React, {Component} from 'react';
import './hero.css';

class Hero extends Component{ 
    render(){
        return(
            <div className="container">
                    <h1 style={{
                        fontWeight:"bold",
                        marginTop:"80px",
                        fontSize:"70px",
                        textAlign:"center",
                        alignItems:"center",
                        justifyContent:'center',
                        color:'#fff',
               }}>
                MY FIRST EVER WEBSITE
                </h1>
                    <p style={{
                        width:"100%",
                        textAlign:"center",
                        alignItems:"center",
                        justifyContent:'center',
                        margin: "20px",
                        fontWeight: '100',
                        fontSize:'16px',
                        lineHeight: '30px',
                        padding:'10px',
                        color:'#fff',
                    }}
                     >
                        Hi Everyone! You are watching My First Ever Website made entirely using HTML, CSS and JavaScript.<br/> What do you say? How is my Website?</p>
                    <div>
                        <button type="button"><span></span>Watch More</button>
                        <button type="button"><span></span>Join Now</button>
                    </div>
            </div>
            );
        }
}

export default Hero;