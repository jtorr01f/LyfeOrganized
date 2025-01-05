import React from "react";
import "./Input.styles.css";

type InputProps = {
    id: string;
    placeholder: string;
    value: string;
    onChange: (e:any) => void;
    variant: string;
};

export const Input = ({ id, variant, placeholder, value, onChange }: InputProps) => (
    <>
        {variant === "textarea" ? (
            <textarea
                id={id}
                className="input text-area"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        ) : (
            <input
                id={id}
                className="input text-input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        )}
    </>
);