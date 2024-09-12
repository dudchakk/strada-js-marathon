
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Genres = () => {
  return (
    <div>
      <div>Genres</div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label='Comedy'
        />
        <FormControlLabel
          control={<Checkbox />}
          label='Action'
        />
        <FormControlLabel
          control={<Checkbox />}
          label='Drama'
        />
      </FormGroup>
    </div>
  )
}

export default Genres