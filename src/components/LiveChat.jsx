import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        const i = setInterval(() => {
            //Api Polling
            console.log("API Polling");
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(12) + "😂",
                })
            );
        }, 2000);

        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
                <div>
                    {chatMessages.map((message, index) => (
                        <ChatMessage
                            name={message.name}
                            message={message.message}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <form
                className="w-full p-2 ml-2 border border-black"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Hello Pragyan");
                    dispatch(
                        addMessage({
                            name: "Pragyan",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
            >
                <input
                    className="w-64 border-4 border-blue-400"
                    type="text"
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className="px-2 mx-2 bg-green-100">Send</button>
            </form>
        </>
    );
};

export default LiveChat;
