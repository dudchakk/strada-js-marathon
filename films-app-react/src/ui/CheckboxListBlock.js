import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const CheckboxListBlock = ({ listItems }) => {
  const checkboxItems = listItems.map((item) => (
    <FormControlLabel control={<Checkbox />} label={item} />
  ))

  return (
    <div>
      <div>Genres</div>
      <FormGroup>{checkboxItems}</FormGroup>
    </div>
  )
}

export default CheckboxListBlock
