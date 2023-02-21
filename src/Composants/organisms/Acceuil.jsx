import "../../styles/Header.css";
import Name from "../molecules/Name";
import Video from "../atoms/Video";

export default function Acceuil() {
  return (
    <div className="acceuil">
      <Name />
      <Video />
    </div>
  );
}
