import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log("---->" + (state.loginReducer.data));

    return {
        data: state.loginReducer.data
    }
}

class Registration extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        console.log("Data  :  ",this.props.data);
        
        return (
            <div>
                <div>Registration</div>
                {/* <div>{this.props.name}</div> */}
                <div>{this.props.data}</div>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

// export default Registration;
export default connect(mapStateToProps, null)(Registration)