import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const styles = {
   color:''
};

export const TodoCounter = () => {
  const {totalTodosList,totalCompletedTodos} = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <h1 style={styles} className="todoCounter">App de TODOS  ✨</h1>
      <h2 style={styles} className="todoCounter">Has completado {totalCompletedTodos} tareas de {totalTodosList}</h2>
    </React.Fragment>
  )
}
