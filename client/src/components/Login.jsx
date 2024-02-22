import React from "react";

const Login = (props) => {
  const { handleLogin } = props;
  return (
    <div className="login aesthetic-modal">
      <div className="aesthetic-modal-title">
        <div className="aesthetic-title-text">
          aesthetic win95 css by torch2424
        </div>
      </div>
      <div className="aesthetic-modal-content">
        <form onSubmit={handleLogin} className="modal-form" action="">
          <label htmlFor="">Login</label>
          <br />
          <br />
          <input className="modal-form" type="text" />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <br />
          <input className="modal-form" type="text" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
