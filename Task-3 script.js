const predefinedResponses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "bye": "Goodbye! Have a great day!",
    "help": "I can answer simple questions. Try asking 'hello' or 'bye'."
};

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let userMessage = inputField.value.trim().toLowerCase();
    
    if (userMessage === "") return;

    appendMessage(userMessage, "user");
    
    let botResponse = predefinedResponses[userMessage] || "Sorry, I don't understand that.";
    setTimeout(() => appendMessage(botResponse, "bot"), 500);
    
    inputField.value = "";
}

function appendMessage(message, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}