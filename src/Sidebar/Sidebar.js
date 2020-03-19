import React, { Component } from 'react'
import './Sidebar.css'
import ParticipantCard from './ParticipantCard/ParticipantCard';
import ChatCard from './ChatCard/ChatCard';
// import Menu from './Menu/Menu';

export class Sidebar extends Component {
  state = {
    chatActive: true
  }

  handleChatClicked = () => {
    this.setState({ chatActive: true})
  }

  handleParticipantClicked = () => {
    this.setState({ chatActive: false})
  }

  render() {
    const { participants, chatEvents } = this.props;
    
    return (
      <section className="sidebar">
        <div className="menu">
          <h3 onClick={this.handleChatClicked} className={this.state.chatActive && 'active'}>Chat</h3>
          <h3 onClick={this.handleParticipantClicked} className={!this.state.chatActive && 'active'}>Participants</h3>
          <div className="icon-box">
            <i className="menu-icon fas fa-cog" />
            <i className="menu-icon fas fa-link" />
            <i className="menu-icon far fa-question-circle" />
          </div>
        </div>
          
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
                    key={i} 
                    participant={participant}
                  />
                );
              })
          }
        </div>
        <div className="input-box">
          <input type="text" placeholder="chat it up buttercup..." />
        </div>
      </section>
    );
  }
}

export default Sidebar