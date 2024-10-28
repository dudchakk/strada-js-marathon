import { TextField } from "@mui/material"

const AddTask = () => {
  return(
    <form>
      <TextField
        variant='standard'
        label='New task name'
        fullWidth
      ></TextField>
    </form>
  )
}

export default AddTask