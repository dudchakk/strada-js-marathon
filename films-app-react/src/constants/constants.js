export const sortByItems = [ 'Popularity', 'Number of ratings', 'Runtime']
export const releaseYearItems = []

for(let i = 1990; i < 2024; i++) {
  releaseYearItems.push(i)
}

export const preventDefaultForm = (e, ...fields) => {
  e.preventDefault()

  for(let f of fields) {
    f.value = ''
    f.blur()
  }
}