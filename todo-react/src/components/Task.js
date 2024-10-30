import { useContext, useState } from 'react'

import { Box, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField'
import DoneIcon from '@mui/icons-material/Done'

import { TasksContext, DispatchContext } from '../tasks-context'
import { preventDefaultForm } from '../constants'

const Task = ({ name, isDone }) => {
  const tasks = useContext(TasksContext)
  const dispatch = useContext(DispatchContext)
  const [isEditing, setIsEditing] = useState(false)
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value)
  }

  const handleTaskChange = (e) => {
    preventDefaultForm(e, e.currentTarget.text)

    dispatch({ type: 'change', oldName: name, newName: taskName })
    setIsEditing(false)
  }

  const handleDelete = (e) => {
    dispatch({ type: 'delete', name: name })
  }

  if (isEditing) {
    return (
      <form onSubmit={handleTaskChange}>
        <TextField
          variant='standard'
          label='New task name'
          fullWidth
          name='text'
          defaultValue={name}
          onChange={handleTaskNameChange}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton type='submit'>
                  <DoneIcon />
                </IconButton>
              ),
            },
          }}
        ></TextField>
      </form>
    )
  } else {
    return (
      <Box>
        <span>{name}</span>
        {!isDone && (
          <IconButton onClick={() => { setIsEditing(true) }}>
            <EditIcon />
          </IconButton>
        )}
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    )
  }
}

export default Task
