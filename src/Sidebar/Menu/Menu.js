import React, { Component } from 'react'

export class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h3 onClick={this.props.toggleActive}>Chat</h3>
        <h3 onClick={this.props.toggleActive}>Participants</h3>
        <div>
          icons go here
        </div>
      </div>
    )
  }
}

export default Menu
