import './ListCard.css';

const ListCard = ({ todoList, color = '#000000', handleDelete }) => {
    return (
        <>
            <div className="card"
                style={{
                    '--background': todoList ? todoList.color : color,
                    '--text': 'white',
                }}>
                <div className="multi-button">
                    <button className="fas fa-share-alt"></button>
                    <button className="fas fa-edit"></button>
                    <button className="fas fa-trash" onClick={() => handleDelete(todoList._id)}></button>
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