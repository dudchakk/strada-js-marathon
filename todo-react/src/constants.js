export const initialTasks = [
  {
    name: 'Make bed',
    isDone: false,
  },
  {
    name: 'Clean room',
    isDone: false,
  },
  {
    name: 'Watch YouTube',
    isDone: true,
  },
]

export const preventDefaultForm = (e, ...fields) => {
  e.preventDefault()

  for(let f of fields) {
    f.value = ''
    f.blur()
  }
}
