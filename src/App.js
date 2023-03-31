// import logo from "./logo.svg";
import "./App.css";
import Header from "./Composants/organisms/Header";
import Acceuil from "./Composants/organisms/Acceuil";
import Video from "./Composants/molecules/Video";
import ProfilChallim from "./Composants/organisms/ProfilChallim";
import Portefolio from "./Composants/organisms/Portefolio";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PortefolioDetail from "./Composants/pages/PortefolioDetail";
import { render } from "@testing-library/react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        .<div className="dexiemepage">{/* < */}</div>
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
            </div>
          }
        />
        <Route path="/deuxieme" element={<PortefolioDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
