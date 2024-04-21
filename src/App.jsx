import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainHome d-flex">
        <Aside />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
