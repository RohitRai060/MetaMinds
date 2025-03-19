import React from 'react';
import './Why.css';
import icon_1 from '../../assets/why.png'; 
import icon_2 from '../../assets/why2.png'; 
import icon_3 from '../../assets/why7.png'; 
import icon_4 from '../../assets/why6.png';
import icon_5 from '../../assets/why5.png';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="section-title">
        Why Choose <span className="highlight">Us</span>
      </h2>
      <div className="feature">
        <img src={icon_1} alt="Expert Management Icon" className="feature-icon" />
        <h3 className="feature-title">Expert Team</h3>
        <p className="feature-description">
        A group of skilled professionals passionate about delivering excellence.

        </p>
      </div>
      
      <div className="feature">
        <img src={icon_3} alt="Expert Management Icon" className="feature-icon" />
        <h3 className="feature-title">Customized Solutions</h3>
        <p className="feature-description">
        Services tailored to align with your business goals.        </p>
      </div>
      <div className="feature">
        <img src={icon_4} alt="Expert Management Icon" className="feature-icon" />
        <h3 className="feature-title">Cutting-Edge Technology</h3>
        <p className="feature-description">
        Stay ahead with the latest tools and trends.        </p>
      </div>
      <div className="feature">
        <img src={icon_5} alt="Expert Management Icon" className="feature-icon" />
        <h3 className="feature-title">Proven Results</h3>
        <p className="feature-description">
        A track record of success across industries.        </p>
      </div>
      <div className="feature">
        <img src={icon_2} alt="Expert Management Icon" className="feature-icon" />
        <h3 className="feature-title">Client-Centric Approach</h3>
        <p className="feature-description">
        Your success is our priority.        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
