import { Box, IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const Task = ({ name, isDone }) => {
  const handleDelete = (e) => {
    e.currentTarget.parentNode.remove()
  }

  return (
    <Box>
      <span>{name}</span>
      {!isDone && <IconButton>
        <EditIcon />
      </IconButton>}
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

export default Task