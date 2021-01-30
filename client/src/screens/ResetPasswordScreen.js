import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resetPassword } from "../actions/userActions";

const ResetPasswordScreen = ({ location, history }) => {
    const { token } = useParams();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userReducer.userLogin);
    const { userInfo } = userLogin;

    const userResetPassword = useSelector(state => state.userReducer.userResetPassword);
    const { error, success } = userResetPassword;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
        else if (success) {
            history.push('/login');
        }
        else if (error) {
            setMessage(error);
        }
    }, [history, userInfo, redirect, error, success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            dispatch(resetPassword(password, token));
        }
        else {
            setMessage('Passwords do not match');
        }
    }

    return (
        <div>
            <div className="p-t-13 p-b-9">
                <span className="txt1">Password</span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <span className="focus-input100"></span>
            </div>

            <div className="p-t-13 p-b-9">
                <span className="txt1">Confirm Password</span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <span className="focus-input100"></span>
            </div>

            <div>
                <p color="red">{message}</p>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" onClick={handleSubmit}>
                    Sign In
                </button>
            </div>

        </div>
    );
}

export default ResetPasswordScreen;