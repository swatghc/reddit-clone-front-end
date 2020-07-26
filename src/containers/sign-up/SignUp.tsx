import React from 'react'
import SignUpButton from '../../components/SignUpButton/SignUpButton'

interface Props {
    
}

const SignUp = (props: Props) => {
    return (
        <div className="row justify-content-center">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h4>Register</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group row">
                  <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail
                    Address</label>
                  <div className="col-md-6">
                    <input type="text" id="email_address" className="form-control" name="email-address"></input>              
                  </div>
                </div>
    
                <div className="form-group row">
                  <label className="col-md-4 col-form-label text-md-right">User Name</label>
                  <div className="col-md-6">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>
    
                <div className="form-group row">
                  <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                  <div className="col-md-6">
                    <input type="password" id="password" className="form-control" name="password"></input>
                  </div>
                </div>
    
                <span className="col-md-6 offset-md-4">
                    <SignUpButton></SignUpButton>
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
