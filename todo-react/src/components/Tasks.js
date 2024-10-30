import { useContext } from 'react'

import Task from './Task'
import CheckboxList from '../CheckboxList'

import { TasksContext, DispatchContext } from '../tasks-context'

const Tasks = () => {
  const tasks = useContext(TasksContext)
  
  const tasksPlanned = tasks
    .filter((task) => !task.isDone)
    .map((task) => (
      <Task key={task.name} name={task.name} isDone={task.isDone} />
    ))

  const tasksDone = tasks
    .filter((task) => task.isDone)
    .map((task) => (
      <Task key={task.name} name={task.name} isDone={task.isDone} />
    ))

  return (
    <>
      <h3>Planned</h3>
      {tasksPlanned}
      <h3>Done</h3>
      {tasksDone}
    </>
  )
}

export default Tasks
