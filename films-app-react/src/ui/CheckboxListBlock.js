import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const CheckboxListBlock = ({ listItems, checkedGenres, dispatch }) => {

  const handleChecked = (id) => {
    dispatch({ 
      type: 'check_genre',
      id: id
    })
  }

  const checkboxItems = listItems
    .slice(0, 5)
    .map((item) => (
      <FormControlLabel
        key={item.id}
        control={
          <Checkbox
            checked={checkedGenres.includes(item.id)}
            onClick={() => handleChecked(item.id)}
          />
        }
        label={item.name}
      />
    ))

  return (
    <div>
      <div>Genres</div>
      <FormGroup>{checkboxItems}</FormGroup>
    </div>
  )
}

export default CheckboxListBlock
