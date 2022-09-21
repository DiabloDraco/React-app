import './modal.scss'
import { useRef, useState } from 'react'

function Modal({ inf , modal , setModal }) {
    let modalCross = useRef(null)
    let modalWrapper = useRef(null)
    
    function handleModalWrapper(e) {
        if (e.target === modalWrapper.current) {
            setModal(false)
        }
    }

    function handleModalBtn(e) {
        if (e.target === modalCross.current) {
            setModal(false)
        }
    }
    return (
        modal && <div onClick={handleModalWrapper} ref={modalWrapper} className='modal-wrapper'>
            <div className='modal'>
                <div className='modal__header'>
                    <h2 className='modal__heading'>User Info</h2>
                    <button onClick={handleModalBtn} ref={modalCross} className='modal__cross'>x</button>
                </div>
                <p className='modal__info'>Name: <span>{inf.name}</span></p>
                <p className='modal__info'>Surname: <span>{inf.surname}</span></p>
                <p className='modal__info'>Password: <span>{inf.password}</span></p>
                <p className='modal__info'>Phone number: <span>{inf.phone}</span></p>
            </div>
        </div>
    )
}

export default Modal