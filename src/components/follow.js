import React, { Component } from "react";

class Follow extends Component {

    constructor() {
        super()
        this.state = {
            message: "Follow me"
        }
    }

    changeMessage() {
        this.setState({
            message: "Termakasi sudah follow"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Follow