import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestForgotPassword } from "../actions/userActions";

const ForgotPasswordScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userReducer.userLogin);
    const { userInfo } = userLogin;

    const userForgotPassword = useSelector(state => state.userReducer.userForgotPassword);
    const { error, success } = userForgotPassword;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
        else if (success) {
            setMessage('Please Check your email');
            // history.push('/login');
        }
        else if (error) {
            setMessage(error);
        }
    }, [history, userInfo, redirect, error, success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(requestForgotPassword(email));
    }

    return (
        <div>
            <div className="p-t-31 p-b-9">
                <span className="txt1">Email</span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Email is required">
                <input className="input100" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" onClick={handleSubmit}>
                    Request new Password
                </button>
            </div>

            <div>
                <p color="red">{message}</p>
            </div>
        </div>
    );
}

export default ForgotPasswordScreen;