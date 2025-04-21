import { useState } from "react";
import {
    validatePasswordMessage,
    validatePassword
} from '../../shared/validators'

import { useChangePassword } from "../../shared/hooks";
import { Input } from '../Input'
import { preconnect } from "react-dom";

const inputs =[
    {
        field: 'password',
        label: 'password',
        validationMessage: validatePasswordMessage,
        type: 'password'
    },
    {
        field: 'newPassword',
        label: 'New password',
        validationMessage: validatePasswordMessage,
        type: 'password'
    }
]

export const PasswordSettings = () =>{
    const [ formState, setFormState ] = useState({
        password: {
            isValid: false,
            showError: false,
            value: ''
        },
        newPassword: {
            isValid: false,
            showError: false,
            value: ''
        }
    })

    const { changePassword } = useChangePassword();

    const handleInputValueChange = (value, field) =>{
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) =>{
        let isValid = validatePassword(value)

        setFormState((prevState) =>({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const isSubmitButtonDisabled = !formState.password.isValid || !formState.newPassword.isValid

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        changePassword(formState.password.value, formState,newPassword.value)
    }

    return(
        <form className="setting-form">
            {inputs.map((input) => (
                <Input
                    key={input.fiel}
                    field={input.fiel}
                    label={input.fiel}
                    value={formState[input.fiel].value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={onBlurHandler}
                    showErrorMessage={formState[input.fiel].showError}
                    validationMessage={input.validationMessage}
                    type={input.type}
                    textArea={input.textArea}
                />
            ))}
            <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
                Update password

            </button>
        </form>
    )
}