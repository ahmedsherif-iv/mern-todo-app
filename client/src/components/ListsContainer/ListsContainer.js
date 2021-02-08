import "./ListsContainer.css";

const ListsContainer = ({ children }) => {
    return (
        <>
            <section className='lists-section'>
                <h1>Lists</h1>
                <div className="lists-container">
                    {children}
                </div>
            </section>
        </>
    );
}

export default ListsContainer;