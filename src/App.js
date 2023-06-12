import { useState } from "react";
import "./App.css";
import { FaUserCircle } from "react-icons/fa";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const UserDetials = {
      id: "1",
      email,
      password,
    };
    setUser([...user, UserDetials]);
    localStorage.setItem("users", JSON.stringify(user));
  };

  return (
    <div className="App">
      <div className="main-container">
        <FaUserCircle className="user-logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter passsword"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button>Login</button>
        </form>
        <p>Forgot password?</p>
        <p>Not a member? Sign up now</p>
      </div>
    </div>
  );
}

export default App;
