// media/main.js
(function() {
    const vscode = acquireVsCodeApi();
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const messages = document.getElementById('messages');

    sendButton.addEventListener('click', () => {
        const text = messageInput.value;
        if (text) {
            vscode.postMessage({ command: 'sendMessage', text: text });
            messages.innerHTML += `<div>You: ${text}</div>`;
            messageInput.value = '';
        }
    });

    window.addEventListener('message', event => {
        const message = event.data;
        switch (message.command) {
            case 'receiveMessage':
                messages.innerHTML += `<div>${message.text}</div>`;
                break;
        }
    });
}());
