import { preventDefaultForm } from '../constants'
import { useState } from 'react'

import Button from '../ui/Button'

const RegisterModal = ({ setIsLoginDispayed }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log('User is registered successfully')
    console.log(`Username: ${username}`)
    console.log(`Password: ${password}`)

    preventDefaultForm(e, e.currentTarget.username, e.currentTarget.password)
    setIsLoginDispayed(false)
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={handleUsernameChange}
          />
          <input
            type='text'
            placeholder='Password'
            name='password'
            onChange={handlePasswordChange}
          />
          <Button text='REGISTER' type='submit' />
        </form>
      </div>
    </div>
  )
}

export default RegisterModal
