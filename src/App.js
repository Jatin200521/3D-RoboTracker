import Spline from "@splinetool/react-spline";
import "./Style.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="App">
        <Spline scene="https://prod.spline.design/Hzf0alncEtpS4fkw/scene.splinecode" />
      </div>
    </>
  );
}
