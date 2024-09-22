import React from "react"
import ModalCloseBtn from "/public/icons/ModalCloseBtn.svg"

const Modal = ({ isOpen, onClose, children, size = "max-w-[37.5rem]" }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-chinesewhite bg-opacity-75 flex justify-center items-center z-50'>
      <div
        className={`bg-white pt-8 rounded-[1.25rem] shadow-lg relative w-full ${size}`}
      >
        <button onClick={onClose} className='absolute top-5 right-5'>
          <ModalCloseBtn />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
