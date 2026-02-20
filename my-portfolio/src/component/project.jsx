const Projects = () => {
  return (
    <section className="section projects">
      <h1 className="section-title">Projects</h1>

      <div className="project-grid">

        <div className="project-card">
          <h3>E-commerce Website</h3>
          <p>MERN stack based online shopping website with cart & login.</p>
          <a href="https://ecomproject-weld.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
        </div>

        <div className="project-card">
          <h3>Blog Website</h3>
          <p>CRUD blog app with authentication using Node.js & MongoDB.</p>
          <a href="/" target="_blank" rel="noreferrer">Live Demo</a>
        </div>

        <div className="project-card">
          <h3>Consulting Website</h3>
          <p>Business consulting responsive website with React.</p>
          <a href="/" target="_blank" rel="noreferrer">Live Demo</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
