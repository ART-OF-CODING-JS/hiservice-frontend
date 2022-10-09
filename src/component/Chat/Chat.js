import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { decodeToken } from "react-jwt";
import cookie from "react-cookies";
import "./Chat.css";
import ScrollToBottom from "react-scroll-to-bottom";
const socket = io.connect("https://hiservice.herokuapp.com");
function Chat() {
  const { id } = useParams();
  const userId = cookie.load("userID");
  const { username } = decodeToken(cookie.load("token"));

  console.log(username, 12121212);
  console.log(cookie);
  console.log(id, userId, "000000000000");
  const [message, setMessage] = useState("");
  // const [user,setUser]=useState('')
  const [messageReceived, setMessageReceived] = useState(JSON.parse(localStorage.getItem('chats'))?
  JSON.parse(localStorage.getItem('chats')): []);
  async function handleMessage() {
    const messageData = {
      author: username,
      message: message,
      time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
    };
    await socket.emit("send_message", messageData);
    setMessageReceived((list) => [...list, messageData]);

    setMessage("");
  }

  console.log(messageReceived);
  localStorage.setItem('chats', JSON.stringify(messageReceived));
  useEffect(() => {
    socket.on("received_message", (data) => {
      // socket.emit("join_room",id);
      setMessageReceived((list) => [...list, data]);
      
    });
  }, []);
  return (
    <>
      {
        <div className="chat-window">
          <div className="chat-header">
            <p>Chat Page</p>
          </div>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageReceived.map((messageContent) => {
                return (
                  <div
                    className="message"
                    id={username === messageContent.author ? "you" : "other"}
                    key={messageContent.id}
                  >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={message}
              placeholder="Hey..."
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && handleMessage();
              }}
            />
            <button onClick={handleMessage}>&#9658;</button>
          </div>
        </div>
      }
    </>
  );
}
export default Chat;
