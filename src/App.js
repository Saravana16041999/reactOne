import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import "./App.css";
import "./pages/Dashboard.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Event from "./pages/Event";
import Shortcut from "./pages/Shortcut";
import Overview from "./pages/Overview";
import { createContext, useState } from "react";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export const Appcontext = createContext();

function App() {
  const [login, setlogin] = useState(false);
  return (
    <div className="App">
      <>
        <Appcontext.Provider value={{ setlogin }}>
          <Routes>
            <Route path="/" element={<Signin />} />
          </Routes>
        </Appcontext.Provider>
      </>
      <div>
        {login === true && (
          <>
            <Navbar />
            <Layout />
          </>
        )}
        <Routes>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Event" element={<Event />} />
          <Route path="Shortcut" element={<Shortcut />} />
          <Route path="Overview" element={<Overview />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
