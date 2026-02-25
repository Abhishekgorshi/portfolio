const Projects = () => {
  return (
    <section className="section projects">
      <h1 className="section-title">Projects</h1>

      <div className="project-grid">

        <div className="project-card">
          <h3>E-commerce Website</h3>
          <p>MERN stack based online shopping website with cart & login.</p>
          <a href="https://ecomproject-weld.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>

           <a className="source" href="https://github.com/Abhishekgorshi/ecomproject/" target="_blank" rel="noreferrer">Github Code</a>
        </div>

        <div className="project-card">
          <h3>Blog Website</h3>
          <p>CRUD blog app with authentication using Node.js & MongoDB.</p>
          <a href="https://blogproject-five-alpha.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>

          <a className="source" href="https://github.com/Abhishekgorshi/blogproject" target="_blank" rel="noreferrer">Github Code</a>
        </div>

        <div className="project-card">
          <h3>Consulting Website</h3>
          <p>Business consulting responsive website with React.</p>
          <a href="http://consultingproject.vercel.app" target="_blank" rel="noreferrer">Live Demo</a><span>

         <a className="source" href="https://github.com/Abhishekgorshi/consultingproject" target="_blank" rel="noreferrer">Github Code</a></span>
       </div>
      </div>
    </section>
  );
};

export default Projects;
