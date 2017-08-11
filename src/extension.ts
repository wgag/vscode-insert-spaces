'use strict';

import { window, commands, ExtensionContext } from 'vscode';
import Spacer from './spacer';

export function activate(context: ExtensionContext) {
    let disposable = commands.registerCommand('extension.insertspace', () => {
        let spacer = new Spacer();
        spacer.insertSpacesToCurrentDocument();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}