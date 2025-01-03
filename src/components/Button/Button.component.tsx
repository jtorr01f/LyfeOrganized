import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

const Button = ({ key, text, variant, onClick }) => {
    return (
        <>
            <style type="text/css">
                {`
                    .btn-primary {
                      background-color: rgb(135, 24, 238);
                      color: white;
                      border: none;
                    }
                    .btn-primary:hover {
                      background-color: rgb(96, 18, 170);
                    }
                `}
            </style>
                
            <BootstrapButton key={key} variant={variant} onClick={onClick}>
              {text}
            </BootstrapButton>
        </>
    );
}

export default Button;