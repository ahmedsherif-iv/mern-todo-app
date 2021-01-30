import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/forgot-password" component={ForgotPasswordScreen} />
            <Route path="/reset-password/:token" component={ResetPasswordScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Switch>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
