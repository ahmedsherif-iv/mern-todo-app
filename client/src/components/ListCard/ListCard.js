import './ListCard.css';

const ListCard = ({ todoList, color = 'black' }) => {
    return (
        <>
            <div className="card"
                style={{
                    '--background': color,
                    '--text': 'white',
                }}>
                <div className="multi-button">
                    <button className="fas fa-share-alt"></button>
                    <button className="fas fa-edit"></button>
                    <button className="fas fa-trash"></button>
                </div>
                <div className="card-data-container">
                    <h3>
                        {todoList.name}
                    </h3>
                </div>
            </div>
        </>
    );
}

export default ListCard;