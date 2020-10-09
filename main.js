const fs = require('fs'); //nodeモジュール読みこみ
const fileManegerClass = require('./src/fileManeger.js') //クラスファイル読みこみ
const fileManeger = new fileManegerClass();  //インスタンス化

const content = {"name" : "taro" , "age" : 30};

//fsを引数から受け取る　相対パスをmain.jsがあるディレクトリからに
    fileManeger.write1(content, fs);

//fsをメソッド内でインポート　相対パスをmain.jsがあるディレクトリからに
    fileManeger.write2(content);

//fsを引数から受け取る　相対パスをfileManeger.jsがあるディレクトリからに
    fileManeger.write3(content, fs);

//fsをメソッド内でインポート　相対パスをfileManeger.jsがあるディレクトリからに
    fileManeger.write4(content);