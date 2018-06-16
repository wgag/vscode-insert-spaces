# Insert Spaces between Half/Fullwidths

[![Build Status](https://travis-ci.org/wgag/vscode-insert-spaces.svg?branch=master)](https://travis-ci.org/wgag/vscode-insert-spaces)

A Visual Studio Code extension for formatting documents written in Japanese or Chinese.

## Overview

This extension formats your document by inserting spaces between half- and full-width characters.
For example, the text

> 今日は2017年8月11日(金)、快晴です。

is formatted as follows:

> 今日は 2017 年 8 月 11 日 (金)、快晴です。

## Usage

1. Open a document to format.
2. Press ``Ctrl+Shift+I`` to format the document.
   If it does not work, press ``Ctrl+Shift+P`` and run the command ``Insert Spaces between Half/Fullwidths``.

By default, spaces are inserted to the whole document.
To format a part of the document, highlight that part beforehand.

## Installation

### Installing from VS Code

This extension is available on the [marketplace](https://marketplace.visualstudio.com/items?itemName=tnagao7.insert-spaces-between-half-fullwidths).

In VS Code, press ``Ctrl+P`` and execute ``ext install insert-spaces-between-half-fullwidths``.

### Building from Source

Run the following commands:

```
$ git clone https://github.com/tnagao7/vscode-insert-spaces.git
$ cd vscode-insert-spaces
$ npm install
$ npm run compile
$ mv . ~/.vscode/extensions
```
