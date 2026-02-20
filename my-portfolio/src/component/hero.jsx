import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="section hero">
      <div className="hero-text">
        <h1>Hi, I'm Abhishek Gorshi</h1>
        <p>Full Stack Developer | MERN Stack | React & Node.js</p>

        <div className="hero-buttons">
          <Link to="/aboutme" className="btn">About Me</Link>
          <Link to="/qualification" className="btn outline">
            Qualifications
          </Link>
        </div>
      </div>

      <div className="hero-img">
        <img src="/images/myImage.jpg" alt="Abhishek" />
      </div>
    </section>
  );
};

export default Hero;
