const fs = require('fs');
const axios = require('axios');
const path = require('path');
const fileMapper = require('./util/fileMapper');
const fileGetter = require('./util/fileGetter');
const parser = require('./parser/parser');

let args = process.argv.splice(2);

(function (args){
    if(args.length === 0){
        console.log('please input more paras.')
        return;
    }
    // used to updated the mapper: node index.js -u
    if(args[0] === '-u'){
        if(args.length < 1){
            console.log('please input more paras.')
            return;
        }
        fileMapper.getMapper();
        return;
    }
    if(args[0] === '-t'){
        if(args.length < 3){
            console.log('please input more paras.')
            return;
        }
        // used to convert file: node index.js -t -f path/to/filename
        if(args[1] === '-f'){
            parser.parse(args[2]);
        }else if(args[1] === '-d'){
            // used to convert directory: node index.js -t -f path/to/directory/
            let files = fileGetter.get(args[2]);
            for(let i = 0; i < files.length; i++){
                if(path.extname(files[i]).search(/\.(html|js|css)/) !== -1){
                    console.log(files[i], "is being parsed...");
                    parser.parse(files[i]);
                }
            }
        }
        return;
    }
})(args);


