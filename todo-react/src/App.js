import { useState } from 'react'

import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import { initialTasks, preventDefaultForm } from './constants'

import './App.css'

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value)
  }

  const handleAddTask = (e) => {
    preventDefaultForm(e, e.currentTarget.text)

    setTasks([...tasks, { name: taskName, isDone: false }])
    console.log(taskName)
  }

  return (
    <div className='App'>
      <div className='container'>
        <h2>TODO</h2>
        <AddTask addTask={handleAddTask} changeTaskName={handleTaskNameChange} />
        <Tasks tasks={tasks} />
      </div>
    </div>
  )
}

export default App
