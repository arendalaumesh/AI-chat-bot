// script.js
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    // Display user message
    displayMessage(userInput, 'user');

    // Generate bot response
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, 'bot');

    // Clear input field
    document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return "Hello! How can I help you today?";
    } else if (lowerInput.includes('your name')) {
        return "I'm a chatbot created by OpenAI. What's your name?";
    } else if (lowerInput.includes('help')) {
        return "Sure, I can help! What do you need assistance with?";
    } else if (lowerInput.includes('bye')) {
        return "Goodbye! Have a great day!";
    } else {
        return "Sorry, I don't understand that. Can you please rephrase?";
    }
}
