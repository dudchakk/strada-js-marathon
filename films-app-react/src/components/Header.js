import { useState } from 'react'

import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'

const Header = () => {
  const [isLoginDispayed, setIsLoginDispayed] = useState(false)
  const isRegistered = false

  return (
    <header>
      <div>Films</div>
      <div onClick={() => setIsLoginDispayed(true)}>Login</div>
      {isLoginDispayed &&
        (isRegistered ? (
          <LoginModal setIsLoginDispayed={setIsLoginDispayed} />
        ) : (
          <RegisterModal setIsLoginDispayed={setIsLoginDispayed} />
        ))}
    </header>
  )
}

export default Header
