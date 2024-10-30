import { createContext } from 'react'

import { initialTasks } from './constants'

export const TasksContext = createContext(initialTasks)
export const DispatchContext = createContext(null)
