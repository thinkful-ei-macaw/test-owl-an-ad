import React, { Component } from 'react';
import Stage from './Stage/Stage.js';
import Sidebar from './Sidebar/Sidebar.js';
import Controls from './Controls/Controls.js';
import './App.css';


class App extends Component {
  state = {
    participants: [
      {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
      },
      {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
      },
      {
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
      },
      {
        id: 4,
        name: 'Frank Runciman',
        avatar:
            'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
      },
      {
        id: 5,
        name: 'Ashla Attwool',
        avatar:
            'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
      }
    ],
    chatEvents: [
      {
        participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: 1548852646559,
        timestamp: 1548852484247
      },
      {
        participantId: 2,
        type: 'thumbs up',
        timestamp: 1548852484247
      },
      {
        participantId: 4,
        type: 'thumbs down',
        timestamp: 1548852484247
      },
      {
        participantId: 1,
        type: 'raised hand',
        timestamp: 1548852544247
      },
      {
        participantId: 1,
        type: 'clapped',
        timestamp: 1548852544247
      },
      {
        participantId: 1,
        type: 'joined',
        timestamp: 1548852544247
      },
      {
        participantId: 5,
        type: 'left',
        timestamp: 1548852604247
      },
      {
        participantId: 4,
        type: 'message',
        message: 'I love React',
        time: 1548852646559,
        timestamp: 1148852484247
      },
      {
        participantId: 3,
        type: 'joined stage',
        timestamp: 1548852664247
      },
      {
        participantId: 3,
        type: 'left stage',
        timestamp: 1548852724247
      }
    ]
  }

  filterForOnStage() {
    return this.state.participants.filter(participant => participant.onStage === true);
  }


  render() {
    return (
      <main className='App'>
        <div className='upper-dashboard'>
          <Sidebar 
            participants={this.state.participants}
            chatEvents={this.state.chatEvents}
          />
          <Stage participants={this.filterForOnStage()}/>
        </div>
        <Controls />
      </main>
    );
  }
}


export default App;

