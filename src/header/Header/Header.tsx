import * as React from "react";
import * as CSS from 'csstype'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginButton } from "../../components/LoginButton/LoginButton";
import SignUpButton from "../../components/SignUpButton/SignUpButton";
import SignUp from "../../containers/sign-up/SignUp";
import Login from "../../containers/Login/Login";

export const Header = () => (
    <Router>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img width="30" height="30" loading="lazy" className="d-inline-block align-top"
                    src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"></img>
             Reddit
        </a>

            <div className="d-flex">
                <LoginButton></LoginButton>
                <SignUpButton></SignUpButton>
            </div>
        </nav>

        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
    </Router>

)