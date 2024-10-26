import Button from '@mui/material/Button'

const ButtonComponent = ({
  text,
  handleClick = undefined,
  type = 'button',
}) => {
  return (
    <Button variant='outlined' color='black' type={type} onClick={handleClick}>
      {text}
    </Button>
  )
}

export default ButtonComponent
