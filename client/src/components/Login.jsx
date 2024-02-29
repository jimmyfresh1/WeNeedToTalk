import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});

  const { handleLogin } = props;

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    const tempObject = { login, password };
    axios
      .post("http://localhost:9999/api/login", tempObject)
      .then((res) => {
        console.log(res);
        if (res.data == "Success") {
          handleLogin();
        } else {
          setErrors(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login aesthetic-modal">
      <div className="aesthetic-modal-title">
        {errors && errors.error && (
          <p style={{ color: "red", margin: 0 }}>{errors.error}</p>
        )}
        <div className="aesthetic-title-text">
          aesthetic win95 css by torch2424
        </div>
      </div>
      <div className="aesthetic-modal-content">
        <form className="modal-form" onSubmit={handleSubmit}>
          <label htmlFor="">Login</label>
          <br />
          <br />
          <input
            className="modal-form"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <br />
          <input
            className="modal-form"
            value={password}
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button>Submit</button>
          <div>
            <p style={{ marginTop: 5 }}>
              <Link style={{ fontSize: 14 }} to={"/register"}>
                Don't Have An Account?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
