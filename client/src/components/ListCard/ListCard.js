import { Link } from 'react-router-dom';
import './ListCard.css';

const ListCard = ({
    todoList,
    color = '#000000',
    handleDelete,
    handleUpdate
}) => {

    return (
        <>
            <Link className="card"
                to={`lists/${todoList._id}`}
                style={{
                    '--background': todoList ? todoList.color : color,
                    '--text': 'white',
                }}>
                <div className="multi-button">
                    <button className="fas fa-share-alt"></button>
                    <button className="fas fa-edit" onClick={() => handleUpdate(todoList._id)}></button>
                    <button className="fas fa-trash" onClick={() => handleDelete(todoList._id)}></button>
                </div>
                <div className="card-data-container">
                    <h3>
                        {todoList.name}
                    </h3>
                </div>
            </Link>
        </>
    );
}

export default ListCard;