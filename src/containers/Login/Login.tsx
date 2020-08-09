import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { loginBtnStyle } from '../../components/LoginButton/LoginButton';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user.actions';

const Login: React.FC = () => {
    const [inputs, setForm] = useState({
        username: '',
        password: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const { username, password } = inputs;

    const dispatch = useDispatch();

    function handleChange(e: any) {
        const { name, value } = e.target;
        setForm(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e: any) {
        e.preventDefault();

        setSubmitted(true);
        console.log(submitted)
        if (username && password) {
            login(dispatch, { username, password });
        }
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center"><h4>Login</h4></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="user_name" className="col-md-4 col-form-label text-md-right">Username</label>
                                    <div className="col-md-6">
                                        <input type="text" name="username" value={username} onChange={handleChange}
                                               className={'form-control' + (submitted && !username ? ' is-invalid' : '')}  />
                                    </div>
                                    {submitted && !username && <span className="text-danger">Username is required</span>}
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input type="password" id="password" name="password" value={password} onChange={handleChange}
                                               className={'form-control' + (submitted && !password ? ' is-invalid' : '')} required/>
                                    </div>
                                    {submitted && !password && <span className="text-danger">Password is required</span>}
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
