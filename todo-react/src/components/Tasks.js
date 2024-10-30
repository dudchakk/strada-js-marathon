import { useContext } from 'react'

import Task from './Task'

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
      <h3>Planned ({tasksPlanned.length})</h3>
      {tasksPlanned}
      <h3>Done ({tasksDone.length})</h3>
      {tasksDone}
    </>
  )
}

export default Tasks
