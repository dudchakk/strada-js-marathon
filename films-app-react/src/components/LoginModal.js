import { preventDefaultForm } from '../constants/constants'
import { useState } from 'react'

import Button from '../ui/Button'

const LoginModal = ({ setIsLoginDispayed }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log('User is logged in successfully')
    console.log(`Username: ${username}`)
    console.log(`Password: ${password}`)

    preventDefaultForm(e, e.currentTarget.username, e.currentTarget.password)
    setIsLoginDispayed(false)
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Login Form</h2>
        <form name='login' onSubmit={handleSubmit}>
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
          <Button text='LOGIN' type='submit' />
        </form>
      </div>
    </div>
  )
}

export default LoginModal
