import * as React from "react";
import * as CSS from 'csstype';
import {Link} from "react-router-dom";

export const loginBtnStyle: CSS.Properties = {
    backgroundColor: 'transparent',
    borderColor: '#0079D3',
    color: '#0079D3',
    fill: '#0079D3',
    border: '1px solid',
    borderRadius: '4px',
    boxSizing: 'border-box',
    textAlign: 'center',
    letterSpacing: '1px',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '24px',
    textTransform: 'uppercase',
    padding: '3px 16px',
    opacity: 1,
}; 


export const LoginButton = () => (
    // <button style={style} className="mr-2">LOGIN</button>
    <Link to="/login">
        <button style={loginBtnStyle} className="mr-2" type="button">LOGIN</button>
    </Link>

);
