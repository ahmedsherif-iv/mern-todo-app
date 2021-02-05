import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <section>
                <div className='not-found-container' >
                    <h1>404</h1>
                    <h2>page not found</h2>
                    <h3>
                        Sorry but the page you are looking for does not exist,<br />
                        have been removed, <br />
                        name changed or is temporarity unavailable.
                    </h3>
                </div>
            </section>
        </>
    );
}

export default NotFound;