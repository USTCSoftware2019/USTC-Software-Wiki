const axios = require('axios');
const fs = require('fs');

let initUrl = 'https://2019.igem.org/Special:ListFiles';
let initUrlParam = {
    limit: 200,
    user: 'ZsStrike'
};

function getMapper(url = initUrl, urlParam  = initUrlParam){
    axios.get(url, {
        params: initUrlParam
    }).then(function(res){
        const baseDir = 'https://2019.igem.org';
        let mapper = {};
        let pattern = /\(<a href="(.*?)">file<\/a>\)/g;
        let matches = res.data.match(pattern);
        for(let i = 0; i < matches.length; i++){
            let filename = matches[i].match(/(?<filename>T--USTC-.*?\..*?)"/).groups.filename;
            let filepath = baseDir + matches[i].match(/href="(?<path>.*?\..*?)"/).groups.path;
            // console.log(filename, filepath);
            mapper[filename] = filepath;
        }
        // console.log(mapper);
        fs.writeFile('./util/mapper.json', JSON.stringify(mapper), function(err){
            if(err){
                console.log('getMapper--->writeFile err.');
                return null;
            }
            console.log('getMapper--->writeFile success.');
            // console.log(mapper); 
        });
    }).catch(function(err){
        console.log('getMapper--->get err.');
        return null;
    });
}

module.exports = {
    getMapper,
}