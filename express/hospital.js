const express = require('express');
const app = express();

const user = [{
  names: "sudhanshu",
  kidneys: [{
    healthy: false
  }]
}];
app.use(express.json())
app.get('/', function(req, res) {
  const sudhanshukidneys = user[0].kidneys;

  // Filter the healthy kidneys
  const healthyKidneys = sudhanshukidneys.filter(kidney => kidney.healthy);
  
  // Get the number of kidneys
  const numberofkidneys = sudhanshukidneys.length;
  
  // The number of healthy kidneys is the length of the filtered array
  const numberofthemhealthy = healthyKidneys.length;
  
  // The number of unhealthy kidneys is the total kidneys minus the healthy ones
  const numberofunhealthy = numberofkidneys - numberofthemhealthy;

  res.json({
    numberofkidneys,
    numberofthemhealthy,
    numberofunhealthy
  });
});
app.post("/",function(req,res){

  const ishealthy=req.body.ishealthy
  user[0].kidneys.push({
    healthy:ishealthy
  })
  res.json({mssg:"done"})
})
app.put("/",function(req,res){
  for(let i=0;i<user[0].kidneys.length;i++){
    user[0].kidneys[i].healthy=true;
  }
  res.json({})
})
//removing all the unhealthy kidneys
app.delete("/",function(req,res){
  //only if bad kidneys then delete else return 411
if(atleatoneunhealthys()){
  const newKindneys=[]
  for(let i=0;i<user[0].kidneys.length;i++){
   if(user[0].kidneys[i].healthy){
    newKindneys.push({
      healthy:true
    })
   }
  }
  user[0].kidneys=newKindneys
  res.json({mssg:"done"})

}
else{
  res.status(411).json({
    msg:"you have no bad kidneys"
  })
}

})

function atleatoneunhealthys(){
  let atleatoneunhealthy=false
  for(let i=0;i<user[0].kidneys.length;i++){
    if(!user[0].kidneys[i].healthy){
      atleatoneunhealthy=true
    }
   }
   return atleatoneunhealthy
}
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

