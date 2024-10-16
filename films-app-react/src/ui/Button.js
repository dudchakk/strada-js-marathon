const Button = ({ text, handleClick = undefined, type = 'button' }) => {
  return (
    <button onClick={handleClick} type={type}>
      {text}
    </button>
  )
}

export default Button