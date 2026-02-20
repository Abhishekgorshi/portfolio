function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container">

        <div className="footer-left">
          <h3>Abhishek Gorshi</h3>
          <p>MERN Stack Developer</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </div>

      </div>

      <p className="footer-copy">
        © 2026 Abhishek Gorshi. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
