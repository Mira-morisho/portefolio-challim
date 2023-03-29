// import logo from "./logo.svg";
import "./App.css";
import Header from "./Composants/organisms/Header";
import Acceuil from "./Composants/organisms/Acceuil";
import Video from "./Composants/molecules/Video";
import ProfilChallim from "./Composants/organisms/ProfilChallim";
import Portefolio from "./Composants/organisms/Portefolio";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PortefolioDetail from "./Composants/pages/PortefolioDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="premierepage">
          <Header />
          <Acceuil />
          <Video />
          <ProfilChallim />
          <Portefolio />
        </div>
        <div className="dexiemepage">
          <PortefolioDetail />
        </div>
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} />
          <Route path="/black-t-shirt/16996520" element={<Clothes />} />
          <Route path="/anti-skid-doormat/12290388" element={<Doormats />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
