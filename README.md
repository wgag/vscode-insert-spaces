# Insert Spaces between Half/Fullwidths

A Visual Studio Code extension for formatting documents written in Japanese or Chinese.

## Overview

This extension formats your documents by inserting spaces between half- and full-width characters.
For example, the document

> 今日は2017年8月11日(金)。

is formatted as follows:

> 今日は 2017 年 8 月 11 日 (金)。

## Usage

1. Open a document you want to format.
2. Press ``Ctrl+Shift+J`` to format the document.
   If the keybind ``Ctrl+Shift+J`` does not work, press ``Ctrl+Shift+P`` and run the command named ``Insert Spaces between Half/Fullwidth Characters``.

By default, spaces are inserted to the whole document.
To apply the operation to a part of a document, highlight the part before pressing ``Ctrl+Shift+J``.

## Installation

### Installing from VS Code

This extension is available on the [marketplace](https://marketplace.visualstudio.com/items?itemName=tnagao7.insert-spaces-between-half-fullwidths).

In VS Code, press ``Ctrl+P`` and execute ``ext install insert-spaces-between-half-fullwidths``.

### Building from Source

Run the following commands:

```
$ cd ~/.vscode/extensions
$ git clone https://github.com/tnagao7/vscode-insert-spaces.git
$ cd vscode-insert-spaces
$ npm install
$ npm run compile
```
