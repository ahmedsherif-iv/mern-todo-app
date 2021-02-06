import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ListsPage from './pages/ListsPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/forgot-password' component={ForgotPasswordPage} />
          <Route path='/reset-password' component={ResetPasswordPage} />
          <Route path='/404' component={NotFoundPage} />
          <Route path='/lists' exact component={ListsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
