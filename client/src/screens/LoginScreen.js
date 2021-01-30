import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL } from "../constants";

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userReducer.userLogin);
    const { userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
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

            <a className="btn-google m-b-20" href={GOOGLE_AUTH_URL}>Google</a>

            <div className="p-t-31 p-b-9">
                <span className="txt1">Email</span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Email is required">
                <input className="input100" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <span className="focus-input100"></span>
            </div>

            <div className="p-t-13 p-b-9">
                <span className="txt1">Password</span>
                <Link to="/forgot-password" className="txt2 bo1 m-l-5">Forgot password?</Link>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" onClick={handleSubmit}>
                    Sign In
						</button>
            </div>

            <div className="w-full text-center p-t-55">
                <span className="txt2">Not a member?</span>
                <Link to="/register" className="txt2 bo1">Sign up now</Link>
            </div>

        </form >
    );
}

export default LoginScreen;