import { useRef, useState } from "react";
import "./styles/Certifications.css";
import { portfolioData } from "../data/portfolioData";
import { MdArrowOutward } from "react-icons/md";

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const renderCertCard = (title: string, items: any[]) => (
    <div className="bento-card">
      <div className="corner-accent tl"></div>
      <div className="corner-accent tr"></div>
      <div className="corner-accent bl"></div>
      <div className="corner-accent br"></div>
      
      <h3>{title}</h3>
      <div className="cert-items">
        {items.map((item, index) => (
          <div key={index} className="cert-sub-card">
            <div className="cert-info-main">
              <div className="status-pill">
                <span className="led-dot"></span>
                {item.status}
              </div>
              <p className="cert-item-title">{item.title}</p>
              <p className="cert-item-desc">{item.description}</p>
            </div>
            <a href={item.link} target="_blank" rel="noreferrer" className="cert-link">
              <MdArrowOutward />
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div 
      className="certifications-section section-container" 
      id="certifications"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="spotlight" style={{ left: mousePos.x, top: mousePos.y }}></div>
      
      <div className="certifications-container">
        <h2 className="section-title">
          MY <span>CERTIFICATIONS</span> & <br /> ACHIEVEMENTS
        </h2>
        
        <div className="bento-grid">
          {renderCertCard("MICROSOFT", portfolioData.certifications.microsoft)}
          {renderCertCard("ORACLE", portfolioData.certifications.oracle)}
          {renderCertCard("GOOGLE CLOUD", portfolioData.certifications.google)}
          {renderCertCard("ACHIEVEMENTS", portfolioData.achievements)}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
