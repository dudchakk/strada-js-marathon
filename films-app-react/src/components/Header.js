import { useState } from 'react'

import { IconButton, Paper } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'

const Header = ({ title }) => {
  const [isLoginDispayed, setIsLoginDispayed] = useState(false)
  const isRegistered = false

  return (
    <>
      <Paper>
        <header>
          <div>{title}</div>
          <IconButton
            color='inherit'
            sx={{ marginRight: '20px' }}
            onClick={() => setIsLoginDispayed(true)}
          >
            <AccountCircleIcon />
          </IconButton>
        </header>
      </Paper>
      {isLoginDispayed &&
        (isRegistered ? (
          <LoginModal setIsLoginDispayed={setIsLoginDispayed} />
        ) : (
          <RegisterModal setIsLoginDispayed={setIsLoginDispayed} />
        ))}
    </>
  )
}

export default Header
