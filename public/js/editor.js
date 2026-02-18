// Initialize Monaco Editor
require.config({
    paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs' }
});

require(['vs/editor/editor.main'], function() {
    monaco.editor.create(document.getElementById('container'), {
        value: '',
        language: 'javascript'
    });
});

function runCode() {
    const code = monaco.editor.getModels()[0].getValue();
    try {
        // Run the code in a sandbox
        eval(code);
    } catch (error) {
        displayError(error);
    }
}

function formatCode() {
    const formattedCode = monaco.languages.typescript.formatCodeBlock();
    monaco.editor.getModels()[0].setValue(formattedCode);
}

function displayOutput(output) {
    document.getElementById('output').textContent = output;
}

function displayError(error) {
    document.getElementById('error').textContent = error.message;
}

function addConsoleOutput(message) {
    const outputDiv = document.getElementById('console-output');
    outputDiv.textContent += message + '\n';
}

function switchTab(tabId) {
    // Code to switch between tabs
}

function loadExample(exampleCode) {
    monaco.editor.getModels()[0].setValue(exampleCode);
}

function checkServerHealth() {
    // Code to check server health
    fetch('/health')
        .then(response => response.json())
        .then(data => {
            displayOutput('Server is healthy');
        })
        .catch(error => displayError(error));
}

// Keyboard shortcuts
monaco.editor.addCommand(monaco.KeyCode.F5, runCode);
monaco.editor.addCommand(monaco.KeyCode.F9, formatCode);