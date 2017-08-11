'use strict';

import { window, Range, Position, Selection, TextEditor } from 'vscode';

export default class Spacer {

    pattern1: RegExp; 
    pattern2: RegExp;
    replaceValue: string;

    constructor() {
        // See also http://www.unicode.org/Public/UNIDATA/Blocks.txt

        let basicLatin = '[0-9A-Za-z]';
        let latin1Supplement = '[\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u00FF]';
        let latinExtendedA = '[\\u0100-\\u017F]';
        let latinExtendedB = '[\\u0180-\\u01BF\\u01C4-\\u024F]';
        let halfwidthChars = 
            [basicLatin, latin1Supplement, latinExtendedA, latinExtendedB].join('|');

        let openingParens = '[\\(\\[\\{]';
        let closingParens = '[\\)\\]\\}]';

        let hiragana = '[\\u3040-\\u309F]';
        let katakana = '[\\u30A0-\\u30FF]';
        let cjkUnifiedIdeographs = '[\\u4E00-\\u9FFF]';
        let cjkUnifiedIdeographsA = '[\\u3400-\\u4DBF]';
        let cjkUnifiedIdeographsB = '[\\ud840-\\ud868][\\udc00-\\udfff]|\\ud869[\\udc00-\\uded6]';
        let fullwidthChars = 
            [hiragana, katakana, cjkUnifiedIdeographs,
                cjkUnifiedIdeographsA, cjkUnifiedIdeographsB].join('|');

        this.pattern1 = new RegExp(`(${halfwidthChars}|${closingParens})(${fullwidthChars})`, 'g');
        this.pattern2 = new RegExp(`(${fullwidthChars})(${halfwidthChars}|${openingParens})`, 'g');
        this.replaceValue = '$1 $2';
    }

    insertSpaces(text: string): string {
        return text
            .replace(this.pattern1, this.replaceValue)
            .replace(this.pattern2, this.replaceValue);
    }

    insertSpacesToCurrentDocument() {
        let editor = window.activeTextEditor;

        if (editor.selection.isEmpty) {
            this.insertSpacesEntire(editor);
        } else {
            this.insertSpacesSelection(editor);
        }
    }

    insertSpacesSelection(editor: TextEditor) {
        let document = editor.document;
        let text = document.getText(editor.selection);
        let newText = this.insertSpaces(text);

        if (newText !== text) {
            editor.edit(edit => {
                edit.replace(editor.selection, newText);
            });
        }
    }

    insertSpacesEntire(editor: TextEditor) {
        let document = editor.document;
        let text = document.getText();
        let caretOffset = document.offsetAt(editor.selection.active);
        let textBeforeCaret = text.substring(0, caretOffset);

        let newText = this.insertSpaces(text);

        let wholeRange = new Range(
            new Position(0, 0),
            document.positionAt(text.length));

        let numMatchesBeforeCaret =
            (textBeforeCaret.match(this.pattern1) || []).length +
            (textBeforeCaret.match(this.pattern2) || []).length;

        if (newText !== text) {
            editor.edit(edit => {
                edit.replace(wholeRange, newText);
            }).then(() => {
                // caret position needs to be manually updated here
                let newCaretPos = document.positionAt(caretOffset + numMatchesBeforeCaret);
                editor.selection = new Selection(newCaretPos, newCaretPos);
            });
        }
    }
}