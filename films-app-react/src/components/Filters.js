import Select from "./Select"
import Genres from "./Genres"
import PaginationBlock from "./PaginationBlock"

const Filters = () => {
  return (
    <div className='filters'>
      <div>
        <span>Filters</span>
        <span>x</span>
      </div>
      <Select />
      <Genres />
      <PaginationBlock />
    </div>
  )
}

export default Filters