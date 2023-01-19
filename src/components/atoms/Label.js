import React from 'react'

function Label({id, children}) {
  return (
    <label htmlFor={id} className="form-label">{children}</label>
  )
}

export default Label;
