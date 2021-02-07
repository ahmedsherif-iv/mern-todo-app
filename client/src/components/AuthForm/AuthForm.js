import "./AuthForm.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { login, register } from "../../actions/userActions";
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL } from "../../constants";


const AuthForm = () => {
    const [container, setContainer] = useState('');
    const [mobileView, setMobileView] = useState(false);
    const [viewSignupForm, setViewSignupForm] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [registerErrorMessage, setRegisterErrorMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerEmail, setRegisterEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const userRegister = useSelector(state => state.userRegister);


    const showSignup = flag => {
        if (flag) {
            setContainer('');
            setViewSignupForm(false);
        }
        else {
            setContainer('right-panel-active');
            setViewSignupForm(true);
        }
    };

    const toggleAuth = () => setViewSignupForm(prev => !prev);

    const switchTabView = () => {
        if (window.innerWidth <= 600) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setLoginErrorMessage('');
        dispatch(login(email, password));
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        setRegisterErrorMessage('');
        if (registerPassword === confirmPassword) {
            const user = {
                firstName,
                lastName,
                email: registerEmail,
                password: registerPassword,
            };
            return dispatch(register(user));
        }
        setRegisterErrorMessage('passwords do not match')
    }

    useEffect(() => {
        if (viewSignupForm) {
            setRegisterErrorMessage(userRegister.error);
        }
        else {
            setLoginErrorMessage(userLogin.error);
        }

    }, [userRegister.error, userLogin.error]);

    useEffect(() => {
        switchTabView();
    }, []);

    window.addEventListener('resize', switchTabView);

    return (
        <>
            {mobileView && (
                <div className="mobile-tabs">
                    <button className={!viewSignupForm ? 'selected' : ''} onClick={toggleAuth}>Sign in</button>
                    <button className={viewSignupForm ? 'selected' : ''} onClick={toggleAuth}>Sign up</button>
                </div>
            )}

            {!mobileView && (
                <div className={`auth-container ${container}`}>
                    <div className="form-container sign-up-container">
                        <form onSubmit={handleRegisterSubmit} id="register-form">
                            <h1>Create Account</h1>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="First Name" required="required"
                                value={firstName} onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input type="text" placeholder="Last Name" required="required"
                                value={lastName} onChange={(e) => setLastName(e.target.value)}
                            />
                            <input type="email" placeholder="Email" required="required"
                                value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}
                            />
                            <input type="password" placeholder="Password" required="required"
                                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,30}"
                                title="password must contain at least one uppercase letter, one lowercase letter, and one numeric digit"
                                value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                            <input type="password" placeholder="Confirm Password" required="required"
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button type="submit" form="register-form">Sign Up</button>
                            <p className='error-message'>{registerErrorMessage}</p>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={handleLoginSubmit} id="login-form">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href={FACEBOOK_AUTH_URL} className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href={GOOGLE_AUTH_URL} className="social"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Link to='/forgot-password'>Forgot your password?</Link>
                            <button type="submit" form="login-form" >Sign In</button>
                            <p className='error-message'>{loginErrorMessage}</p>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                {/* <button className="ghost" onClick={() => showSignup(true)}>Sign In</button> */}
                                <Button buttonClass="ghost" buttonStyle="btn--outline" onClick={() => showSignup(true)}>Sign In</Button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello There!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                {/* <button className="ghost" onClick={() => showSignup(false)}>Sign Up</button> */}
                                <Button buttonClass="ghost" buttonStyle="btn--outline" onClick={() => showSignup(false)}>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {mobileView && (
                <div className='auth-container'>
                    <div className="form-container sign-in-container">
                        {!viewSignupForm && (
                            <form onSubmit={handleLoginSubmit} id="login-form">
                                <h1>Sign in</h1>
                                <div className="social-container">
                                    <a href={FACEBOOK_AUTH_URL} className="social"><i className="fab fa-facebook-f"></i></a>
                                    <a href={GOOGLE_AUTH_URL} className="social"><i className="fab fa-google-plus-g"></i></a>
                                </div>
                                <span>or use your account</span>
                                <input type="email" placeholder="Email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" placeholder="Password 0" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Link to='/forgot-password'>Forgot your password?</Link>
                                <button type="submit" form="login-form" >Sign In</button>
                                <p className='error-message'>{loginErrorMessage}</p>
                            </form>
                        )}
                        {viewSignupForm && (
                            <form onSubmit={handleRegisterSubmit} id="register-form">
                                <h1>Create Account</h1>
                                <span>or use your email for registration</span>
                                <input type="text" placeholder="First Name" required="required"
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input type="text" placeholder="Last Name" required="required"
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                                />
                                <input type="email" placeholder="Email" required="required"
                                    value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}
                                />
                                <input type="password" placeholder="Password" required="required"
                                    pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,30}"
                                    value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}
                                />
                                <input type="password" placeholder="Confirm Password" required="required"
                                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button type="submit" form="register-form">Sign Up</button>
                                <p className='error-message'>{registerErrorMessage}</p>
                            </form>
                        )}
                    </div>
                </div>
            )
            }
        </>
    );
}

export default AuthForm;