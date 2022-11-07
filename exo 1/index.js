const fs = require ('fs');
const path = require ('path');

const filedir = path.join("G:\\test1")

/*if(fs.statSync(filedir).isDirectory){
    fs.readdir(filedir.toString(), (err,files) => {
        if (err) throw err;

        console.log(files);
    })
}else if(fs.statSync(filedir).isFile){
    fs.readFile(filedir, (error, content) => {
        if (error) {
            fs.readdir()
        }

        console.log(content.toString());
        });

}*/

dirDirectory(filedir,0)

function dirDirectory(filePath,range) {
    //console.log(filePath.toString())
    var prefix = "";
    for(let i = 0;i < range;i++){
        prefix += " "
    }
    if(fs.statSync(filePath).isDirectory()){
        fs.readdir(filePath, (err,files) => {
            if (err) throw err;

            console.log(prefix + "-" + filePath.toString() + " (dossier avec " + files.length + " enfants)");
            //console.log(files)
            for(let i = 0;i< files.length;i++){
                const newPath = path.join(filePath + "\\" + files[i]);
                //console.log(range++ + " - "  + newPath)
                dirDirectory(newPath,range++)
            }
        })
    }else {
        fs.readFile(filePath, (err, content) => {
            if (err) throw err;

            fs.stat(filePath, (err, fileStats) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(prefix + "-" + filePath.toString() + " (" + fileStats.size + " octets)");
                }
            })

        });

    }
}



