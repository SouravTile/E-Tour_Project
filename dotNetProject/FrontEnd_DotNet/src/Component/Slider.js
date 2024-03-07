import React, { useState } from 'react';
import './Slider.css';
import {Button} from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const navigate = useNavigate();
  const handleBtnClick = (index, src) => {
    setActiveBtn(index);
    document.querySelector('#video-slider').src = src;
  };

  const handleButtonClick=()=>{
  
    document.querySelector('.ref').scrollIntoView(true);
    navigate(`/Home`);
  }
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>adventure is worthwhile</h3>
          <p>discover new places with us, adventure awaits</p>
          {/* <a href="#" className="btn">
            discover more
          </a> */}
          {/* <Button variant="primary" onClick={() => navigate(`/Home`)}>
          discover more
          </Button> */}
          <Button variant="primary" onClick={handleButtonClick}>
          discover more
          </Button>
        </div>

        <div className="controls">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`vid-btn ${index === activeBtn ? 'active' : ''}`}
              data-src={`images/images/vid-${index}.mp4`}
              onClick={() =>
                handleBtnClick(index, `images/images/vid-${index}.mp4`)
              }
            ></span>
          ))}
        </div>

        <div className="video-container">
          <video
            src="images/images/vid-1.mp4"
            id="video-slider"
            loop
            autoPlay
            muted
            controls={false} // Disable default controls
            controlsList="nodownload" // Disable download button
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Slider;
