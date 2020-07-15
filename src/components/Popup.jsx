import React, { Component } from 'react'

export default class Popup extends Component {

    state= {
        display : "block"
    }

    toggleOff = () => {
        this.setState({display: "none"})
    }
    render() {

        return (
            <div className="popup" style={{display: this.state.display}}>
                <button onClick={()=> this.toggleOff()}>Close</button>
                <h1 id="instructions">Rotate to horizontal</h1>
            </div>
        )
    }
}
