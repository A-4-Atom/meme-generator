import trollFace from "../assets/trollFace.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="troll face" className="header-image" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-name">Vikas Chauhan</h4>
    </header>
  );
}
