const Modal = () => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Login Form</h2>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="text" placeholder='Password'/>
          <input type="button" value='LOGIN' />
        </form>
      </div>
    </div>
  )
}

export default Modal