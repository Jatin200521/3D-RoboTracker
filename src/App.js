import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/3D-RoboTracker" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
