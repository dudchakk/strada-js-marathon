import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const CheckboxListBlock = ({ listItems }) => {
  const checkboxItems = listItems.slice(0, 7).map((item) => (
    <FormControlLabel key={item.id} control={<Checkbox />} label={item.name} />
  ))

  return (
    <div>
      <div>Genres</div>
      <FormGroup>{checkboxItems}</FormGroup>
    </div>
  )
}

export default CheckboxListBlock
