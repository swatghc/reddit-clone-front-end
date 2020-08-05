import * as React from "react";
import * as CSS from 'csstype';
import { Link } from "react-router-dom";

interface Props {
    
}
export const signUpBtnStyle: CSS.Properties = {
    backgroundColor: '#0079D3',
    borderColor: '#0079D3',
    color: 'aliceblue',
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
} 

const SignUpButton = (props: Props) => {
    return (
        <Link to="/signup">
            <button style={signUpBtnStyle} type="button">SIGN UP</button>
        </Link>
    )
}

export default SignUpButton
