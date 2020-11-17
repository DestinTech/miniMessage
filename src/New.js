import './App.css';
import {Link} from 'react-router-dom';
import React, { useContext }  from 'react'
import Navbar from './Navbar'
import ReactDOM from 'react-dom';
import MessagesData from './MessagesData'
import MessageList from './MessageList'
import messages from './MessagesData';


class New extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      messages: MessagesData,
      text : "",
      currentUser: "Destin"
    };
    this.handleClick = this.handleClick.bind(this); //Magic line to allow handleClick to access state, from the React.js documentation page for forms
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick (event){
    event.preventDefault();
    alert(this.state.text);
  }

  handleChange(event){
    event.preventDefault();
    const target= event.target;
    const value =  target.value;
    const name = target.name; //this is used by the SetState function to identify the target for the value
    console.log(value)
     let message = {
      user: this.state.currentUser,
      text: value,
      added: new Date()
    }

    const messagesCopy = this.state.messages.slice();
    messagesCopy.push(message);
    this.setState({// Stete is immutable, so we don't directly modify it, we replace it.
      [name]: messagesCopy
    });
  }

render() {
    return (
    <div>
      <form>
        <label>
          New Message
          <input 
            value={this.state.text} 
            name="messages"  // this name is used by the handleChange event to identify what varable to change. 
            onChange={this.handleChange} />
        </label>
        <br/>
        <button onClick={this.handleClick}>Send</button>
        <MessageList messages={this.state.messages}/>

      </form>
    </div>
    )
  } 
}

export default New