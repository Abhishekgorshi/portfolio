import Footer from "../component/footer";
import NavBar from "../component/nav";

function Qualifications() {
  return (
    <div className="qualifications-page">
      <NavBar />

      <section className="qualification-container">
        <h1>My Qualifications</h1>

        <div className="qualification-card">
          <h3>🎓 Schooling</h3>from<h4><a href="https://sksgurukulschool.com/" target="blank">Sks International Gurukul Kurukshetra</a></h4>
          <p>Completed 10th & 12th with Science Stream.</p>
          <p><a href="/images/Abhishek_12th_certificate.jpg" download>certificate</a></p>
        </div>

        <div className="qualification-card">
          <h3>👨‍🎓 Graduation</h3>from<h4><a href="https://www.cuchd.in/" target="blank">Chandigarh university</a></h4>
          <p>B.Tech in Computer Science Engineering</p>
              <p><a href="/images/Abhishek_Btech_certificate.png" download>certificate</a></p>
        </div>

        <div className="qualification-card">
          <h3>💻 MERN Stack Training</h3>from
          <h4><a href="https://wavyinformatics.com/" target="blank">Wavy informatics</a></h4>
          <p>Completed 4-month MERN Stack Training with projects.</p>
              <p><a href="/images/Abhishek_MERN_certificate.jpg" download>certificate</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Qualifications;
