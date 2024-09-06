import { useEffect, useState } from 'react'
import { getStorageName, getStorageGender } from './store'

import './App.css'
import Form from './components/Form'
import Answer from './components/Answer'

function App() {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  useEffect(() => {
    if (getStorageName()) {
      setName(getStorageName)
      setIsFormSubmitted(true)
    }
    if (getStorageGender) {
      setGender(getStorageGender)
      setIsFormSubmitted(true)
    }
  }, [])
  
  return (
    <div className='App'>
      {!isFormSubmitted ? (
        <Form
          name={name}
          setGender={setGender}
          setName={setName}
          isFormSubmitted={isFormSubmitted}
          setIsFormSubmitted={setIsFormSubmitted}
        />
      ) : (
        <Answer name={name} gender={gender} setIsFormSubmitted={setIsFormSubmitted}/>
      )}
    </div>
  )
}

export default App
