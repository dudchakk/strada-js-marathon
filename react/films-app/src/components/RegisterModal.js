import { preventDefaultForm } from "../constants";

const RegisterModal = () => {
  const handleSubmit = (e) => {
    console.log("User is registered successfully");
    console.log(`Username: ${e.currentTarget.username.value}`);
    console.log(`Password: ${e.currentTarget.password.value}`);

    preventDefaultForm(e, e.currentTarget.username, e.currentTarget.password);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Register Form</h2>
        <form name="register" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Password" name="password" />
          <input type="submit" value="REGISTER" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
