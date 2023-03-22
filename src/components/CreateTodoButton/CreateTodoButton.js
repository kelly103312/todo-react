import React from 'react'
import './CreateTodoButton.css'

export const CreateTodoButton = (props) => {
  const create = e =>{
    props.setOpenModal(!props.openModal);
    console.log(props.openModal);
  }
  return (
    <div className='create'>
      <button 
        className='button'
        onClick={ create }
      >
        +
      </button>
    </div>
  )
}
