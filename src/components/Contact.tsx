import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2 className="section-title">CONTACT</h2>
        
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-info-block">
              <h4>Connect</h4>
              <p>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn — {portfolioData.contact.linkedin.split('/').pop()}
                </a>
              </p>
            </div>
            
            <div className="contact-info-block">
              <h4>Education</h4>
              <p>
                {portfolioData.education[0].degree}, {portfolioData.education[0].school} — {portfolioData.education[0].date}
              </p>
            </div>
          </div>

          <div className="contact-center">
            <h4>Social</h4>
            <ul className="social-links">
              <li>
                <a href={portfolioData.contact.github} target="_blank" rel="noreferrer">
                  GitHub <MdArrowOutward />
                </a>
              </li>
              <li>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <MdArrowOutward />
                </a>
              </li>
              <li>
                <a href={`mailto:${portfolioData.contact.email}`}>
                  Email <MdArrowOutward />
                </a>
              </li>
              {portfolioData.contact.leetcode && (
                <li>
                  <a href={portfolioData.contact.leetcode} target="_blank" rel="noreferrer">
                    LeetCode <MdArrowOutward />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="contact-right">
            <div className="developed-by">
              <p>Designed and Developed by</p>
              <h3>{portfolioData.name}</h3>
            </div>
            <div className="copyright">
              <MdCopyright /> 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
