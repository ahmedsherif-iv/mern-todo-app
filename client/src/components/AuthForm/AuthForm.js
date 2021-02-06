import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./AuthForm.css"

const AuthForm = () => {
    const [container, setContainer] = useState('');
    const [mobileView, setMobileView] = useState(false);
    const [viewSignupForm, setViewSignupForm] = useState(false);

    const showSignup = flag => flag ? setContainer('') : setContainer('right-panel-active');

    const toggleAuth = () => setViewSignupForm(prev => !prev);

    const switchTabView = () => {
        if (window.innerWidth <= 600) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    };

    useEffect(() => {
        switchTabView();
    }, []);

    window.addEventListener('resize', switchTabView);

    return (
        <>
            {mobileView && (
                <div className="mobile-tabs">
                    {/* <Button>Sign in</Button>
                    <Button>Sign up</Button> */}
                    <button className={!viewSignupForm ? 'selected' : ''} onClick={toggleAuth}>Sign in</button>
                    <button className={viewSignupForm ? 'selected' : ''} onClick={toggleAuth}>Sign up</button>
                </div>
            )}

            {!mobileView && (
                <div className={`auth-container ${container}`}>
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <Link to='/forgot-password'>Forgot your password?</Link>
                            <button>Sign In</button>
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
                                <button className="ghost" onClick={() => showSignup(false)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {mobileView && (
                <div className='auth-container'>
                    <div className="form-container sign-in-container">
                        {!viewSignupForm && (
                            <form action="#">
                                <h1>Sign in</h1>
                                <div className="social-container">
                                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                </div>
                                <span>or use your account</span>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <Link to='/forgot-password'>Forgot your password?</Link>
                                <button>Sign In</button>
                            </form>
                        )}
                        {viewSignupForm && (
                            <form action="#">
                                <h1>Create Account</h1>
                                <div className="social-container">
                                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                </div>
                                <span>or use your email for registration</span>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button>Sign Up</button>
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