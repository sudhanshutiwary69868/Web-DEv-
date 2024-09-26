const express = require('express');
const app = express();
app.use(express.json());

let todos = [
  {
    "name": "sudhanshu",
    "todo1": {
      "dream": "be famous",
      "achieved": false
    },
    "todo2": "be a hero"
  },
  {
    "name": "arun",
    "todo1": {
      "dream": "be a hero",
      "achieved": true
    },
    "todo2": "be famous"
  },
  {
    "name": "priya",
    "todo1": {
      "dream": "open a venture",
      "achieved": false
    }
  }
];

// GET route
app.get('/', function(req, res) {
  const r = req.query.r;
  if (r === "all") {
    res.json(todos);
  } else {
    const index = parseInt(r, 10);
    if (isNaN(index) || index < 0 || index >= todos.length) {
      res.status(404).json({ message: "invalid index" });
    } else {
      res.json(todos[index]);
    }
  }
});

// POST route
app.post("/", function(req, res) {
  const a = req.body;
  if (!a.name) {
    return res.status(400).json({ message: "name is required" });
  }
  if (!a.todo1 || !a.todo1.dream) {
    return res.status(400).json({ message: "todo1 is required" });
  } else {
    todos.push(a);
    res.json(a);
  }
});

// PUT route
app.put("/", function(req, res) {
  let flag = false;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].todo1.achieved === false) {
      todos[i].todo1.achieved = true;
      flag = true;
      
    }
  }

  if (flag) {
    res.json({ message: "dreams are achieved" });
  } else {
    res.json({ message: "try to have bigger dreams now as sky is the limit" });
  }
});
app.delete("/r/:d",function(req,res){
  const d=req.params.d
  const e=parseInt(d)
  if(d<todos.length){
    todos.splice(e,1)
    res.json(todos)
  }
  else{
    res.status(404).json({message:"invalid index"})
  }

})

app.listen(3000, function() {
  console.log("listening on port 3000");
});
