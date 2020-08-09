import React, { useState } from 'react'
import SignUpButton, {signUpBtnStyle} from '../../components/SignUpButton/SignUpButton'
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../../actions/register.action';
import {RootState} from '../../reducers/root.reducer';
import {RegisterState} from '../../actions/user.actions';
import { useHistory } from 'react-router-dom';

const SignUp: React.FC = () => {
  const signUpState: RegisterState = useSelector((state: RootState) => state.registration);
  const history = useHistory();
  if (signUpState.success) {
    setTimeout(() => {
      history.push('/login')
    }, 3000)
  }

  const [inputs, setForm] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { email, username, password } = inputs;

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm(inputs => ({ ...inputs, [name]: value }));
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    setSubmitted(true);
    if (username && password && email) {
      register(dispatch, {username, password, email});
    }
  }


  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">
            <h4>Register</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail
                  Address</label>
                <div className="col-md-6">
                  <input type="email" name="email" value={email} onChange={handleChange}
                         className={'form-control' + (submitted && !email ? ' is-invalid' : '')}
                  />
                </div>
                {submitted && !email && <span className="text-danger">Email is required</span>}
              </div>

              <div className="form-group row">
                <label className="col-md-4 col-form-label text-md-right">User Name</label>
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
                <button style={signUpBtnStyle}>
                    SIGN UP
                </button>
                <span className="pl-2">Existing user? <a href="/login">Log In</a></span>
                </span>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  )
}

export default SignUp
