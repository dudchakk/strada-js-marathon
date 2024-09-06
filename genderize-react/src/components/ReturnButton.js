const ReturnButton = ({ setIsFormSubmitted }) => {
  const handleClick = () => {
    setIsFormSubmitted(false)
  }

  return (
    <button className='btn' onClick={handleClick}>
      Submit another name!
    </button>
  )
}

export default ReturnButton
