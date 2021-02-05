import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/404' component={NotFoundPage} />
          <Route path='/reset-password' component={ResetPasswordPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
