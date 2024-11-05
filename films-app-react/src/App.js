import Header from './components/Header'
import Filters from './components/Filters'
import Films from './components/Films'

import { Box } from '@mui/material'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <Box sx={{display: 'flex', height: 'calc(100% - 105px)', margin: '20px', justifyContent: 'space-between' }}>
        <Filters />
        <Films />
      </Box>
    </div>
  )
}

export default App
