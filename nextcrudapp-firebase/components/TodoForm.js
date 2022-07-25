import { TextField, Button } from '@mui/material'
import TodoService from '../services/TodoService';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { TodoContext } from '../pages/TodoContext';
import { serverTimestamp } from 'firebase/firestore';

const TodoForm = () => {
    const { showAlert, todo, setTodo } = useContext(TodoContext);
    const inputAreaRef = useRef(null);

    const SubmitForm = async () => {
        if (todo?.hasOwnProperty('timestamp')) {
            const updateTodo = {...todo , timestamp: serverTimestamp()};
            await TodoService.updateTodo('todos', todo.id, updateTodo);
            setTodo({ title: '', description: '' });
            showAlert('success', `Todo updated successfully. ID: ${todo.id}`);
        } else {
            const postTodo = await TodoService.postTodo('todos', todo);
            setTodo({ title: '', description: '' });
            showAlert('success', `Todo added successfully. ID: ${postTodo.id}`);
        }
    }

    useEffect(() => {
        const isClicked = e => {
            if (!inputAreaRef.current.contains(e.target)) {
                setTodo({ title: '', description: '' });
            }
        }
        document.addEventListener('mousedown', isClicked);
        return () => {
            document.removeEventListener('mousedown', isClicked);
        }
    }, []);

    return (
        <div ref={inputAreaRef}>
            <TextField fullWidth label="title" margin="normal"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <TextField fullWidth label="details" multiline maxRows={4}
                value={todo.description}
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />
            <Button onClick={SubmitForm} variant='contained' sx={{ mt: 3 }}>{todo?.hasOwnProperty('timestamp') ? 'Update Todo' : 'Add new Todo'}</Button>
        </div>
    )
}

export default TodoForm