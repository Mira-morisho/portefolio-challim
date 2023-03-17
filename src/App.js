import logo from "./logo.svg";
import "./App.css";
import Header from "./Composants/organisms/Header";
import Acceuil from "./Composants/organisms/Acceuil";
import Video from "./Composants/molecules/Video";
import ProfilChallim from "./Composants/organisms/ProfilChallim";

function App() {
  return (
    <div className="App">
      <Header />
      <Acceuil />
      <Video />
      <ProfilChallim />
    </div>
  );
}

export default App;
