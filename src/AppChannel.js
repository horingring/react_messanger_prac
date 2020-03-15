import React, { Component } from 'react';

class AppChannel extends Component {
    constructor(props){
        super(props);
        this.state = {
            channel : this.props.channel
        }
    }

    updateChannel(event){
        if(event.target.value!==this.state.channel){
            this.props.onUpdate(event.target.value);
        }
    }

    keyUpdateChannel(event){
        if(event.keyCode === 13){
            if(event.target.value!==this.state.channel){
                this.props.onUpdate(event.target.value);
            }
        }
    }

    render(){
        return (
            <header className="Channel-header">
                <h1>Welcome To Chatting-App</h1>
                <input 
                    type="text" 
                    className="channel" 
                    placeholder="채널 이름을 입력하세요" 
                    onBlur={this.updateChannel} 
                    onKeyDown={this.keyUpdateChannel} >
                </input>채널
            </header>
        );
    }
}

export default AppChannel;