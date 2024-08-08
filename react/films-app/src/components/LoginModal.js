import { preventDefaultForm } from "../constants";

const LoginModal = () => {
  const handleSubmit = (e) => {
    console.log("User is logged in successfully");
    console.log(`Username: ${e.currentTarget.username.value}`);
    console.log(`Password: ${e.currentTarget.password.value}`);

    preventDefaultForm(e, e.currentTarget.username, e.currentTarget.password);
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Login Form</h2>
        <form name="login" onSubmit={handleSubmit}>
          <input type="text" placeholder='Username' name="username"/>
          <input type="text" placeholder='Password' name="password"/>
          <input type="submit" value='LOGIN' className="btn"/>
        </form>
      </div>
    </div>
  )
}

export default LoginModal