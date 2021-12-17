import "./about.css";
import profil2 from '../../img/profil2.png'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={profil2}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I graduated from Baku State University. I always like to learn new
          technological knowledge and do fitness. I always plan everything at
          the beginning of the day and continue my day accordingly.
        </p>
      </div>
    </div>
  );
};

export default About;
