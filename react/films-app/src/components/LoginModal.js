import { preventDefaultForm } from "../constants";
import { useState } from "react";

const LoginModal = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleCredentialsChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("User is logged in successfully");
    console.log(`Username: ${credentials.username}`);
    console.log(`Password: ${credentials.password}`);

    preventDefaultForm(e, e.currentTarget.username, e.currentTarget.password);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login Form</h2>
        <form name="login" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleCredentialsChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleCredentialsChange}
          />
          <input type="submit" value="LOGIN" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
