import React from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.styles.css';
import Button from '../Button/Button.component.tsx';

type FooterButton = {
    text: string;
    variant: string;
    onClick: () => void;
};

function CustomModal({ show, handleClose, header, body, footerButtons }) {
    return (
        <div className="modal-wrapper">
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>{header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    {footerButtons.map((button: FooterButton, index: number) => (
                        <Button key={index} text={button.text} variant={button.variant} onClick={button.onClick} />
                    ))}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CustomModal;