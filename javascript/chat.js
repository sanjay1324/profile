const chatIcon = document.getElementById('open-chat');
const chatContainer = document.getElementById('chat-container');
const closeButton = document.getElementById('close-button');
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

// Function to open the chat container
function openChat() {
    chatContainer.style.display = 'block';
}

// Function to close the chat container
function closeChat() {
    chatContainer.style.display = 'none';
}

chatIcon.addEventListener('click', openChat);
closeButton.addEventListener('click', closeChat);

// Function to add a message to the chat log
function addMessage(message, isUser) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    if (isUser) {
        messageElement.style.textAlign = 'right';
        messageElement.style.fontWeight = 'bold';
    }
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage === "") return;

    addMessage(userMessage, true);
    userInput.value = "";

    if (responses[userMessage]) {
        setTimeout(() => {
            addMessage(responses[userMessage], false);
        }, 500);
    } else {
        setTimeout(() => {
            addMessage("I'm sorry, I don't understand that.", false);
        }, 500);
    }
}

userInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        handleUserInput();
    }
});

const responses = {
    "hello": "Hello! How can I help you?",
    "how are you": "I'm just a chatbot, but I'm here to assist you.",
    "what's your name": "I'm just a simple chatbot, so I don't have a name.",
    "goodbye": "Goodbye! Feel free to come back if you have more questions.",
    "i need a piece of code": "console.log('Hello, World!');",
    "need some game": "As I am a small AI tool, I can't generate games."
};
