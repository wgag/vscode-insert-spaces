import * as assert from 'assert';
import * as vscode from 'vscode';
import Spacer from '../src/spacer';

suite("Spacer Tests", () => {

    test("fullwidth characters", () => {
        let spacer = new Spacer();
        assert.strictEqual(spacer.insertSpaces('かなabc'), 'かな abc');
        assert.strictEqual(spacer.insertSpaces('カナabc'), 'カナ abc');
        assert.strictEqual(spacer.insertSpaces('字abc'), '字 abc');  // CJK Unified Ideographs Extension
        assert.strictEqual(spacer.insertSpaces('㐧abc'), '㐧 abc');  // CJK Unified Ideographs Extension A
        assert.strictEqual(spacer.insertSpaces('𠮷abc'), '𠮷 abc');  // CJK Unified Ideographs Extension B
    });

    test("halfwidth characters", () => {
        let spacer = new Spacer();
        assert.strictEqual(spacer.insertSpaces('あいう123'), 'あいう 123');
        assert.strictEqual(spacer.insertSpaces('あいうlatin'), 'あいう latin'); 
        assert.strictEqual(spacer.insertSpaces('あいうç'), 'あいう ç');  // Latin 1 Supplement
        assert.strictEqual(spacer.insertSpaces('あいうŋ'), 'あいう ŋ');  // Latin Extended A
        assert.strictEqual(spacer.insertSpaces('あいうƍ'), 'あいう ƍ');  // Latin Extended B
        assert.strictEqual(spacer.insertSpaces('あいう('), 'あいう (');
        assert.strictEqual(spacer.insertSpaces('あいう['), 'あいう [');
        assert.strictEqual(spacer.insertSpaces('あいう{'), 'あいう {');
    });

    test("fullwidth followed by halfwidth", () => {
        let spacer = new Spacer();
        assert.strictEqual(spacer.insertSpaces('あいうabc'), 'あいう abc');
    });

    test("halfwidth followed by fullwidth", () => {
        let spacer = new Spacer();
        assert.strictEqual(spacer.insertSpaces('abcあいう'), 'abc あいう');
    });

    test("space not inserted inside parentheses", () => {
        let spacer = new Spacer();
        assert.strictEqual(spacer.insertSpaces('(あいう'), '(あいう');
        assert.strictEqual(spacer.insertSpaces('あいう)'), 'あいう)');
    });

});
