import React, { useState } from 'react';
import "./formInput.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = () => {
        setFocused(true);
    }
    return (

        <div className="input-field">
            <input  {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)} focused={focused.toString()} required />
            <span>{errorMessage}</span>
        </div>


    );
};

export default FormInput;