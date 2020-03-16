import React, { Component } from 'react'
import './Participant.css'

class Participant extends Component {

  render() {
    const name = this.props.name
    return (
      <section className="participant">
        <div className="participant-bundle">
          <h2 className="participant-title">{name}</h2>
          <div className="icon-container">
            <span><i className="fas fa-volume-up"></i></span>
            <span><i className="fas fa-search"></i></span>
          </div>
          <span><i className="user-image far fa-user-circle"></i></span>
        </div>
      </section>
    )
  }
}

export default Participant
