import React, { Component, Fragment } from 'react'
import './ChatCard.css'

export class ChatCard extends Component {
  render() {
    const { chat, person, avatar } = this.props;
    let date = new Date(chat.timestamp);
    let dateStr = date.toLocaleTimeString();
    
    return (
      <Fragment>
        {
          chat.type === "message" ? (
            <div className="card">
              <img src={avatar} alt="" />
              <div className="card-content">
                <h3>{person}</h3>
                <span>{dateStr}</span>
                <p>{chat.message}</p>
              </div>
            </div>
          ) : (
            <div className="action-card">
              <p>{person}: {chat.type}</p>
            </div>
          )
        }
      </Fragment>
    )
  }
}

export default ChatCard
