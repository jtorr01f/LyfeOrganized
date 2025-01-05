import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks.tsx";
import { ChevronDown, ChevronUp } from "react-feather";
import "./Dropdown.styles.css";
import { Input } from "../Input/Input.component.tsx";

type DropdownProps = {
    variant: string;
    options: string[];
    value: string;
    placeholder: string;
    onClick: (value: string) => void;
    useSearch?: boolean;
};

const Dropdown = ({ variant, options, value, placeholder, onClick, useSearch }: DropdownProps) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));

    useOnClickOutside(ref, () => setShow(false));

    return (
        <div ref={ref} className="dropdown-wrapper">
            <div  className="dropdown" onClick={() => setShow(true)}>
                {value !== "" ? value : placeholder}
                {show? <ChevronUp /> : <ChevronDown />}
            </div>
            <div className={`dropdown-options ${show ? 'visible' : 'hidden'} ${variant}`}>
                {useSearch && (
                    <div className="dropdown-search-wrapper">
                        <Input
                            id="dropdown-search"
                            variant="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                )}
                {filteredOptions.map((option) => (
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
        </div>
    );
};

export default Dropdown;