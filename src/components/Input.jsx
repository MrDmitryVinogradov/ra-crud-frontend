import React from 'react'

function Input({ handleSubmit, handleChange }) {
  return (
    <div className='new-note'>
      New Note
      <form className='form' onSubmit={handleSubmit}>
        <textarea className='form-input' onChange={handleChange}>
        </textarea>
        <button className='form-button'>
        </button>
      </form>
    </div>
  )
}

export default Input
