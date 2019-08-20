import React from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import './App.css';
import FriendsList from './components/FriendsList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <div>
      <ul>
        <li>
          <Link to ="/login">Login</Link>
        </li>
        <li>
          <Link to ="/protected">protected</Link>
        </li>
      </ul>
      <Route path = "/login" component={Login} />
      <PrivateRoute exact path = "/protected" component = {FriendsList} />
    </div>

    </Router>
    
    
     <Login />
      </header>
    </div>
  );
}

export default App;
