const Form = ({ name, setName, isFormSubmitted, setIsFormSubmitted }) => {
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log(name)

    e.preventDefault()
    e.currentTarget.name.value = ''
    e.currentTarget.name.blur()

    setIsFormSubmitted(true)
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Login Form</h2>
        <form name='form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter a name'
            name='name'
            onChange={handleNameChange}
          />
          <input type='submit' value='SUBMIT' className='btn' />
        </form>
      </div>
    </div>
  )
}

export default Form
