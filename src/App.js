import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Instruction from "./Components/Instruction";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/3D-RoboTracker" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instruction" element={<Instruction />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
