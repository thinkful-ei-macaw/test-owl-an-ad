import React from 'react';
import './Stage.css';

export default function Stage(props) {
  return (
    <section id="stageComp">
      <div className="participant">
        <div className="participant-bundle">
          <h2 className="participant-title">Sally Student</h2>
          <div className="icon-container">
            <img className="icons" src="#" alt="sound icon" />
            <img className="icons" src="#" alt="search icon" />
          </div>
        </div>
        <img className="icons" src="#" alt="participant-icon" />
      </div>
      <div className="participant">
        <div className="participant-bundle">
          <h2 className="participant-title">Leonard Learner</h2>
          <div className="icon-container">
            <img className="icons" src="#" alt="sound icon" />
            <img className="icons" src="#" alt="search icon" />
        </div>
        </div>
        <img className="icons" src="#" alt="participant-icon" />
      </div>
    </section>
  )
}