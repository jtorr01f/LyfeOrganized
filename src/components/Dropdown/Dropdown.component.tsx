import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks.tsx";

import "./Dropdown.styles.css";

type DropdownProps = {
    variant: string;
    options: string[];
    value: string;
    placeholder: string;
    onClick: (value: string) => void;
};

const Dropdown = ({ variant, options, value, placeholder, onClick }: DropdownProps) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useOnClickOutside(ref, () => setShow(false));

    return (
        <div ref={ref} className="dropdown-wrapper">
            <div  className="dropdown" onClick={() => setShow(true)}>{value !== "" ? value : placeholder}</div>
            {show && (
                <div className={`dropdown-options ${variant}`}>
                    {options.map((option) => (
                        <div
                            key={option}
                            className="dropdown-option"
                            onClick={() => {
                                onClick(option);
                                setShow(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;