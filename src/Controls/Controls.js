import React, { Component } from 'react'
import './Controls.css'

export class Controls extends Component {
  render() {
    return (
      <section className="controls">
        <div  className="icon-box">
          <i className="hand-icon far fa-hand-spock" />
          <i className="hand-icon far fa-hand-peace" />
          <i className="hand-icon far fa-hand-lizard" />
          <i className="hand-icon far fa-hand-scissors" />
        </div>
        <div className="icon-box">
          <i className="video-icon fas fa-video" />
          <i className="video-icon fas fa-volume-up" />
          <i className="video-icon fas fa-tv" />
          <button className="button">Leave Stage</button>
        </div>
      </section>
    )
  }
}

export default Controls
