import React, { FC, ChangeEvent } from "react";

interface InputProps {
    label?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
    className?: string;
    [key: string]: any;
}

const InputDefault: FC<InputProps> = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    error,
    className,
    ...rest
}) => {
    return (
        <div className={`input-container ${className}`}>
            {label && <label htmlFor={name} className="input-label">{label}</label>}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`ìnput-field ${error ? "input-error" : ""}`}
                {...rest}
            />
            {error && <span className="error-text">{error}</span>}
        </div>
    )
};