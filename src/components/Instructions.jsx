import React, { Component } from 'react'
import Home from './home';


export default class Instructions extends Component {

    state = {
        isActive: true,
        btnTalk: "Collapse Instructions"
     }
   
     handleShow = ()=>{
         if (this.state.isActive === false){
         this.setState({
             isActive: true,
             btnTalk: "Collapse Instructions"
         })
     } else {
         this.setState({
             isActive: false, 
             btnTalk: "Read Instructions"
         })
     }
     }
   
     handleHide = () =>{
         this.setState({
             isActive: false
         })
     }
   
      render(){
          return(
              <>
                  <div className="container-instr">
                  <button className="all-btns info" onClick={this.handleShow}>{this.state.btnTalk}</button>
                  </div>
              {this.state.isActive ?      
              <div className="home-container">       
                 <Home /></div> : null }
              </>
          )
      }
   }