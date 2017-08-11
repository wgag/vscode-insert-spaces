# Insert Spaces between Half/Fullwidths

A Visual Studio Code extension for formatting documents written in Japanese or Chinese.

## Overview

This extension formats your documents by inserting spaces between half- and full-width characters.
For example, the document

> 今日は2017年8月11日(金)。

is formatted as follows:

> 今日は 2017 年 8 月 11 日 (金)。


## Installation

1. Move to your VS Code extension directory.
```
$ cd ~/.vscode/extensions
```

2. Clone the repository.
```
$ git clone https://github.com/tnagao7/vscode-insert-spaces.git
```

3. Move to the generated directory ``vscode-insert-spaces`` and download necessary packages.
```
$ cd vscode-insert-spaces
$ npm install
```
4. Compile the extension.
```
$ npm run compile
```

## Usage

1. Open a document you want to format.
2. Press ``Ctrl+Shift+J`` to format the document.
   If the keybind ``Ctrl+Shift+J`` does not work, press ``Ctrl+Shift+P`` and run the command named ``Insert Spaces between Half/Fullwidths``.

By default, spaces are inserted to the whole document.
To apply the operation to a part of the document, highlight the part before pressing ``Ctrl+Shift+J``.