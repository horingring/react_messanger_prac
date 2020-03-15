import React, { Component } from 'react';
import './App.css';
import AppChannel from './AppChannel'
import AppChattingView from './AppChattingView'

//출처 : https://snutiise.github.io/chatting-app/  이 사이트를 참고하여 연습함.

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      channel : 'horingring'
    };
    this.updateChannel = this.updateChannel.bind(this);
  }

  updateChannel(channel){
    this.setState({
      channel : channel
    });
  }

  render(){
    return (
      <div className="App">
        <AppChannel 
          channel={this.state.channel} 
          onUpdate={this.updateChannel}
        ></AppChannel>
        <AppChattingView 
          channel={this.state.channel}
        ></AppChattingView>
      </div>
    );
  }
}

export default App;
