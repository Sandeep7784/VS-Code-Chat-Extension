// src/chatView.ts
import * as vscode from 'vscode';

export class ChatViewProvider implements vscode.WebviewViewProvider {

    public static readonly viewType = 'chatExtension.chatView';

    private _view?: vscode.WebviewView;

    constructor(private readonly _extensionUri: vscode.Uri) {}

    resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken
    ) {
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

    private _handleMessage(text: string) {
        if (this._view) {
            this._view.webview.postMessage({ command: 'receiveMessage', text: `AI: Mock response to "${text}"` });
        }
    }

    private _getHtmlForWebview(webview: vscode.Webview): string {
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));
        // Check if scriptUri is correct
        console.log('Script URI:', scriptUri);
        return /* html */`
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
