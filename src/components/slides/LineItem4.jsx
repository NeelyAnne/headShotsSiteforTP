import React, { Component } from "react";

export default class LineItem4 extends Component {
  render() {
    return (
      <div className="lineItem">
        <p>
          4. Make sure that you have good lighting. You want to be lit with a warm
          light coming from above at a slight angle. You do not need a reflector
          but you do not want to be directly under a light or back lit either.
          <br />
          <a  target="_blank"
          rel="noopener noreferrer"
            href="http://www.prexperts.com/_assets/images/Cactus%20News/Clamshell%20lighting%20650.png">
            Diagram of Good Lighting
          </a> 
          <br/>
          <img
            className="responsive"
            id="#lightInfo"
            src="img/lightInformation.png"
            alt="example of how to set up lights from biteable.com"
          ></img>
          <br/>
          <span className="attribute">

          </span>
          </p>
        
      </div>
    );
  }
}
