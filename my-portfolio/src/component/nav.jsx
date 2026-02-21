import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Abhishek</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/aboutme">About</Link>
        <Link to="/qualification">Qualifications</Link>

        <a
          href="https://github.com/Abhishekgorshi"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/abhishek-gorshi-4ab5b8233"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="/resume.pdf" download className="resume-btn">
          Resume
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
