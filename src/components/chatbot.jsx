import React, { useState, useRef, useEffect } from "react";
import "../styles/chatbot.css";
import nav from "../assets/navia.jpeg";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); // To store chat messages
  const [userMessage, setUserMessage] = useState(""); // To store the user input message
  const chatBoxRef = useRef(null);

  // Toggle the chat box visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Close chat box when clicked outside
  const closeChat = (e) => {
    if (
      chatBoxRef.current &&
      !chatBoxRef.current.contains(e.target) &&
      !e.target.classList.contains("chat-us")
    ) {
      setIsOpen(false);
    }
  };

  // Effect to add and clean up event listener for closing the chat box
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeChat);
    } else {
      document.removeEventListener("click", closeChat);
    }
    return () => document.removeEventListener("click", closeChat);
  }, [isOpen]);

  // Send message to backend server and receive response from OpenAI
  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return; // Avoid empty messages
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: userMessage, sender: "user" },
    ]);
    setUserMessage(""); // Reset input field

    try {
      const response = await fetch("http://localhost:5001/chat", {
        // Full URL to backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: data.reply, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: "Sorry, I couldn't understand that.", sender: "bot" },
      ]);
    }
  };

  return (
    <>
      {!isOpen && (
        <button className="button chat-us" onClick={toggleChat}>
          <i className="fas fa-comment"></i> Chat Us
        </button>
      )}

      {isOpen && (
        <div className="chat-container" ref={chatBoxRef}>
          <div className="chat-box">
            <div className="chat-header">
              <div className="status">
                <div>Chat Bot</div>
                <div className="online">
                  <span className="dot"></span> Online
                </div>
              </div>
              <div className="menu" onClick={toggleChat}>
                &times;
              </div>
            </div>

            <div className="chat-messages">
              {/* Render messages */}
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.sender === "bot" && (
                    <div className="avatar">
                      <img src={nav} alt="Bot Avatar" />
                    </div>
                  )}
                  <div className="message-content">{message.content}</div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                value={userMessage}
                placeholder="Type a message..."
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(); // Send message on Enter key press
                  }
                }}
              />
              <button onClick={handleSendMessage}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
