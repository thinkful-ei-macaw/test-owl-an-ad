import React, { Component } from 'react'
import './Participant.css'

class Participant extends Component {

  render() {
    const { name, avatar } = this.props.participant;
    return (
      <section className="participant">
        <div className="participant-panel">
          <h2 className="participant-title">{name}</h2>
          <div className="icon-container">
            <span><i className="icons fas fa-volume-up"></i></span>
            <span><i className="icons fas fa-search"></i></span>
          </div>
        </div>

        <div className="participant-image">
          <img className="stageImage" src={avatar} alt="avatar" />
        </div>
      </section>
    )
  }
}

export default Participant
