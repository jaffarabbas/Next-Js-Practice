import { Container, Snackbar , Alert } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import styles from '../styles/Home.module.css'
import { TodoContext } from './TodoContext'

export default function Home() {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const showAlert = (type, message) => {
    setAlert(type);
    setAlertMessage(message);
    setOpen(true);
  }

  const handleClose = (event,reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }
  return (
    <TodoContext.Provider value={{showAlert}}>
      <Container maxWidth="sm">
        <TodoForm />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:"top",horizontal:"center"}}>
          <Alert onClose={handleClose} severity={alert} sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>
        <TodoList />
      </Container>
    </TodoContext.Provider>
  )
}
