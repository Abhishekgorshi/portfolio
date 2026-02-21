function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container">

        <div className="footer-left">
          <h3>Abhishek Gorshi</h3>
          <p>MERN Stack Developer</p>
        </div>
       <div>
      <h4>Whatsapp</h4>
         <p> 8278345203</p>    </div>
        <div className="footer-links">
          <a href="https://github.com/Abhishekgorshi" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
          href="https://www.linkedin.com/in/abhishek-gorshi-4ab5b8233" target="_blank" rel="noreferrer">
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
