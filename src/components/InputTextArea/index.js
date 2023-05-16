import React from "react";
import styled from "styled-components";

const TextAreaContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
`;

const Label = styled.label`
    color: var(--white-texts);
    margin-bottom: 0.2rem;
`;

const FieldTextArea = styled.textarea`
    background-color: var(--bg-fields);
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    height: 80px;
    padding: 0.7rem 1rem;
    width: 100%;
    
    :focus {
        outline: none;
    }

    ::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-size: 1rem;
    }
`;

const InputTextArea = ({ label, value, onChange, placeholder, required }) => {

    const onChanged = (evento) => {
        onChange(evento.target.value);
    };

    return (
        <TextAreaContainer>
            <Label>{label}</Label>
            <FieldTextArea
                value={value}
                onChange={onChanged}
                placeholder={placeholder}
                required={required}
            />
        </TextAreaContainer>
    );
};

export default InputTextArea;