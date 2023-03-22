import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

export const TodoForm = () => {
  const {addTodo,setOpenModal} = useContext(TodoContext);
  const [item,setItem] = useState('');
  const [state,setState] = useState(0);
  const onCancel = ()=>{
    setOpenModal(false);
  }
  const onSave = (e)=>{
    e.preventDefault();
    if(item.length > 1){
      addTodo(item);
      setOpenModal(false);
    }else{
      {/* 1:ERROR 0:NO HAY ERROR */}
      setState('1');
    }
  }
  const changeValue= (text,e)=>{
    setItem(text);
    if(text.length > 1){
      setState(0);
    }else{
      {/* 1:ERROR 0:NO HAY ERROR */}
      setState(1);
    }
    console.log(e)
  }
  return (
    <div className='back-form'>
        <label onClick={onCancel} className='close'> x </label>
        <form className='form' onSubmit={onSave}>
            <label> Crear TODO 📃</label>
            <textarea rows="10" cols="35" onChange={ (e)=>{changeValue(e.target.value,e)} } value={item}> </textarea>
            {state==1 && <label className='error'> Por favor ingrese una tarea </label>}
            <div className='button-content'>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Guardar</button>
            </div>
        </form>
    </div>
  )
}
