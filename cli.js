const fs = require('fs')
function main(file){
  fs.readFile(file,'utf-8',function(err,data){
    let total=1
    for(let i=0;i<data.length;i++){
    if(data[i]===" "){
      total++
    }

    }
    console.log(total)
  })

}
main(process.argv[2]) //node index.js   2)users/sudhanshu/a.txt