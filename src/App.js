// import logo from "./logo.svg";
// import "./App.css";
import Header from "./Composants/organisms/Header";
import Acceuil from "./Composants/organisms/Acceuil";
import Video from "./Composants/molecules/Video";
import ProfilChallim from "./Composants/organisms/ProfilChallim";
import Portefolio from "./Composants/organisms/Portefolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Acceuil />
      <Video />
      <ProfilChallim />
      <Portefolio />
    </div>
  );
}

export default App;
