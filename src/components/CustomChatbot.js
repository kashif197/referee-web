import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {

    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };

    const theme = {
        background: "white",
        fontFamily: "roboto",
        headerBgColor: "#2EC4B6",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#2EC4B6",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4c4c4c"
    };
    
    const [steps, setSteps] = React.useState([
        {
            id: 1,
            message: "Hello from Referee! How can I help you?",
            trigger: 2
        },
        {
            id: 2,
            user: true,
            trigger: previousValue => { onSend(previousValue); }
        }
    ])

    const onSend = (prevMessage) => {
        setSteps(previousMessages => [...previousMessages, {
            id: 3,
            message: "hi",
            trigger: 4
        }])
        return 3
    }




    return <ThemeProvider theme={theme}><ChatBot steps={steps} {...config} /></ThemeProvider>;
}
export default CustomChatbot;