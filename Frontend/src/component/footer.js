import React from "react";
import "./footer.css";
    
const footer = () =>{
    return(
        <footer>
        <div className='footer'>
          <div className="subfoot"> 
          <h3>More information</h3>
          <ul>
            <li>Contact us</li>
            <li>About us</li>
            <li>Directon</li>
            <li>Blog</li>
          </ul>
          </div>
          <div className="imgfoot">
          <img src='Rungmodlogo.jpg'className='fbg'/>
          <div className="titlefoot">RungMOd</div>
          </div>
        </div>
      </footer>
    );
}   

export default footer;
    