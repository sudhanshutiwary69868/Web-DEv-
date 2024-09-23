const { log } = require('console');
const fs = require('fs')
let counter=0
function main(file){
  fs.readFile(file,'utf-8',function(err,data){
    if(err){
      console.log(err);
      
    }
    else{
      
      for(let i=0;i<data.length;i++)

        {
          if (/[a-zA-Z]/.test(data[i])){ counter++}
     
        
      }
      console.log(counter);
    }
  })

}

main(process.argv[2] )