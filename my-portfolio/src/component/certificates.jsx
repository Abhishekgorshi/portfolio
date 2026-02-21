const Certificates = () => {
  return (
    <section className="section certificates">
      <h2 className="section-title">My Certificates</h2>

      <div className="certificate-list">

        <div className="certificate-row">
        <a href="/images/Abhishek_MERN_certificate.jpg" target="blank">  <img src="/images/Abhishek_MERN_certificate.jpg" alt="MERN certificate" /></a>
          <p>MERN Stack Certificate</p>
        </div>

        <div className="certificate-row reverse">
          <a href="/images/Abhishek_Btech_certificate.png" target="blank">
          <img src="/images/Abhishek_Btech_certificate.png" alt="BTech certificate" /></a>
          <p>B.Tech Graduation Certificate</p>
        </div>

        <div className="certificate-row">
          <a href="/images/Abhishek_Java_certificate.jpg" target="blank">
          <img src="/images/Abhishek_Java_certificate.jpg" alt="Java certificate" /></a>
          <p>Java Certificate</p>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
