const RegisterModal = () => {
	return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Register Form</h2>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="text" placeholder='Password'/>
          <input type="button" value='REGISTER' className="btn"/>
        </form>
      </div>
    </div>
  )
}

export default RegisterModal