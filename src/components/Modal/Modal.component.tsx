import React from 'react';
import { 
    Button, 
    Modal, 
} from 'react-bootstrap';

function CustomModal({ show, handleClose, header, body, footerButtons }) {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
            {footerButtons.map((button, index) => (
                <Button key={index} variant={button.variant} onClick={button.onClick}>
                    {button.text}
                </Button>
            ))}
        </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;