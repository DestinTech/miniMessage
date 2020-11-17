import MessageData from './MessagesData';


function MessageList(props){
    console.log(props)
    let messages = props.messages;
    console.log(props.messages);
    return(
        messages.map(message => 
            <div>
                <p>{message.user}</p>
                <p>{message.text}</p>
                <p>{message.added.toString()}</p>

            </div>
        
    )
)}

export default MessageList