export const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...tasks,
        {
          name: action.name,
          isDone: false,
        },
      ]
    case 'change':
      return tasks.map((task) => {
        if (task.name === action.oldName) {
          return {
            ...task,
            name: action.newName,
          }
        } else {
          return task
        }
      })
    case 'check':
      return tasks.map((task) => {
        if (task.name === action.name) {
          return {
            ...task,
            isDone: !task.isDone,
          }
        } else {
          return task
        }
      })
    case 'delete':
      return tasks.filter((task) => task.name !== action.name)
    default:
      throw new Error('Unknown action type')
      return tasks
  }
}
