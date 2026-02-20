import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageList = ({refresh}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "https://pagerproject-67cb7-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
        );
        // converting the object to array without key
        if (
          response.data != null ||
          response.data != undefined ||
          response.data != {}
        ) {
          let messagesArray = [];
          for (const key in response.data) {
            messagesArray.push(response.data[key]);
          }
          // only take latest 5 messages
          messagesArray.reverse();
          messagesArray = messagesArray.slice(0, 5);
          setMessages(messagesArray);
          console.log(messagesArray);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [refresh]);

  return <div className = "message-container">
    {
        messages.length>0 && messages.map((message)=>{
            return (
                <div className="message-card">
                    <div className="user-name">{message.name}</div>
                    <div className="user-message">{message.message}</div>
                </div>
            )
        })
    }
  </div>;
};

export default MessageList;
