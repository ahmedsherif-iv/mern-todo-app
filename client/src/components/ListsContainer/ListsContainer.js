import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import TodoListForm from "../TodoListForm/TodoListForm";
import "./ListsContainer.css";

const ListsContainer = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prev => !prev);
    };

    const todoListCreate = useSelector(state => state.todoListCreate);
    const { success } = todoListCreate;

    useEffect(() => {
        if (success) {
            setShowModal(false);
        }
    }, [success]);

    return (
        <>
            <section className='lists-section'>
                <h1>Lists <button className="fas fa-plus-square" onClick={toggleModal}></button></h1>
                <div className="lists-container">
                    {children}
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <TodoListForm />
                </Modal>
            </section>
        </>
    );
}

export default ListsContainer;