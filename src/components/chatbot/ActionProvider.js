class ActionProvider {

    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage
    }

    handleMessageParser = (userMessage) => {

        fetch('http://192.168.10.15:5000/watson/message', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'session_id': '925a50e0-67e9-45f4-82a5-ccbfa6d8530e'
            },
            body: JSON.stringify({
                input: userMessage
            })
        })
            .then(res => res.json())
            .then(data => {
                const messages = this.createChatBotMessage(
                    data.text,
                    { widget: "messageParser", withAvatar: true }
                );
        
                this.addMessageToBotState(messages);
            })


    };

    handleDefault = () => {
        const message = this.createChatBotMessage("I'm not sure. Could you try rephrasing?", {
            withAvatar: true,
        });

        this.addMessageToBotState(message)
    };

    addMessageToBotState = (messages) => {
        if (Array.isArray(messages)) {
            this.setState((state) => ({
                ...state,
                messages: [...state.messages, ...messages],
            }));
        } else {
            this.setState((state) => ({
                ...state,
                messages: [...state.messages, messages],
            }));
        }
    };
}

export default ActionProvider;