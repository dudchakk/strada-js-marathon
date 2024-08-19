const Answer = ({ name, answer = 'placeholder' }) => {
  return (
    <div className='window'>
      <div className='container'>
        <h2>Here will be your answer</h2>
        <p>
          <span>{name}</span>
          {' - '}
          <span>{answer}</span>
        </p>
      </div>
    </div>
  )
}

export default Answer