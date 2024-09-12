const Select = () => {
  return (
    <div className='sort-by'>
      <div>Sort by:</div>
      <select>
        <option value='popularity'>Popularity</option>
        <option value='latest'>Latest</option>
      </select>
    </div>
  )
}

export default Select
