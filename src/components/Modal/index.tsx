import { Component, useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean
  setIsOpen: any
}
const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false)

  const prevModalStatus = useRef<boolean>(false)

  useEffect(() => {
    prevModalStatus.current = isOpen;
  })

  const modalPreviousValue = prevModalStatus.current ?? isOpen

  useEffect(() => {
    if (modalPreviousValue !== isOpen) {
      setModalStatus(isOpen)
    }

  }, [modalPreviousValue, isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}


export default Modal;
