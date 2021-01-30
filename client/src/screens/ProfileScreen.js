import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../actions/userActions';
import { USER_LOGIN_SUCCESS, USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [message, setMessage] = useState(null);
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    const query = queryString.parse(location.search);


    const userDetails = useSelector((state) => state.userReducer.userDetails);
    const { isLoading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userReducer.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userReducer.userUpdateProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (!user || !user.firstName || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(getUserDetails());
            } else {
                setName(user.firstName);
                setEmail(user.email);
                setToken(userInfo.token);
            }
        }
    }, [dispatch, history, userInfo, user, success]);



    return (
        <div className="profile-screen">
            <div>
                {token ? token : 'hello'}
            </div>
            <div>
                name: {name}
            </div>
            <div>
                email: {email}
            </div>
        </div>
    );
}

export default ProfileScreen;