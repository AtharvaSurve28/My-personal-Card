// script.js

function handleAccept() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = "Thank you! You have accepted the proposal.";
    responseMessage.style.color = "#4CAF50";
}

function handleDecline() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = "You have declined the proposal.";
    responseMessage.style.color = "#f44336";
}