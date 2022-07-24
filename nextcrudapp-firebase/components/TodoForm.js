import { TextField, Button } from '@mui/material'
import TodoService from '../services/TodoService';
import React, { useContext, useState } from 'react'
import { TodoContext } from '../pages/TodoContext';

const TodoForm = () => {
    const [todo, setTodo] = useState({ title: '', description: '' })
    const {showAlert} = useContext(TodoContext);

    const SubmitForm = async () => {
        const postTodo = await TodoService.postTodo('todos', todo);
        setTodo({ title: '', description: '' });
        showAlert('success',`Todo added successfully. ID: ${postTodo.id}`);
    }

    return (
        <div>
            <TextField fullWidth label="title" margin="normal"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <TextField fullWidth label="details" multiline maxRows={4}
                value={todo.description}
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />
            <Button onClick={SubmitForm} variant='contained' sx={{ mt: 3 }}>Add new Todo</Button>
        </div>
    )
}

export default TodoForm