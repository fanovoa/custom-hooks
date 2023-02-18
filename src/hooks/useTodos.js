import  { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';

const initialSate = [];

const init = () => {

    return JSON.parse(localStorage.getItem('todos') ) || [];
}


export const useTodos = () => {
  
    const [ todos , dispatchTodo ] = useReducer( todoReducer , initialSate, init);

    useEffect(() => {
     
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])
    

    const handlerNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodo( action );
    }

    const handlerDeleteTodo = ( id ) => {
        
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handlerToggleTodo  = ( id ) => {

        // console.log( id )
        
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return {
        todosCount:todos.length,
        pendingTodosCount:todos.filter(todo => !todo.done).length,
        todos,
        handlerDeleteTodo,
        handlerToggleTodo,
        handlerNewTodo
    }
}
