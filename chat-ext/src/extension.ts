// src/extension.ts
import * as vscode from 'vscode';
import { ChatViewProvider } from './chatView';

export function activate(context: vscode.ExtensionContext) {
    const chatViewProvider = new ChatViewProvider(context.extensionUri);

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(ChatViewProvider.viewType, chatViewProvider)
    );
}

export function deactivate() {}
