import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodoList, updateTodoList } from '../../actions/todoListActions';
import './TodoListForm.css';

const TodoListForm = ({ title = 'Create new list', todoList = null }) => {
    const [name, setName] = useState(todoList ? todoList.name : '');
    const [color, setColor] = useState(todoList ? todoList.color : '#000000');

    const dispatch = useDispatch();

    const handleCreate = (e) => {
        // e.preventDefault();
        dispatch(createTodoList(name, color));
    }

    const handleUpdate = (e) => {
        // e.preventDefault();
        dispatch(updateTodoList(todoList._id, { name, color }));
    }



    return (
        <>
            <div className='todo-list-container'>
                <div className="todo-list-form-container">
                    <form onSubmit={todoList ? handleUpdate : handleCreate} id="todo-list-form">
                        <h1>{title}</h1>
                        <input type="text" placeholder="Name" required="required" value={name} onChange={(e) => setName(e.target.value)} />

                        <label> SELECT COLOR </label>
                        <select value={color} onChange={e => setColor(e.target.value)}>
                            <option value="#000000" >black</option>
                            <option value="#013552" style={{ background: '#013552', color: 'white' }}>navy blue</option>
                            <option value="#246655" style={{ background: '#246655', color: 'white' }}>dark green</option>
                            <option value="#580000" style={{ background: '#580000', color: 'white' }}>dark red</option>
                        </select>
                        <button type="submit" form="todo-list-form" >{todoList ? 'update' : 'create'}</button>
                        {/* <p className='error-message'>{loginErrorMessage}</p> */}
                    </form>
                </div>
            </div>

        </>
    );
}

export default TodoListForm;