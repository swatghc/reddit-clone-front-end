import React from 'react'
import { Link } from 'react-router-dom';
import { loginBtnStyle } from '../../components/LoginButton/LoginButton';

interface Props {
    
}

const Login = (props: Props) => {
    return (
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <div className="card">
                <div className="card-header text-center"><h4>Login</h4></div>
                <div className="card-body">
                    <form >
                        <div className="form-group row">
                            <label htmlFor="user_name" className="col-md-4 col-form-label text-md-right">Username</label>
                            <div className="col-md-6">
                                <input type="text" id="user_name" className="form-control" name="user_name" required></input>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                            <div className="col-md-6">
                                <input type="password" id="password" className="form-control" name="password" required></input>
                            </div>
                        </div>

                        <span className="col-md-6 offset-md-4">
                            <button style={loginBtnStyle}>
                                Login
                            </button>
                            <span className="pl-2">New to SpringReddit? 
                            <Link to="/signup">SIGN UP</Link>
                            </span>
                        </span>                  
                    </form>
                </div>
            </div>
        </div>
        <div className="col-md-3"></div>
    </div>
</div>
    )
}

export default Login
