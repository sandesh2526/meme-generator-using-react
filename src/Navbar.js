import troll from "./troll-face-meme.ico"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img alt="A meme face" src={troll} />
            <h2>Meme Generator</h2>
            <h4>The Meme Project</h4>
        </nav>
    );
}