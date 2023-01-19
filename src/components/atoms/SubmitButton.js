import React from 'react'

function SubmitButton({children}) {
  return (
    <button type="submit" className="button">{children}</button>
  )
}

export default SubmitButton;
