import ReturnButton from './ReturnButton'

const Answer = ({ name, gender, setIsFormSubmitted }) => {
  return (
    <div className='window'>
      <div className='container'>
        <div>
          <h2>Here is your answer</h2>
          <p>
            <span>{name}</span>
            {' - '}
            <span>{gender}</span>
          </p>
        </div>

        <ReturnButton setIsFormSubmitted={setIsFormSubmitted} />
      </div>
    </div>
  )
}

export default Answer
