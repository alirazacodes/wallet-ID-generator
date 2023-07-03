# Wallet ID Generator Extension 💼🔑

Generate a unique 24-character wallet ID for every new user with this Chrome extension.


## 📚 Table of Contents

- [Wallet ID Generator Extension 💼🔑](#wallet-id-generator-extension-)
  - [📚 Table of Contents](#-table-of-contents)
  - [🚀 Introduction](#-introduction)
  - [🛠️ Installation](#️-installation)
  - [💡 Features](#-features)
  - [🖥️ Usage](#️-usage)
  - [🏗️ Project Structure](#️-project-structure)
  - [👨‍💻 Development](#-development)
  - [🤝 Contributing](#-contributing)

## 🚀 Introduction
The Wallet ID Generator is a simple and effective tool that assists users in generating a unique, random, 24-character wallet ID. This extension can be installed in your Chrome browser and is easy to use. It also provides a feature to copy the generated ID to the clipboard with a single click!

## 🛠️ Installation
To install the extension:

1. Download or clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode (toggle switch in the top right corner).
4. Click "Load unpacked".
5. Select the directory of this repository.

Now, you should see the Wallet ID Generator extension icon in your Chrome toolbar. Click on it to start using!

## 💡 Features
- **📝 User Registration**: Register with your name and email to generate your unique wallet ID.
- **🔐 Unique Wallet ID**: A 24-character random wallet ID is generated for every new user, prefaced by 'ID-' for easy identification.
- **📋 Copy to Clipboard**: Copy your Wallet ID to the clipboard with a single click, and receive a confirmation message to know it was successful.
- **🎇 Futuristic Neon Design**: Enjoy the web3-inspired neon design that brings your wallet ID generation to the next level.


## 🖥️ Usage
1. Click on the Wallet ID Generator extension icon in your Chrome toolbar.
2. Enter your name and email in the registration form.
3. Click "Generate Wallet ID" to generate your unique Wallet ID. The Wallet ID will appear below, character by character, in a fun animation.
4. Click "Copy to Clipboard" to copy your Wallet ID. You'll receive a confirmation message once it's been copied.

## 🏗️ Project Structure
The project has a simple structure:
```
Wallet-ID-Generator
|
├───project
│   ├───images
│   ├───index.html
│   ├───manifest.json
│   ├───script.js
│   └───style.css
├───LICENSE
└───README.md
```

- `project`: This directory contains the main files for the extension.
  - `images`: This folder can be used to store any images or icons for your extension.
  - `index.html`: The HTML structure of the extension's popup window. It includes a form for user registration and a section to display the generated wallet ID.
  - `manifest.json`: The manifest file that describes the extension to Chrome. It specifies the necessary extension metadata, scripts, and permissions.
  - `script.js`: The JavaScript logic for registering users, generating wallet IDs, and interacting with the user. It uses the `localStorage` Web API to store user data, and the `navigator.clipboard` Web API to copy text to the clipboard.
  - `style.css`: The CSS styles for the extension's popup window. It provides the web3-inspired neon design, including animations for displaying the wallet ID.
- `LICENSE`: The license file for the project. This will contain the terms under which the software can be used, copied, modified, or distributed.
- `README.md`: This is the file you are currently reading. It provides a description of the project, instructions for installation and usage, and other useful information.

## 👨‍💻 Development
This extension is developed using vanilla HTML, CSS, and JavaScript, without relying on any libraries or frameworks. The `localStorage` Web API is used to store user data locally, and the `navigator.clipboard` Web API is used to copy the generated wallet ID to the clipboard. 

Note: This is a basic implementation and doesn't involve any kind of security measures. In a real-world scenario, you'd want to add checks to ensure that the user doesn't already exist in your storage, implement better error handling, and have a secure backend server to store user data. 

## 🤝 Contributing 
Contributions, issues, and feature requests are welcome! Feel free to check the issues page. Pull requests are warmly welcome. If you make a major contribution, you are welcome to update the README as well. 
