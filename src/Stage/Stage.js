import React, { Component } from 'react';
import './Stage.css';
import Participant from './Participant/Participant';

export default class Stage extends Component {
  render() {
    return (
      <section className="stage">
        {this.props.participants.map(participant => (
          <Participant 
            participant={participant} 
            key={participant.id}/>
        ))}
        <div className="teacher">
          <i class="fas fa-kiwi-bird"/>
        </div>
      </section>
    )
  }
}