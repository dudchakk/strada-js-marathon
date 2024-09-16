import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const SelectBlock = ({ title, value, listItems, handleChange }) => {
  const menuItems = listItems.map((item) => (
    <MenuItem key={item} value={item}>{item}</MenuItem>
  ))

  return (
    <div>
      <FormControl variant='standard' sx={{ minWidth: '100%' }}>
        <InputLabel>{title}</InputLabel>
        <Select value={value} onChange={handleChange} label={title}>
          {menuItems}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectBlock
