export const sortByItems = [ 'Popularity', 'Number of ratings']

export const preventDefaultForm = (e, ...fields) => {
  e.preventDefault()

  for(let f of fields) {
    f.value = ''
    f.blur()
  }
}