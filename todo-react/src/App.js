import { useReducer } from 'react'

import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import { initialTasks } from './constants'
import { tasksReducer } from './tasks-reducer'
import { TasksContext, DispatchContext } from './tasks-context'

import './App.css'

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        <div className='App'>
          <div className='container'>
            <h2>TODO</h2>
            <AddTask />
            <Tasks />
          </div>
        </div>
      </DispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export default App
