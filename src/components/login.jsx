import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import { connect } from 'react-redux';
import { INCREMENT_COUNT, DECREMENT_COUNT, DATA_TRANSFER } from "../constants/actionTypes";
// import { INCREMENT_COUNT } from "../constants/actionTypes.JS";

const mapStateToProps = state => {
    console.log("---->" + (state.loginReducer.number));

    return {
        num: state.loginReducer.number
    }
}

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch({ type: INCREMENT_COUNT }),
    decrementCounter: () => dispatch({ type: DECREMENT_COUNT }),
    dataTransfer: (data) => dispatch({ type: DATA_TRANSFER, payload: data })
})

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "Kumar Shubham"
        }
    }
    incrementCounter() {
        this.props.incrementCounter()
    }
    decrementCounter() {
        this.props.decrementCounter()
    }
    dataTransfer(data) {
        this.props.dataTransfer(data)
    }
    render() {
        console.log("number " + this.props.num);
        var a = this.props.num
        var data = 5;
        console.log(a);
        return (
            // this.props.num ? (
            //     <div>
            //         {a}
            //         {/* <div style={{color:'red'}}>Login</div> */}
            //         <div className="login">Login</div>
            //         {/* <div></div> */}
            //         {/* <Registration name={this.state.name}></Registration> */}
            //         <div style={{ height: 50, width: 50 }}>{this.props.num}</div>
            //         <h1>{a}values</h1>
            //         <div onClick={() => this.incrementCounter()}>Increment</div>
            //         <div onClick={() => this.decrementCounter()}>Decrement</div>
            //         {/* <div>{this.props.value}</div> */}
            //         <Link to="/registration">Registration</Link>
            //     </div>
            // ):
            // null
            <div>
                {a}
                {/* <div style={{color:'red'}}>Login</div> */}
                <div className="login">Login</div>
                {/* <div></div> */}
                {/* <Registration name={this.state.name}></Registration> */}
                <div style={{ height: 50, width: 50 }}>{this.props.num}</div>
                <h1>{a}values</h1>
                <div onClick={() => this.incrementCounter()}>Increment</div>
                <div onClick={() => this.decrementCounter()}>Decrement</div>
                <div onClick={() => this.dataTransfer(data)}>Data Transfer</div>
                {/* <div>{this.props.value}</div> */}
                <Link to="/registration">Registration</Link>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
