const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

const arr = [
  { names: "Sudhanshu", age: 20 },
  { names: "abc", age: 20 }
];

const prr = [
  { male: "abc" }
];

// Function to calculate the sum of numbers from 1 to n
function sum(n) {
  let c = 0;
  for (let i = 1; i <= n; i++) {
    c += i;
  }
  return c;
}

// GET route to return all names dynamically from the arr array
app.get("/arr", function(req, res) {
  const property = req.query.property; // Get the 'property' query parameter

  if (property === "names") {
    // Map over arr and extract names for all objects
    const namesList = arr.map(item => item.names).join(", ");
    res.send(namesList); // Send all names dynamically
  } else {
    // Handle invalid property case
    res.send("Invalid property requested. Use 'names' to get user names.");
  }
});

// GET route to return prr array data
app.get("/prr", function(req, res) {
  res.send(prr);
});

// GET route to calculate the sum of numbers
app.get("/", function(req, res) {
  const ans = parseInt(req.query.ans);
  const a = sum(ans);
  res.send("The sum of numbers from 1 to " + ans + " is " + a);
});

// POST route to add a new entry to the arr array
app.post('/', function(req, res) {
  const names = req.body.names;
  arr.push({
    names, 
    age: null  // Using null instead of string "null"
  });
  res.json({ message: "Inserted successfully", currentArray: arr }); // Return the updated array
});

// PUT route to update age
app.put('/', function(req, res) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age == null) {
      arr[i].age = 20;
    }
  }
  res.status(200).json({ message: "Successfully updated", currentArray: arr });
});

// DELETE route to remove entries with age 20
app.delete("/", function(req, res) {
  const initialLength = arr.length;
  
  // Filter the array to remove entries with age 20
  const filteredArray = arr.filter(item => item.age !== 20);
  
  if (filteredArray.length < initialLength) {
    // Clear the original array and populate it with the filtered items
    arr.length = 0; // Clear the original array
    arr.push(...filteredArray); // Push back the remaining items
    
    res.status(200).json({
      message: "Deleted elements with age 20",
      currentArray: arr
    });
  } else {
    // No entries with age 20 found
    res.status(404).json({
      message: "No entries with age 20 found"
    });
  }
});

// Start the server on port 3002
app.listen(3002, function() {
  console.log("Server is running on port 3002");
});
