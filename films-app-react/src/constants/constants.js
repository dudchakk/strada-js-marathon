export const films = [
  {
    name: 'Matrix',
    rating: 9,
    img: '/kGzFbGhp99zva6oZODW5atUtnqi.jpg'
  },
  {
    name: 'Terminator 2',
    rating: 9,
    img: ''
  },
  {
    name: 'Green Mile',
    rating: 9,
    img: ''
  },
  {
    name: 'Terminator 3',
    rating: 9,
    img: ''
  },
]

export const sortByItems = [ 'Popularity', 'Number of ratings', 'Runtime']

export const preventDefaultForm = (e, ...fields) => {
  e.preventDefault()

  for(let f of fields) {
    f.value = ''
    f.blur()
  }
}