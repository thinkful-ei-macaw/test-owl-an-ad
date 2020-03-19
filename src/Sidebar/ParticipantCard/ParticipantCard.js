import React, { Component } from 'react'
import './ParticipantCard.css'

export class ParticipantCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.participant.avatar} alt="avatar" />
        <h3>{this.props.participant.name}</h3>
        {
          this.props.participant.inSession ? <span>In Session</span> : 
          <span>Left Session</span>
        }
        <br />
        {
          this.props.participant.onStage ? <span><i class="far fa-user-circle"></i>On Stage</span> : 
          <span>Left Stage</span>
        }
      </div>
    )
  }
}

export default ParticipantCard
