class fileManeger {
    constructor(fs) {
        this.fs = fs;
    };
    //fsをコンストラクタから受け取る　ファイルの相対パスをmain.jsがあるディレクトリからにする
    async write1 (content){
        const fs = this.fs;
        try{fs.writeFileSync('./config/write-1.json', JSON.stringify(content, null, "\t"),'utf8');
        console.log(`write1 complete`)
        }catch(e){console.log(`write1 fail\n-------------------------------\n${e}`)}
    };
    //fsをメソッド内でインポートする　ファイルの相対パスをmain.jsがあるディレクトリからにする
    async write2 (content) {
        const fs = require('fs');
        try{fs.writeFileSync('./config/write-2.json', JSON.stringify(content, null, "\t"),'utf8');
        console.log(`write2 complete`)
        }catch(e){console.log(`write2 fail\n-------------------------------\n${e}`)}
    };
    //fsをコンストラクタから受け取る　ファイルの相対パスをfileManeger.jsがあるディレクトリからにする
    async write3 (content) {
        const fs = this.fs;
        try{fs.writeFileSync('../config/write-3.json', JSON.stringify(content, null, "\t"),'utf8');
        console.log(`write3 complete`)
        }catch(e){console.log(`write3 fail\n-------------------------------\n${e}\n-------------------------------\n`)}
    };
    //fsをメソッド内でインポートする　ファイルの相対パスをfileManeger.jsがあるディレクトリからにする
    async write4 (content) {
        const fs = require('fs');
        try{fs.writeFileSync('../config/write-4.json', JSON.stringify(content, null, "\t"),'utf8');
        console.log(`write4 complete`)
        }catch(e){console.log(`write4 fail\n-------------------------------\n${e}\n-------------------------------\n`)}
    };
};
module.exports = fileManeger; //クラス出力