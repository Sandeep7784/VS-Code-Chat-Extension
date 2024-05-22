# Chat Extension

The **Chat Extension** is a simple Visual Studio Code extension that allows users to engage in mock conversations with an AI within the editor. This extension demonstrates how to create a chat interface and integrate it into the Activity Bar of VS Code.

## Features

- **Activity Bar Integration:** Adds a chat icon to the Activity Bar, providing easy access to the chat interface.
- **Interactive Chat:** Users can type messages in the chat interface and receive mocked AI responses.
- **Customizable:** The extension can be extended to integrate with real AI services or add additional features.

## Installation

1. Clone this repository to your local machine.
2. Open the project folder in Visual Studio Code.
3. Press \`F5\` to open a new VS Code window with the extension loaded.

## Usage

1. Once the extension is activated, you'll see a chat icon in the Activity Bar. Click on it to open the chat interface.
2. Type a message in the input field and press "Send" to send the message to the mocked AI.
3. The AI will respond with a mocked response, which will appear in the chat interface.

## Development

### Prerequisites

- Node.js installed on your machine.

### Getting Started

1. Install dependencies:

    \`\`\`sh
    npm install
    \`\`\`

2. Compile TypeScript files:

    \`\`\`sh
    npm run compile
    \`\`\`

3. Start the extension in debug mode:

    - Press \`F5\` in Visual Studio Code.

### Folder Structure

- **\`.vscode/\`**: Contains VS Code-specific configuration files.
- **\`src/\`**: Contains the source code for the extension.
- **\`out/\`**: Output directory for compiled JavaScript files.
- **\`media/\`**: Contains additional media files (e.g., JavaScript for webview).
- **\`resources/\`**: Contains static assets like icons.
- **\`README.md\`**: This file, providing information about the extension.

### Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to submit a pull request with your improvements or open an issue to report any bugs or suggest new features.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
`