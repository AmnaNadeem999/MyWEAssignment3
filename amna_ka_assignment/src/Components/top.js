import React, {Component} from 'react';
import './top.css';

class top extends Component{ 
    render(){
        var mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};   
        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }   
        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }
        return(
            <button onclick={topFunction()} id="myBtn" title="Go to top">Top</button>
        );
    } 
}
export default top;
