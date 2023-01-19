import React from 'react'

function InputText({id, placeholder, onChange, value}) {
  return (
    <input type="text" className="input" id={id} placeholder={placeholder} onChange={onChange} value={value} autoComplete="off" />
  )
}

export default InputText;
