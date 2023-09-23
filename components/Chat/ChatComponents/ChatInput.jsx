"use client";
import { Button } from "@nextui-org/react";
import TextareaAutosize from "react-textarea-autosize";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";

const ChatInput = ({ messages, setMessages }) => {
  const textareaRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    setIsLoading(true);

    try {
      // await axios.post("/api/message/send", { text: input, chatId });
      setMessages([...messages, input]);
      setInput("");
      textareaRef.current?.focus();
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute bottom-0 w-full border-t border-gray-200 px-1 pt-1 mb-1 sm:mb-0">
      <div className="relative overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
        <TextareaAutosize
          ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message `}
          className="block w-full resize-none border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6"
        />

        <div
          onClick={() => textareaRef.current?.focus()}
          className="py-2"
          aria-hidden="true"
        >
          {/* <div className="py-px">
            <div className="h-9" />
          </div> */}
        </div>

        <div className="absolute right-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
          <div className="flex-shrin-0">
            <Button isLoading={isLoading} onClick={sendMessage} type="submit">
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
