const fs = require('fs');
const path = require('path');

function parse(filename){
    fs.readFile('./util/mapper.json', function(err, data){
        if(err){
            console.log('parse-->readFile err.');
            return;
        }
        let mapper = JSON.parse(data.toString());
        fs.readFile(filename, function(err, data){
            if(err){
                console.log('parse-->readFile err.');
                return;
            }
            let dataStr = data.toString();
            dataStr = jsTrans(dataStr);
            dataStr = cssTrans(dataStr);
            dataStr = imgTrans(dataStr, mapper);
            // dataStr = getBodyContent(dataStr);
            // delete ../ dir
            filename = filename.replace(/\.\.[\\\/]/g, "");
            // console.log(filename);
            let filepath = path.join('output/', filename);
            let fileDir = path.dirname(filepath);
            // console.log(fileDir);
            fs.mkdir(fileDir,{recursive: true}, (err) => {
                if(err){
                    console.log('err when mkdir');
                }
                fs.writeFile(filepath, dataStr, function(err){
                    if(err){
                        console.log('err when write file');
                        return;
                    }
                    console.log('write file success.');
                });
            });
            
        })
    })
}

function getBodyContent(dataStr){
    let match = dataStr.match(/<body>(?<content>(\s|\S)*)<\/body>/);
    return match.groups.content;
}



function jsTrans(dataStr){
    let dataStrRep = dataStr.replace(/\.\..*?Template\/js\/(?<filename>.*?)\.js/g,
            "https://2019.igem.org/Template:USTC-Software/js/$<filename>?action=raw&ctype=text/javascript");
    return dataStrRep;
}

function cssTrans(dataStr){
    let dataStrRep = dataStr.replace(/\.\..*?Template\/css\/(?<filename>.*?)\.css/g,
            "https://2019.igem.org/Template:USTC-Software/css/$<filename>?action=raw&ctype=text/css");
    return dataStrRep;
}

function imgTrans(dataStr, mapper){
    let dataStrRep = dataStr.replace(/\.\..*?File\/(?<filename>.*?\.(png|svg|jpg|gif|woff))/g,
            function(match, p1){
                // console.log(mapper[p1]);
                return mapper[p1];
            });
    return dataStrRep; 
}

module.exports = {
    parse,
}