import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import Answer from './components/Answer'

function App() {
  const [name, setName] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  return (
    <div className='App'>
      {!isFormSubmitted ? (
        <Form
          name={name}
          setName={setName}
          isFormSubmitted={isFormSubmitted}
          setIsFormSubmitted={setIsFormSubmitted}
        />
      ) : (
        <Answer name={name} />
      )}
    </div>
  )
}

export default App
