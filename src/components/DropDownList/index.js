import React from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
`;

const Label = styled.label`
    color: var(--white-texts);
    margin-bottom: 0.2rem;
`;

const Picker = styled.select`
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
`;

const ErrorText = styled.span`
    color: var(--red-alerts);
    font-size: 0.875rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1rem;
    margin-top: 0.3rem;
`;

const DropDownList = ({ data, label, value, onChange, name, onBlur, error, errorText, required }) => {

    const onChanged = (evento) => {
        onChange(evento.target.value);
    }

    return (
        <DropDownContainer>
            <Label>{label}</Label>
            <Picker 
                value={value}
                onChange={onChanged}
                required={required}
                name={name}
                onBlur={onBlur}
                error={error}
            >
                <option>{''}</option>
                {data.map( (category) =>
                    <option key={category.id}>{category.attributes.title}</option>
                )}
            </Picker>
            <ErrorText>{errorText}</ErrorText>
        </DropDownContainer>
    );
};

export default DropDownList;