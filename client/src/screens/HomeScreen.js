import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { USER_LOGIN_SUCCESS } from '../constants/userConstants';

const HomeScreen = ({ location, history }) => {
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    const query = queryString.parse(location.search);

    const userLogin = useSelector((state) => state.userReducer.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (query.token) {
            setToken(query.token);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { token },
            });
            localStorage.setItem('userInfo', JSON.stringify({ token }));
        }
        else if (userInfo) {
            setToken(userInfo.token);
        }
        else {
            history.push('/login');
        }
    }, [history, token, dispatch, query.token, userInfo]);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <p>token: {token}</p>
            <div>
                <button onClick={handleLogout}>logout</button>
            </div>
        </div>
    );
}

export default HomeScreen;