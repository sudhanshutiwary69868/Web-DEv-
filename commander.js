const fs=require('fs')
const {Command} =require('commander') //its a class that is why
const program = new Command();

program
.name('counter')
.description("cli to count")
.version('0.8.0')

program.command('count')
.description('count number of words')
.argument('<file>','file to count')
.action((file) => {
  fs.readFile(file,'utf-8',function(err,data){
    if(err){
      console.log(err)
    }
    else{
      const lines=data.split(' ').length;
      console.log(`there are ${lines} lines in ${file}`)
    }
  })

})
program.command
program.parse()
