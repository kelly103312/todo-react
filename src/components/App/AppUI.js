import React from 'react';
import {TodoContext} from '../TodoContext';
import { TodoSearch} from '../TodoSearch/TodoSearch';
import { TodoCounter} from '../TodoCounter/TodoCounter';
import { TodoList} from '../TodoList/TodoList';
import { TodoItem} from '../TodoItem/TodoItem';
import { CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import {TodosError} from '../TodosError/TodosError';
import {TodosLoading} from '../TodosLoading/TodosLoading';
import {EmptyTodos} from '../EmptyTodos/EmptyTodos';

{/* Permite enviar las respectivas propiedades al componente */}
export const AppUI = () => {
  const {searchTodos,completeTodo,deleteTodo,
    openModal,
    setOpenModal,error,
    loading} = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch></TodoSearch>
        <TodoList>
                {error && <TodosError error={error}></TodosError>}
                {loading && <TodosLoading></TodosLoading>}
                {(!loading && !searchTodos.length) && <EmptyTodos></EmptyTodos>}
                {searchTodos.map(todo => (
                    <TodoItem 
                        complete={todo.completed} 
                        key={todo.text} 
                        text={todo.text} 
                        onComplete={()=>completeTodo(todo.text)} 
                        onDelete={()=>deleteTodo(todo.text)} 
                    />
                  ))}
        </TodoList>
        {openModal && (
          <Modal>
            <TodoForm></TodoForm>
          </Modal>
        )}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
    </React.Fragment>
  )
}
