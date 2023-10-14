// Chatbot rules
let rules = {
    "hello": "Hi there!",
    "hi": "Hello!",
    "bye": "Goodbye!",
};

// Questions and their corresponding answers
let questions = [
    "How are you?", 
    "Can you help me?", 
    "I love coding!", 

];

let answers = [
    "I'm doing well, how are you?", 
    "Can you specifically tell me what you need help with.", 
    "Me too!", 
];

function getResponse(userInput) {
    let lowerInput = userInput.toLowerCase();

    // Check if any of the keys in the rules dictionary (converted to lowercase) are substrings in the user input
    for (let key in rules) {
        if (lowerInput.includes(key.toLowerCase())) {
            return rules[key];
        }
    }

    // If no substring match is found, tokenize the input and check each token against the rules
    let tokens = lowerInput.split(' ');
    for (let token of tokens) {
        if (rules.hasOwnProperty(token)) {
            return rules[token];
        }
    }

    // If no rule or question matches, return a placeholder response.
    
let placeholders = [
    "Hmm, I don't understand.",
    "Sorry, I can't help you with that.",
    "Can you phrase that differently?",
];

// Randomly selecting a placeholder when no rule matches.
return placeholders[Math.floor(Math.random() * placeholders.length)];

}
function sendMessage() {
    const userInputField = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');

    const userInput = userInputField.value;
    const botResponse = getResponse(userInput);

    let messageCount = chatbox.children.length;
chatbox.innerHTML += `<div class="user-message" style="order:${messageCount + 1}">User: ${userInput}</div>`;
    messageCount++; 
chatbox.innerHTML += `<div class="bot-message" style="order:${messageCount + 1}">Bot: ${botResponse}</div>`;

    // Clear the input field
    userInputField.value = "";
}
document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13 && this.value.trim() !== "") {
        sendMessage();
        event.preventDefault();  // Prevents the default action (newline in this case)
    }
});