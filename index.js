// poses.json file taken from: 

const express = require('express')
const path = require('path')
const url = require('url');
const fs = require('fs');
const app = express();

// Get the json file containg the poses
let data = JSON.parse(fs.readFileSync('poses.json'));
let poses = data["poses:"]

// http://localhost:5000/api?name=nameValue&category=categoryValue&difficulty=difficultyValue&benefits=benefitsValue
app.get('/api', (req, res) => {
  // Get the filter criterion as provided in the get request url
  var url_parsed = url.parse(req.url, true);
  var poseFilter = url_parsed.query
  // var poseFilter = {
  //   "name": req.query.name,
  //   "category": req.query
  // }
  console.log("***", poseFilter)
  // Filter the poses.json file with the filter criterion
  var result = poses.filter(item => {
    var flag = true  // Set the conditional flag

    for (let key in poseFilter) {

      // Skip first param and params that are undefined
      if (poseFilter[key] == undefined) {
        continue;
      }

      // Convert the filter criteria to readable format
      var poseFilterConverted = poseFilter[key].toLowerCase().split("-")

      // Search for each word within the filter
      poseFilterConverted.forEach(function(word) {
        if ( !item[key].toLowerCase().includes(word) ) {
          flag = false  // word was not found in the json object
        };
      });

    }
    return flag;

  });

  // Send the filtered json to the user
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(result, null, 4));
});
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
