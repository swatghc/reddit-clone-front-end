import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './containers/sign-up/SignUp';
import Login from './containers/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers/root.reducer';

function App() {
  // The selector is approximately equivalent to the mapStateToProps
  const alert = useSelector((state: RootState) => state.alert);

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          </div>
        </div>

        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
