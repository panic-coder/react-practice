import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/Registration";

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                {/* <Route path="/users/" component={Users} /> */}
            </div>
        </Router>
    );
}

export default AppRouter;