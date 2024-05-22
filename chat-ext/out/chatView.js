"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatViewProvider = void 0;
// src/chatView.ts
const vscode = require("vscode");
class ChatViewProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView, context, _token) {
        console.log('Resolve webview called');
        this._view = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri]
        };
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        webviewView.webview.onDidReceiveMessage(message => {
            switch (message.command) {
                case 'sendMessage':
                    this._handleMessage(message.text);
                    return;
            }
        });
    }
    _handleMessage(text) {
        if (this._view) {
            this._view.webview.postMessage({ command: 'receiveMessage', text: `AI: Mock response to "${text}"` });
        }
    }
    _getHtmlForWebview(webview) {
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));
        // Check if scriptUri is correct
        console.log('Script URI:', scriptUri);
        return /* html */ `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Chat View</title>
            </head>
            <body>
                <div id="messages"></div>
                <input id="messageInput" type="text" placeholder="Type a message..."/>
                <button id="sendButton">Send</button>
                <script src="${scriptUri}"></script>
            </body>
            </html>`;
    }
}
exports.ChatViewProvider = ChatViewProvider;
ChatViewProvider.viewType = 'chatExtension.chatView';
//# sourceMappingURL=chatView.js.map