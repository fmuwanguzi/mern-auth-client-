import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import './App.css';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import { Component } from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  console.log('Private Route >>>', user);
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect (() => {
    let token;
    //if there is no token in localStorage, then user is Authenticated
  })

  return (
    <div className="App">
    <Welcome />
    </div>
  );
}

export default App;
