import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

export const TodoSearch = () => {
  const {text, setText} = useContext(TodoContext);

  const textSearch = ( text ) => {
      setText(text);
  }
  return (
    <div className='search'>
      <input 
        value={text}
        placeholder='Buscar'
        onChange={ e=>{ textSearch(e.target.value) } }
      />
    </div>
  )
}
