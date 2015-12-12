// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!'); 

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	var disposable = vscode.commands.registerCommand('extension.kill', () => {
		// Display a message box to the user
        var editor = vscode.window.activeTextEditor;
        editor.edit(editBuilder => {            
            var currentLine = 
                editor.document.lineAt(editor.selection.active);            
            var range = new vscode.Range(editor.selection.start,
                                         currentLine.range.end);
            editor.selection = 
                new vscode.Selection(range.end, range.start);
            vscode.commands.executeCommand("editor.action.clipboardCutAction");
            //editBuilder.delete(range);
        });
	});
	
	context.subscriptions.push(disposable);
}