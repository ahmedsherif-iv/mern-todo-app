import React, { useRef, useEffect, useCallback } from 'react';
import './Modal.css';

const Modal = ({ showModal, setShowModal, children }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            { showModal && (
                <div className="background" onClick={closeModal} ref={modalRef}>
                    <div className="modal-wrapper">
                        {/* <div className="modal-content"></div> */}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;