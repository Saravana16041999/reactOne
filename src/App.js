import { useState } from "react";
import "./App.css";
import { AiFillAccountBook } from "react-icons/ai";

function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <div className="App">
      <div className="main-container">
        <AiFillAccountBook />
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
          <button>Signin</button>
        </form>
        Forgot password? Not a member? Sign up now
      </div>
    </div>
  );
}

export default App;
