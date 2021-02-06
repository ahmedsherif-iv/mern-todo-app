import './ResetPasswordForm.css';
import { Button } from "../Button/Button";

const ResetPasswordForm = () => {
    return (
        <>
            <section className='reset-password-section'>
                <div className='reset-password-container'>
                    <h1>Having trouble signing in?</h1>
                    <p>Enter your Email.</p>
                    <form action="#">
                        <input type="email" placeholder="Enter your email" />
                    </form>
                    <button type="submit">continue</button>
                </div>
            </section>
        </>
    );
}

export default ResetPasswordForm;