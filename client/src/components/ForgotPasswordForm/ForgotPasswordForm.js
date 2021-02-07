import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestForgotPassword } from '../../actions/userActions';
import './ForgotPasswordForm.css';

const ResetPasswordForm = ({ history, location }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userForgotPassword = useSelector(state => state.userForgotPassword);
    const { error, success } = userForgotPassword;

    const redirect = location.search ? location.search.split('=')[1] : '/lists';

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');
        dispatch(requestForgotPassword(email));
    };

    useEffect(() => {
        if (userInfo) {
            history.replace(redirect);
        }
        else if (success) {
            setMessage('an email has been sent to you');
            setIsError(false);
        }
        else if (error) {
            setMessage(error);
            setIsError(true);
        }
    }, [userInfo, history, redirect, error, success]);

    return (
        <>
            <section className='forgot-password-section'>
                <div className='forgot-password-container'>
                    <h1>Having trouble signing in?</h1>
                    <p>Enter your Email.</p>
                    <form onSubmit={handleSubmit} id="forgot-password-form">
                        <input type="email" placeholder="Enter your email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </form>
                    <button type="submit" form="forgot-password-form">continue</button>
                    <p className={isError ? 'error-message' : ''}>{message}</p>
                </div>
            </section>
        </>
    );
}

export default ResetPasswordForm;