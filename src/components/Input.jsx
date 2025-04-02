
export default Input = ([
    field,
    label,
    value,
    onChageHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea 

]) => {

    const handleValueChange = (event) =>{
        onChageHandler(event.target.value, field);
    }

    const handleInputBlur = (event) =>{
        onBlurHandler(event.target.value, field);
    }


  return (
    <>
        <div className= "auth-form-label">
              <span>{label}</span>
        </div>
        <div>
          {textarea ? (
            <textarea
            type={type}
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
            rows={5}
            style={{maxWidth: '400px'}}
            />
          ) : (
            <input 
            type={type}
            value={value}
            onChange={handleValueChange}
            onBlur={handleValueChange}

            />
          )}

           <span className="auth-form-validation-message">
          { showErrorMessage && validationMessage}
           </span>
        </div>
    </>
  )
}
