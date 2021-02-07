import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../actions/userActions';
import './ResetPasswordForm.css';

const ResetPasswordForm = ({ history, location }) => {
    const { token } = useParams();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userResetPassword = useSelector(state => state.userResetPassword);
    const { error, success } = userResetPassword;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');
        console.log(password, token);
        if (password === confirmPassword) {
            return dispatch(resetPassword(password, token));
        }
        setMessage('passwords do not match');

    };

    useEffect(() => {
        if (userInfo) {
            history.replace(redirect);
        }
        else if (success) {
            history.replace(redirect)
        }
        else if (error) {
            setMessage(error);
        }
    }, [userInfo, history, redirect, error, success]);

    return (
        <>
            <section className='reset-password-section'>
                <div className='reset-password-container'>
                    <h2>Enter your new password</h2>

                    <form onSubmit={handleSubmit} id="reset-password-form">
                        <input type="password" placeholder="Password" required="required"
                            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,30}"
                            title="password must contain at least one uppercase letter, one lowercase letter, and one numeric digit"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <input type="password" placeholder="Confirm Password" required="required"
                            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </form>
                    <button type="submit" form="reset-password-form">reset</button>
                    <p className="error-message">{message}</p>
                </div>
            </section>
        </>
    );
}

export default ResetPasswordForm;