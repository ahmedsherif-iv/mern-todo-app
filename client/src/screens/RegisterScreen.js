import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL } from "../constants";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
    const [firstName, setFristName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userReducer.userLogin);
    const { userInfo } = userLogin;

    const userRegister = useSelector(state => state.userReducer.userRegister);
    const { error } = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
        else if (error) {
            setMessage(error);
        }
    }, [history, userInfo, redirect, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            const user = {
                firstName,
                lastName,
                email,
                password,
            };
            dispatch(register(user));
        }
        else {
            setMessage('Passwords do not match');
        }
    }

    return (
        <form className="login100-form validate-form flex-sb flex-w">

            <span
                className="login100-form-title p-b-53"
            >
                Sign In With
            </span>

            <a className="btn-face m-b-20" href={FACEBOOK_AUTH_URL}>
                <i className="fa fa-facebook-official"></i>
                Facebook
            </a>

            <a className="btn-google m-b-20" href={GOOGLE_AUTH_URL}>
                Google
            </a>

            <div className="p-t-31 p-b-9">
                <span className="txt1">First Name</span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="First name is required">
                <input className="input100" type="text" value={firstName} onChange={(e) => setFristName(e.target.value)} />
                <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
                <span className="txt1">Last Name</span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Last name is required">
                <input className="input100" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <span className="focus-input100"></span>
            </div>

            <div className="p-t-31 p-b-9">
                <span className="txt1">Email</span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Email is required">
                <input className="input100" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className="focus-input100"></span>
            </div>

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

            <div className="w-full text-center p-t-55">
                <span className="txt2">Already have an account?</span>
                <Link to="/login" className="txt2 bo1">Login now</Link>
            </div>

        </form >
    );
}

export default RegisterScreen;