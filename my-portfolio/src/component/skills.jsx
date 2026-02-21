const Skills = () => {
  return (
    <section className="section skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-list">

        <div className="skill-row">
          <img src="/images/nodelogo.jpg" alt="Node.js" />
          <div>
            <h3>Node.js</h3>
            <p>Backend APIs, authentication & server-side development.</p>
          </div>
        </div>

        <div className="skill-row reverse">
          <img src="/images/reactlogo.jpg" alt="React.js" />
          <div>
            <h3>React.js</h3>
            <p>Responsive UI, reusable components & modern frontend apps.</p>
          </div>
        </div>

        <div className="skill-row">
          <img src="/images/expresslogo.png" alt="Express.js" />
          <div>
            <h3>Express.js</h3>
            <p>REST APIs, middleware & backend routing.</p>
          </div>
        </div>

        <div className="skill-row reverse">
          <img src="/images/mongodblogo.jpg" alt="MongoDB" />
          <div>
            <h3>MongoDB</h3>
            <p>NoSQL database design & data management.</p>
          </div>
        </div>

          <div className="skill-row reverse">
          <img src="/images/postmanlogo.png" alt="PostMan" />
          <div>
            <h3>PostMan</h3>
            <p>A comprehensive API platform for building, testing, documenting, and managing API</p>
          </div>
        </div>
 
       <div className="skill-row reverse">
          <img src="/images/nodemailerlogo.jpg" alt="NodeMailer" />
          <div>
            <h3>NodeMailer</h3>
            <p>Most popular email sending library for Node.js.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
