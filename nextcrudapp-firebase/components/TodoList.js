import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import TodoService from '../services/TodoService';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([])
  
  
  useEffect(() => {
    TodoService.getTodo('todos', setTodos)
  },[]);
  return (
    <div>
        {todos.map(todo => (
            <>
                <Todo 
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    timestamp={todo.timestamp}
                />
            </>
        ))}
    </div>
  )
}

export default TodoList