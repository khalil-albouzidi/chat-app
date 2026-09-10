const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const messages = document.getElementById("messages");

messageForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const text = messageInput.value.trim();

    if (text === "") {
        return;
    }

    const message = document.createElement("div");

    message.classList.add("message", "sent");

    message.innerHTML = `
        <div class="message-content">
            ${text}
        </div>

        <span class="message-time">
            Now
        </span>
    `;

    messages.appendChild(message);

    messageInput.value = "";

    messages.scrollTop = messages.scrollHeight;

    messageInput.focus();
});