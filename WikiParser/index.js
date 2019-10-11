const fs = require('fs');
const axios = require('axios');
const path = require('path');
const fileMapper = require('./util/fileMapper');
const fileGetter = require('./util/fileGetter');
const parser = require('./parser/parser');

let args = process.argv.splice(2);

(function (args){
    if(args.length == 0){
        console.log('please input more paras.')
        return;
    }
    if(args[0] === '-u'){
        fileMapper.getMapper();
        return;
    }
    if(args[0] === '-t'){
        if(args.length < 3){
            console.log('please input more paras.')
            return;
        }
        if(args[1] === '-f'){
            parser.parse(args[2]);
        }else if(args[1] === '-d'){
            let files = fileGetter.get(args[2]);
            for(let i = 0; i < files.length; i++){
                parser.parse(files[i]);
            }
        }
    }
})(args)

