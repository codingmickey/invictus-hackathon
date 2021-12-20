import React from "react";
import "./Card.css";
import VanillaTilt from "vanilla-tilt";
const element = document.querySelectorAll(".card");
 
function Card() {
    VanillaTilt.init(element);
    return (
        
        <div>
            
            <div class="container" style={{justifyContent:'flex-start', padding:'0 0 0 18%'}} >
            
      <div class="card">
        <div class="content">
              <h1>1</h1>
              <h3>Tell us which product are you interested in</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
        </div>
        </div>
        <background  style={{float:"right"}}  alt="vector-img" />
        </div>
        <div class="container" style={{justifyContent: "flex-end" , padding:'0 12% 0 0' }}>
        <div class="card">
        <div class="content">
              <h1>2</h1>
              <h3>Receive free quotes from our suppliers</h3>
        </div>
        </div>
        </div>
        <div style={{float:"right", padding:"0 30% 15% 0"}} className="vector">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="400px" viewBox="0 0 1037 727" fill="none"  preserveAspectRatio="xMaxYMin meet">       
            <path d="M71 726C371.746 631.121 297.304 334.83 589.178 338.407C881.051 341.985 935.393 182.72 1036 82" stroke="#BBE1FA"/>
            <path d="M1 645C301.746 550.121 227.304 253.83 519.178 257.407C811.051 260.985 865.393 101.72 966 0.999985" stroke="#BBE1FA"/>
        </svg>
        </div>

        <div class="container" style={{justifyContent:'flex-start', padding:'0 0 0 11%'}} >
        <div class="card">
        <div class="content">
              <h1>3</h1>
              <h3>Choose the best offer and Seal the Deal!</h3>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Card
