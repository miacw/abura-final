import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [pageTitle, setPageTitle] = useState("Header");

  function updatePageTitle(title) {
    setPageTitle(title);
  }

  const [definition, setDefinition] = useState(false);
  const [abura, setAbura] = useState(false);
  // function toggleDefinition() {
  //   if (definition) {
  //     setDefinition(false);
  //   } else {
  //     setDefinition(true);
  //   }
  // }

  // useEffect(() => {
  //   // const timer = setTimeout(() => {
  //   //   if (!definition) {
  //   //     setDefinition(true);
  //   //   }
  //   // }, 5000);
  //   setDefinition(false);
  //   return clearTimeout(timer);
  // }, [definition]);

  function closeModal() {
    setDefinition(true);
    setTimeout(() => {
      setDefinition(false);
    }, 6000);
  }

  function closeAbura() {
    setAbura(true);
    setTimeout(() => {
      setAbura(false);
    }, 6000);
  }

  return (
    <div className="App">
      <Router>
        <Nav
          title={pageTitle}
          toggleDefinition={closeModal}
          toggleAbura={closeAbura}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                setTitle={updatePageTitle}
                definition={definition}
                abura={abura}
              />
            }
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
