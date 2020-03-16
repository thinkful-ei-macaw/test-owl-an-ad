import React, { Component } from 'react'
import './Sidebar.css'
import ParticipantCard from './ParticipantCard/ParticipantCard';
import ChatCard from './ChatCard/ChatCard';
import Menu from './Menu/Menu';

export class Sidebar extends Component {
  state = {
    chatActive: true
  };

  handleToggleActive() {
    this.setState({ chatActive: !this.state.chatActive });
  }

  render() {
    const { participants, chatEvents } = this.props;
    
    return (
      <section className="sidebar">
        <Menu toggleActive={this.handleToggleActive} />
        <div className="content-box">
          {this.state.chatActive
            ? chatEvents.map((chat, i) => {
                let person = participants.find(p => p.id === chat.participantId);

                return (
                  <ChatCard
                    chat={chat} 
                    person={person.name}
                    avatar={person.avatar}
                    key={i}
                  />
                );
              })
            : participants.map((participant, i) => {
                return (
                  <ParticipantCard 
                    participant={participant}
                    key={i} 
                  />
                );
              })}
        </div>
        <div className="input-box">
          <input type="text" placeholder="chat it up buttercup..." />
        </div>
      </section>
    );
  }
}

export default Sidebar