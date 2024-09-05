const ReturnButton = ({ setIsFormSubmitted }) => {
  const handleClick = () => {
    setIsFormSubmitted(false)
  }

  return (
    <button className='btn' onClick={handleClick}>
      Try again!
    </button>
  )
}

export default ReturnButton
