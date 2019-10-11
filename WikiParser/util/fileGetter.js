const fs = require('fs');
const path = require('path');

function get(dir){
    let fileList = [];
    _get(dir, fileList);
    // console.log(fileList);
    return fileList;
}

function _get(dir, fileList){
    const files = fs.readdirSync(dir);
    files.forEach((item, index) => {
        var fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if(stat.isDirectory()){
            _get(fullPath, fileList);
        }else{
            fileList.push(fullPath);
        }
    });
}


module.exports = {
    get,
}