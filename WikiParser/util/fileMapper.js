const axios = require('axios');
const fs = require('fs');

let initUrl = 'https://2019.igem.org/Special:ListFiles';
let initUrlParam = {
    limit: 500,
    ilsearch: '',
    user: 'ZsStrike'
};

let users = ['ZsStrike', 'yuriko', 'Jarvis_ustc'];

// function getMapper(url = initUrl, urlParam  = initUrlParam){
//     // console.log('test getMapper1');
//     initUrlParam.user = username;
//     axios.get(url, {
//         params: urlParam
//     }, {
//         headers: {
//             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
//         }
//     }).then(function(res){
//         // console.log('test getMapper2', res);
//         const baseDir = 'https://2019.igem.org';
//         let mapper = {};
//         let pattern = /\(<a href="(.*?)">file<\/a>\)/g;
//         let matches = res.data.match(pattern);
//         for(let i = 0; i < matches.length; i++){
//             let filename = matches[i].match(/(?<filename>T--USTC-.*?\..*?)"/).groups.filename;
//             let filepath = baseDir + matches[i].match(/href="(?<path>.*?\..*?)"/).groups.path;
//             // console.log(filename, filepath);
//             mapper[filename] = filepath;
//         }
//         // console.log(mapper);
//         fs.writeFile('./util/mapper.json', JSON.stringify(mapper), function(err){
//             if(err){
//                 console.log('getMapper--->writeFile err.');
//                 return null;
//             }
//             console.log('getMapper--->writeFile success.');
//             // console.log(mapper);
//         });
//     }).catch(function(err){
//         console.log('getMapper--->get err.');
//         // console.log(err);
//         return null;
//     });
// }

function getMapper(url = initUrl, urlParam  = initUrlParam){
    // console.log('test getMapper1');
    let mapper = {};
    let flags = new Array(users.length);
    for (let i = 0; i < users.length; i++) {
        flags[i] = 0;
        axios.get(url, {
            params: {
                limit: 500,
                ilsearch: '',
                user: users[i]
            }
        }, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
            }
        }).then(function(res){
            // console.log('test getMapper2', res);
            const baseDir = 'https://2019.igem.org';
            let pattern = /\(<a href="(.*?)">file<\/a>\)/g;
            let matches = res.data.match(pattern);
            for(let i = 0; i < matches.length; i++){
                let filename = matches[i].match(/(?<filename>T--USTC-.*?\..*?)"/).groups.filename;
                let filepath = baseDir + matches[i].match(/href="(?<path>.*?\..*?)"/).groups.path;
                // console.log(filename, filepath);
                mapper[filename] = filepath;
            }
            flags[i] = 1;
            if(flags.indexOf(0) === -1){
                console.log(mapper);
                fs.writeFile('./util/mapper.json', JSON.stringify(mapper), function(err){
                    if(err){
                        console.log('getMapper--->writeFile err.');
                        return null;
                    }
                    console.log('getMapper--->writeFile success.');
                    // console.log(mapper);
                });
            }
        }).catch(function(err){
            console.log('getMapper--->get err.');
            // console.log(err);
            return null;
        });
    }
    // initUrlParam.user = username;

}

module.exports = {
    getMapper,
}