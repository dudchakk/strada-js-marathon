import { useContext, useReducer } from 'react'

import { Box } from '@mui/material'

import Header from './components/Header'
import Filters from './components/Filters'
import Films from './components/Films'

import { initialValues, filtersReducer } from './constants/reducer'
import { FiltersContext, DispatchContext } from './constants/filtersContext'
import { UserContext } from './constants/userContext'

import './App.css'

function App() {
  const user = useContext(UserContext)
  const [filters, dispatch] = useReducer(filtersReducer, initialValues)

  return (
    <UserContext.Provider value={user}>
      <FiltersContext.Provider value={filters}>
        <DispatchContext.Provider value={dispatch}>
          <div className='App'>
            <Header />
            <Box
              sx={{
                display: 'flex',
                height: 'calc(100% - 105px)',
                margin: '20px',
                justifyContent: 'space-between',
              }}
            >
              <Filters />
              <Films />
            </Box>
          </div>
        </DispatchContext.Provider>
      </FiltersContext.Provider>
    </UserContext.Provider>
  )
}

export default App
