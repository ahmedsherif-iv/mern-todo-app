import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ListsPage from './pages/ListsPage';
import ThirdPartyHandler from './components/ThirdPartyAuthHandler/ThirdPartyHandler';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/forgot-password' component={ForgotPasswordPage} />
          <Route path='/reset-password/:token' component={ResetPasswordPage} />
          <Route path='/third-party-auth/:token' component={ThirdPartyHandler} />
          <Route path='/lists' exact component={ListsPage} />
          <Route path='/404' component={NotFoundPage} />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
