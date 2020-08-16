import * as React from "react";
import { LoginButton } from "../../components/LoginButton/LoginButton";
import SignUpButton from "../../components/SignUpButton/SignUpButton";
import { useSelector } from 'react-redux';
import {RootState} from '../../reducers/root.reducer';
import {AuthState} from '../../actions/user.actions';

export const Header = () =>  {
  const authState: AuthState = useSelector((state: RootState) => state.auth);

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img width="30" height="30" loading="lazy" className="d-inline-block align-top mr-1"
             src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"></img>
        Reddit
      </a>
      { !authState.authenticated &&
        <div className="d-flex">
          <LoginButton></LoginButton>
          <SignUpButton></SignUpButton>
        </div>
      }

    </nav>
  );
}
