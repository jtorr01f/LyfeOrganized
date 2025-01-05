import React, { ReactNode } from "react";
import Button from "../Button/Button.component.tsx";
import "./Modal.styles.css";

type ModalProps = {
    show: boolean;
    onClose: () => void;
    header: ReactNode;
    body: ReactNode;
    footerButtons: {
        id: string;
        text: string;
        variant: string;
        onClick: () => void;
    }[];
    size: string;
    ref: any;
};

const Modal = ({ show, header, body, footerButtons, size, ref } : ModalProps) => (
    <div className={`modal-bg ${show ? "show" : "none"}`}>
        <div ref={ref} className={`modal-content ${size}`}>
            <div className="modal-header">
                <p className="modal-title">{header}</p>
            </div>
            <div className="modal-body">
                {body}
            </div>
            <div className="modal-footer">
                {footerButtons.map((button) => (
                    <span key={button.id} className="modal-button">
                        <Button 
                            id={button.id} 
                            variant={button.variant} 
                            onClick={button.onClick} 
                            text={button.text} 
                        />
                    </span>
                ))}
            </div>
        </div>
    </div>
)

export default Modal;