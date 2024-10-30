import { Icon, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

const AddTask = ({ addTask, changeTaskName }) => {
  return (
    <form onSubmit={addTask}>
      <TextField
        variant='standard'
        label='New task name'
        fullWidth
        name='text'
        onChange={changeTaskName}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type='submit'>
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
