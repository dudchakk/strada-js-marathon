import { getGender } from '../constants'

const Form = ({ name, setGender, setName, setIsFormSubmitted }) => {
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let response = await getGender(name)
    setGender(response.gender || 'no gender :(')
    setIsFormSubmitted(true)
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Submit Name Form</h2>
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
