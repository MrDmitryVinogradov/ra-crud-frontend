import React from 'react'

function Card({ body, id, handleRemove }) {
  return (
    <div className='card' id={id}>
      <div className='remover' onClick={handleRemove}></div>
      {body}
    </div>
  )
}

export default Card