"use client";
import { useEffect, useRef, useState } from "react";
const Message = ({ messages, setMessages, responses, setResponses }) => {
  const scrollDownRef = useRef(null);
  return (
    <div
      id="messages"
      className="flex h-full flex-1 flex-col gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <div ref={scrollDownRef} />
      {messages.map((message, index) => (
        <>
          <p key={index} className="my-0 ml-auto">
            {message}
          </p>
          <p key={index} className="my-0">
            {responses[index]}
          </p>
        </>
      ))}
    </div>
  );
};

export default Message;
