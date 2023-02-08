import data from "./moch.json"
import { useState, useEffect } from 'react'
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('task')) || []
  const [tasks, setTasks] = useState(initialState)
  useEffect(() =>{
    window.localStorage.setItem('task', JSON.stringify(tasks))
  }, [tasks])
  // const [tasks, setTasks] = useState(data)

  return (
    <BrowserRouter>
      <div className = "wrapper">
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  )
}

export default App