import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ListsPage from './pages/ListsPage';
import ThirdPartyHandler from './components/ThirdPartyAuthHandler/ThirdPartyHandler';
import ListItemsPage from './pages/ListItemsPage';
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';
import { SOCKET_ENDPOINT } from './constants';
import { useEffect, useState } from 'react';
import { TODO_LIST_ITEMS_GET_SUCCESS } from './constants/todoListItemsConstants';

function App() {
  const [sock, setSock] = useState(null);
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.userLogin);
  const { todoListItems } = useSelector(state => state.todoListItems);

  useEffect(() => {
    if (userInfo) {
      const socket = io(SOCKET_ENDPOINT, { autoConnect: false, withCredentials: true });
      socket.auth = { token: userInfo.token };
      socket.connect();
      setSock(socket);

      // socket.on("items", data => {
      //   const { item, action } = data;

      //   switch (action) {
      //     case 'POST':
      //       dispatch({
      //         type: TODO_LIST_ITEMS_GET_SUCCESS,
      //         // payload: todoListItems ? [item] : todoListItems.push(item),
      //         payload: todoListItems.push(item),
      //       });
      //       break;
      //   }
      // });

      return () => {
        socket.disconnect();
        setSock(null);
      };
    }
  }, [userInfo, todoListItems]);

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/forgot-password' component={ForgotPasswordPage} />
          <Route path='/reset-password/:token' component={ResetPasswordPage} />
          <Route path='/third-party-auth/:token' component={ThirdPartyHandler} />
          <Route path='/lists' exact component={ListsPage} />
          <Route path='/lists/:id'
            render={(props) => (
              <ListItemsPage {...props} socket={sock} />
            )}
          />
          <Route path='/404' component={NotFoundPage} />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
