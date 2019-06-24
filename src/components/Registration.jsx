import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Registration extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        return (
            <div>
                <div>Registration</div>
                {/* <div>{this.props.name}</div> */}
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default Registration;