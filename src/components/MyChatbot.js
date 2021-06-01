import React, { useContext } from 'react';
import Chatbot from "react-chatbot-kit";

import config from "./chatbot/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function MyChatbot() {
    return (
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
    );
}

export default MyChatbot