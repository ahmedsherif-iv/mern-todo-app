import './ResetPasswordForm.css';

const ResetPasswordForm = () => {
    return (
        <>
            <section className='reset-password-section'>
                <div className='reset-password-container'>
                    <h2>Enter your new password</h2>

                    <form action="#">
                        <input type="password" placeholder="Enter new password" />
                        <input type="password" placeholder="Confirm password" />
                    </form>
                    <button type="submit">continue</button>
                </div>
            </section>
        </>
    );
}

export default ResetPasswordForm;