import { preventDefaultForm } from '../constants/constants'
import { useState } from 'react'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import ButtonComponent from '../ui/Button'

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
    <Box className='modal'>
      <Box className='modal-content'>
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            variant='standard'
            type='text'
            label='Username'
            name='username'
            required
            fullWidth
            onChange={handleUsernameChange}
          />
          <TextField
            variant='standard'
            type='text'
            label='Password'
            name='password'
            required
            fullWidth
            onChange={handlePasswordChange}
          />
          <ButtonComponent text='REGISTER' type='submit' />
        </form>
      </Box>
    </Box>
  )
}

export default RegisterModal
