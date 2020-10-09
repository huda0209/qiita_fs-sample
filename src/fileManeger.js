class fileManeger {
    
    //fsを引数から受け取る　相対パスをmain.jsがあるディレクトリからに
    async write1 (content,fs){
        try{
            fs.writeFileSync('./config/write-1.json', JSON.stringify(content, null, "\t"),'utf8');
            console.log(`write1 complete`);
        }catch(e){
            console.log(`write1 fail\n${e}\n-------------------------------\n`);
        };
    };

    //fsをメソッド内でインポート　相対パスをmain.jsがあるディレクトリからに
    async write2 (content) {
        const fs = require('fs');
        try{
            fs.writeFileSync('./config/write-2.json', JSON.stringify(content, null, "\t"),'utf8');
            console.log(`write2 complete`);
        }catch(e){
            console.log(`write2 fail\n${e}\n-------------------------------\n`);
        };
    };

    //fsを引数から受け取る　相対パスをfileManeger.jsがあるディレクトリからに
    async write3 (content,fs) {
        try{
            fs.writeFileSync('../config/write-3.json', JSON.stringify(content, null, "\t"),'utf8');
            console.log(`write3 complete`);
        }catch(e){
            console.log(`write3 fail\n${e}\n-------------------------------\n`);
        };
    };
    //fsをメソッド内でインポート　相対パスをfileManeger.jsがあるディレクトリからに
    async write4 (content) {
        const fs = require('fs');
        try{
            fs.writeFileSync('../config/write-4.json', JSON.stringify(content, null, "\t"),'utf8');
            console.log(`write4 complete`);
        }catch(e){
            console.log(`write4 fail\n${e}\n-------------------------------\n`);
        };
    };
};
module.exports = fileManeger; //クラス出力