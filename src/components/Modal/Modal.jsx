import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');
export default function Modal({ onClose, ImageUrl }) {

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    const handleKeyDown = e => {
        if (e.code === "Escape") {
            onClose()
        }
    }
    const handleBackdropClick = event => {

        if (event.currentTarget === event.target) {
            onClose();
        }
    }

    return createPortal(
        <ModalBackdrop onClick={handleBackdropClick} >
            <ModalContent><img src={ImageUrl} alt="" width={800} height={600} /></ModalContent>
        </ModalBackdrop>, modalRoot
    );
}
