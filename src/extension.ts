import * as vscode from 'vscode'; 

export function activate(context: vscode.ExtensionContext) {
    var disposable = vscode.commands.registerCommand('extension.kill', () => {
        var editor = vscode.window.activeTextEditor;
        editor.edit(editBuilder => {            
            var currentLine = 
                editor.document.lineAt(editor.selection.active);            
            var range = new vscode.Range(editor.selection.start,
                                         currentLine.range.end);
            editor.selection = 
                new vscode.Selection(range.end, range.start);
            vscode.commands.executeCommand("editor.action.clipboardCutAction");
        });
    });
    
    context.subscriptions.push(disposable);
}