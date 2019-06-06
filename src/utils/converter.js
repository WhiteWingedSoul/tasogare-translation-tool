import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

const kuroshiro = new Kuroshiro();

export class Japanese {
    hiraganaWords = {};
    constructor() {
    }

    async toHiragara(words) {
        if (!words) return;
        if (kuroshiro._analyzer == null) {
            await kuroshiro.init(new KuromojiAnalyzer({dictPath: "dict" }));
        }

        for (let index in words) {
            let word = words[index];
            let convertedWord = await kuroshiro.convert(word, {mode:"normal", to:"hiragana"});
            this.hiraganaWords[word] = convertedWord ? convertedWord : word;
        }
    }
}