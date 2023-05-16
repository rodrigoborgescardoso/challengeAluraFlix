import React from "react";
import styled from "styled-components";

const FieldContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
`;

const Label = styled.label`
    color: var(--white-texts);
    margin-bottom: 0.2rem;
`;

const Field = styled.input`
    background-color: var(--bg-fields);
    border: ${ ( { error } ) => error ? '1px solid var(--red-alerts)' : 'none' };
    border-radius: 4px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    height: 40px;
    padding: 0 1rem;
    width: 100%;
    
    :focus {
        outline: none;
    }

    ::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-size: 1rem;
    }
`;

const ErrorText = styled.span`
    color: var(--red-alerts);
    font-size: 0.875rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1rem;
    margin-top: 0.3rem;
`;

const InputField = ({ label, type, value, onChange, placeholder, required, name, onBlur, error, errorText }) => {

    const onChanged = (evento) => {
        onChange(evento.target.value);
    };

    return (
        <FieldContainer>
            <Label>{label}</Label>
            <Field
                type={type}
                value={value}
                onChange={onChanged}
                placeholder={placeholder}
                required={required}
                name={name}
                onBlur={onBlur}
                error={error}
            />

            <ErrorText>{errorText}</ErrorText>
        </FieldContainer>
    );
};

export default InputField;