import React from 'react'
import './TodoList.css'

export const TodoList = (props) => {
  return (
    <div className='list-container'>
      <section className='todoList'>
            <ul className='list'>
                {props.children}
            </ul>
        </section>
    </div>
  )
}
