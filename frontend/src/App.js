import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Features from "./components/Features";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Hero />
      <Reservation />
      <Menu />
      <Features />
    </div>
  );
}

export default App;
