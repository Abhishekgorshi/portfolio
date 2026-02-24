import Footer from "../component/footer";
import NavBar from "../component/nav";

function AboutMe() {
  return (
    <>
      <NavBar />

      <section className="section about">
        <div className="about-container">

          <div className="about-image">
            <img src="/images/myImage.jpg" alt="Abhishek" />
          </div>

          <div className="about-content">
            <h2>About Me</h2>
            <h3>Abhishek Gorshi</h3>

            <p>
              I am a 23-year-old MERN Stack Developer passionate about
              building responsive and scalable web applications.
              I enjoy solving problems and learning new technologies.
            </p>
            <p>Btech CSE student with strong knowledge of MERN stack.
Built 3+ full-stack projects.
Interested in backend & problem solving.
Currently improving DSA & system design.
</p>

            <div className="about-info">
              <p><strong>Email:</strong> abhishekgorshi76@gmail.com </p>
              <p><strong>Contact number: </strong> 8278345203</p>
            </div>

            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutMe;
