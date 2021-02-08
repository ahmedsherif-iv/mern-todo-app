import './ListCard.css';

const ListCard = ({ children }) => {
    return (
        <>
            <div className="card"
                style={{
                    '--background': 'black',
                    '--text': 'white',
                }}>
                <div className="multi-button">
                    <button className="fas fa-share-alt"></button>
                    <button className="fas fa-edit"></button>
                    <button className="fas fa-trash"></button>
                </div>
                <div className="card-data-container">
                    <h3>
                        {children}
                    </h3>
                </div>
            </div>
        </>
    );
}

export default ListCard;