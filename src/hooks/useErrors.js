import React, { useState } from "react";
import { validateTitle, validateVideoUrl, validateCategory } from "models/forms";

const useErros = () => {

    const validations = {
        title: validateTitle,
        urlVideo: validateVideoUrl,
        category: validateCategory,
    };

    const initialState = createInitialState(validations);

    const [errors, setErrors] = useState(initialState);

    const validateFields = (event) => {
        const { name, value } = event.target;
        const newState = { ...errors };
        newState[name] = validations[name](value);
        setErrors(newState);
    };

    const checkErrors = () => {
        for (let field in errors) {
            if(!errors[field].valid) {
                return false;
            }
        }
        return true;
    };

    return [errors, validateFields, checkErrors];
};

const createInitialState = (validations) => {
    const initialState = {};
    for (let field in validations) {
        initialState[field] = { valid: true, text: '' };
    }
    return initialState;
};

export default useErros;