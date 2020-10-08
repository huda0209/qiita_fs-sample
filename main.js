const fs = require('fs'); //nodeモジュール読みこみ
const fileManegerClass = require('./src/fileManeger.js') //クラスファイル読みこみ
const fileManeger = new fileManegerClass(fs);  //インスタンス化

const content = {"name" : "taro" , "age" : 30};
fileManeger.write1(content); //fsをメソッド内でインポートする　ファイルの相対パスをmain.jsがあるディレクトリからにする
fileManeger.write2(content); //fsをメソッド内でインポートする　ファイルの相対パスをmain.jsがあるディレクトリからにする
fileManeger.write3(content); //fsをコンストラクタから受け取る　ファイルの相対パスをfileManeger.jsがあるディレクトリからにする
fileManeger.write4(content); //fsをメソッド内でインポートする　ファイルの相対パスをfileManeger.jsがあるディレクトリからにする