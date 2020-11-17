import './App.css';
import {Link} from 'react-router-dom';
import React from 'react';
import { render } from 'react';
import Navbar from './Navbar'
import MessageList from './MessageList';
import New from './New'
import MessagesData from './MessagesData'


function App(){
  return (
    <div>
    <Navbar/> 
    <New/>
    </div>
  )
}


export default App;


/*
3)create an array on top of index called messages and add sample messages
4)Loop through the messages in the index page, display all data. 
5)

*/