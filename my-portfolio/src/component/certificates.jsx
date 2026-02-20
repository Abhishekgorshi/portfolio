import {Link} from 'react-router-dom';
const Certificates = () => {
  return (
    <section className="section certificates">
      <h2 className="section-title">My Certificates</h2>

      <div className="certificate-list">

        <div className="certificate-row">
        <Link to={"/images/Abhishek_MERN_certificate.jpg"}>  <img src="/images/Abhishek_MERN_certificate.jpg" alt="MERN certificate" /></Link>
          <p>MERN Stack Certificate</p>
        </div>

        <div className="certificate-row reverse">
          <img src="/images/Abhishek_Btech_certificate.png" alt="BTech certificate" />
          <p>B.Tech Graduation Certificate</p>
        </div>

        <div className="certificate-row">
          <img src="/images/Abhishek_Java_certificate.jpg" alt="Java certificate" />
          <p>Java Certificate</p>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
