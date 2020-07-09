import React, { Component } from "react";

export default class LineItem6 extends Component {
  render() {
    return (
      <div className="lineItem">
        <p>
        6. Have the photographer center your image in the frame. If you are on mobile then you must take the picture horizontally.
       
          <br/>
          <img
            style={{width:"300px"}}
            className="responsive"
            src="/img/center.png"
            alt="center self"
          ></img>
         </p>
      </div>
    );
  }
}