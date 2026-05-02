import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = portfolioData.name.split(" ");
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>DESIGNING THE FUTURE</h2>
            <h1>
              {nameParts[0]}
              <br />
              <span className="bold-name">{nameParts[1]}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Specializing in</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software Development</div>
              <div className="landing-h2-2">AI / ML Engineering</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Cloud Systems</div>
              <div className="landing-h2-info-1">Full Stack Dev</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
