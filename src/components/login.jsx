import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from "./Registration";


class Login extends Component {
    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     "name": "Kumar Shubham"
        // }    
    }
    render() {
        return(
            <div>
                {/* <div style={{color:'red'}}>Login</div> */}
                <div className="login">Login</div>
                {/* <div></div> */}
                {/* <Registration name={this.state.name}></Registration> */}
                <Link to="/registration">Registration</Link>
            </div>
        )
    }
}

export default Login;