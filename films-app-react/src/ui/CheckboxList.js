import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const CheckboxList = ({ title, listItems, checkedItems, handleChecked }) => {
  const checkboxItems = listItems
    .slice(0, 5)
    .map((item) => (
      <FormControlLabel
        key={item.id}
        control={
          <Checkbox
            checked={checkedItems.includes(item.id)}
            onClick={() => handleChecked(item.id)}
          />
        }
        label={item.name}
      />
    ))

  return (
    <div>
      <div>{title}</div>
      <FormGroup>{checkboxItems}</FormGroup>
    </div>
  )
}

export default CheckboxList
