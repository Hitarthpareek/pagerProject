import React, { useState } from "react";
import axios from "axios";

export const Form = ({refresh,setRefresh}) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitButton = async(e) => {
    e.preventDefault();

    const formName = name.trim();
    const formMessage = message.trim();

    if (formName === "" || formMessage === "") {
      alert("Please fill in all fields");
      return;
    }
    if (formName.length < 1) {
      alert("Name must  be atleast 3 chars long");
      return;
    }
    if (formMessage.length < 1) {
      alert("Message must be atleast 10 chars long");
      return;
    }
    const response = await axios({
      method: "post",
      url: "https://pagerproject-67cb7-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
      data: {
        name: name,
        message: message,
      },
    });
    setName("");
    setMessage("");
    setRefresh(!refresh);
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-header">Send Group message</div>
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          //  width={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleNameChange}
            value={name}
          ></input>
</div>
          <div className="form-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
           //   width={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <input type="text" placeholder="Enter message" value={message} onChange={handleMessageChange} />
          
        </div>
        <div className="form-btn">
            <button type="submit" onClick={handleSubmitButton}>
              Submit
            </button>
          </div>
      </form>
    </div>
  );
};
