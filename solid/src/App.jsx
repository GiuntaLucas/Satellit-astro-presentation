import logo from "./logo.svg";
import styles from "./App.module.css";
import { Routes, Route } from "@solidjs/router"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import ScrollTrop from "./components/ScrollTop";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
      <Footer/>
      <ScrollTrop/>
    </>
  );
}

export default App;
