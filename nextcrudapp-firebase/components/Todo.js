import { ListItem,ListItemText,IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import moment from 'moment'
import React, { useContext } from 'react'
import { TodoContext } from '../pages/TodoContext'
import TodoService from '../services/TodoService'

const Todo = ({id,timestamp,title,description}) => {
  const { showAlert } = useContext(TodoContext);
  const deleteTodo = async (id,e) => {
    e.stopPropagation();
    await TodoService.deleteTodo('todos',id);
    showAlert('error',`Todo deleted successfully. ID: ${id}`);
  } 
  return (
    <ListItem
    sx={{mt:3,boxShadow: 3}}
    style={{backgroundColor: '#fff'}}
    secondaryAction={
      <>
        <IconButton onClick={e => deleteTodo(id,e)}>
          <DeleteIcon/>
        </IconButton>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
      </>
    }
    >
        <ListItemText primary={title} secondary={moment(timestamp).format("MMMM dd, yyyy")}/>
    </ListItem>
  )
}

export default Todo