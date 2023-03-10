import logo from "./logo.svg";
import "./App.css";
import Header from "./Composants/organisms/Header";
import Acceuil from "./Composants/organisms/Acceuil";
import Video from "./Composants/molecules/Video";

function App() {
  return (
    <div className="App">
      <Header />
      <Acceuil />
      <Video />
    </div>
  );
}

export default App;
