import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import Answer from './components/Answer'

function App() {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

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
