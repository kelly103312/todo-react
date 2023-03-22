import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODO_V1', []);
    const [text,setText] = useState('');

    const [openModal, setOpenModal] = useState(false);
    {/* Calcula los counter del todo */}
    const totalCompletedTodos = todos.filter((todo) => todo.completed == true).length;
    const totalTodosList = todos.length;

    let searchTodos = [];

    {/* Muestra la lista de todos dependiendo de si se está buscando algo o no */}
    if(text.length == 0){
        searchTodos = todos;
    }else{
        searchTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const valuetext = text.toLowerCase();
        return todoText.includes(valuetext);
        });
    }
    {/* Permite completar un item de la lista de todos */}
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const todoTmp=[...todos];
        if(todoTmp[todoIndex].completed){
            todoTmp[todoIndex].completed=false;
        }else{
            todoTmp[todoIndex].completed=true;
        }
        saveTodos(todoTmp);
    
    }
    {/* Permite eliminar un item del todo list */}
    const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const todoTmp=[...todos];
        todoTmp.splice(todoIndex,1)
        saveTodos(todoTmp);
    }
    const addTodo = (text)=>{
        const newTodo = [...todos];
        newTodo.push({text:text, completed:false});
        saveTodos(newTodo);
    }
    return(
        <TodoContext.Provider value={{
            totalCompletedTodos,
            totalTodosList,
            text,
            setText,
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            loading,
            error
        }}>
           { props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };