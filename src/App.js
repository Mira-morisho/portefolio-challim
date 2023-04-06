// import logo from "./logo.svg";
import "./App.css";
import Header from "./Composants/organisms/Header";
import Acceuil from "./Composants/organisms/Acceuil";
import Video from "./Composants/molecules/Video";
import ProfilChallim from "./Composants/organisms/ProfilChallim";
import Portefolio from "./Composants/organisms/Portefolio";
import PortefolioDetail from "./Composants/pages/PortefolioDetail";
import ProjetDetail from "./Composants/pages/ProjetDetail";
import Service from "./Composants/pages/Service";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="dexiemepage">{/* < */}</div>
        <div className="troisieme">{/* < */}</div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="premierepage">
              <Header />
              <Acceuil />
              <Video />
              <ProfilChallim />
              <Portefolio />
              <Service />
            </div>
          }
        />
        <Route path="/deuxieme" element={<PortefolioDetail />} />
        <Route path="/troisieme" element={<ProjetDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
