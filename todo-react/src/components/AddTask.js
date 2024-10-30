import { useContext, useState } from 'react'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

import { TasksContext, DispatchContext } from '../tasks-context'
import { preventDefaultForm } from '../constants'

const AddTask = () => {
  const tasks = useContext(TasksContext)
  const dispatch = useContext(DispatchContext)
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value)
  }

  const handleAddTask = (e) => {
    preventDefaultForm(e, e.currentTarget.text)

    dispatch({ type: 'add', name: taskName })
    setTaskName('')
  }

  return (
    <form onSubmit={handleAddTask}>
      <TextField
        variant='standard'
        label='New task name'
        fullWidth
        name='text'
        onChange={handleTaskNameChange}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type='submit' disabled={taskName.trim() === ''}>
                <AddIcon />
              </IconButton>
            ),
          },
        }}
      ></TextField>
    </form>
  )
}

export default AddTask
