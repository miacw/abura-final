import "./App.css";
import { useState, useRef } from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  const [pageTitle, setPageTitle] = useState("Header");

  function updatePageTitle(title) {
    setPageTitle(title);
  }
  return (
    <div className="App">
      <Router>
        <Nav title={pageTitle} />
        <Routes>
          <Route
            path="/"
            element={<Landing setTitle={updatePageTitle} />}
          ></Route>
          <Route
            path="/about"
            element={<About setTitle={updatePageTitle} />}
            title="ABOUT"
          ></Route>
          <Route
            path="/contact"
            element={<Contact setTitle={updatePageTitle} />}
            title="CONTACT"
          ></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
