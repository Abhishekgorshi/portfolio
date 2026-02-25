const Certificates = () => {
  return (
    <section className="section certificates">
      <h2 className="section-title">My Certificates</h2>

      <div className="certificate-list">

        <div className="certificate-card">
          <a href="/images/Abhishek_MERN_certificate.jpg" target="_blank">
            <img src="/images/Abhishek_MERN_certificate.jpg" alt="MERN certificate" />
            <div className="overlay">
              <p>MERN Stack Certificate</p>
            </div>
          </a>
        </div>

        <div className="certificate-card">
          <a href="/images/Abhishek_Btech_certificate.png" target="_blank">
            <img src="/images/Abhishek_Btech_certificate.png" alt="BTech certificate" />
            <div className="overlay">
              <p>B.Tech Graduation Certificate</p>
            </div>
          </a>
        </div>

        <div className="certificate-card">
          <a href="/images/Abhishek_Java_certificate.jpg" target="_blank">
            <img src="/images/Abhishek_Java_certificate.jpg" alt="Java certificate" />
            <div className="overlay">
              <p>Java Certificate</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
