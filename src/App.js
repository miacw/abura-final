import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import logo from "./public/content/well-red.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="landing-content">
        <div className="tagline-contents">
          <img
            src={logo}
            alt="well-logo-red.png"
            className="landing-well"
          ></img>
          <p className="tagline">
            A new cocktail and art bar celebrating the talents of the African
            diaspora.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
