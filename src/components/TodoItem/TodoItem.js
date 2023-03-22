import React from 'react'
import './TodoItem.css'

export const TodoItem = (props) => {
 return (
    <React.Fragment>
      <section>
        <li className='item'>
              <input 
                className={props.complete ? 'icon checked':'icon check'}
                type="checkbox"
                onClick={ props.onComplete } 
              />
              <p 
                className={props.complete ? 'item-p-completed':''}
              >
                  {props.text}
              </p>
              <button 
                className='icon icon-deleted'
                onClick={props.onDelete}
              >
                x
              </button>
        </li>
      </section>
    </React.Fragment>
  )
}
