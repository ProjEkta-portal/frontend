"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ChatInput from "./ChatComponents/ChatInput";
import Message from "./ChatComponents/Message";
import chat from "@/public/assets/chat.png";
const ChatEngine = (props) => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [responses, setResponses] = useState(["Hello", "I am your assistant"]);

  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    }
  });

  return (
    <div
      className="transition-5"
      style={{
        ...styles.chatEngineWindow,
        ...{
          height: props.visible ? "100%" : "0px",
          zIndex: props.visible ? "100" : "0",
        },
      }}
    >
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <div className="relative w-8 sm:w-12 h-8 sm:h-12">
              <Image
                fill
                referrerPolicy="no-referrer"
                src={chat}
                alt={`profile picture`}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col leading-tight">
            <div className="text-xl flex items-center">
              <span className="text-gray-700 mr-3 font-semibold">
                AI Support
              </span>
            </div>

            <span className="text-sm text-gray-600">support@wonderful.ai</span>
          </div>
        </div>
      </div>

      <Message
        responses={responses}
        setResponses={setResponses}
        messages={messages}
        setMessages={setMessages}
      />
      <ChatInput messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default ChatEngine;

const styles = {
  chatEngineWindow: {
    width: "100%",
    backgroundColor: "#fff",
  },
};
