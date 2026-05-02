import "./styles/Career.css";
import { portfolioData } from "../data/portfolioData";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {portfolioData.experience.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.date}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
          
          <h2 style={{ marginTop: '60px' }}>
            My <span>Education</span>
          </h2>
          {portfolioData.education.map((edu, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.school}</h5>
                </div>
                <h3>{edu.date}</h3>
              </div>
              <p>{edu.performance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
