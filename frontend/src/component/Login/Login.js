import { useState, useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState([]);
  const [user, SetUser] = useState({});

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (data.user) {
      localStorage.setItem("token", data.user);
      localStorage.setItem("name", data.name);
      alert("Login successful");
      window.location.href = "/product";
    } else {
      alert("Please check your username and password");
    }
  }

  function handleCallbackResponse(response) {
    console.log("ENCODE JWT TOKEN " + response.credential);
    var useObject = jwt_decode(response.credential);

    SetUser(useObject);
    console.log(useObject);

    localStorage.setItem("token", useObject.jti);
    localStorage.setItem("name", useObject.name);
    alert("Login successful");
    window.location.href = "/product";
  }
  function handleSignOut(event) {
    SetUser({});
  }

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={loginUser}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="form-control mt-1"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" value="Login">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="/register">SIGN UP?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
