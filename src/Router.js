import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import SignIn from "./Components/SignIn/SignIn";
import Login from "./Components/Login/login";
import Users from "./Components/Users/Users";

function Routs() {
    return <BrowserRouter>
            <Route path="/" component={Login} exact/>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/users" component={Users}/>
        </BrowserRouter>

}

export default Routs