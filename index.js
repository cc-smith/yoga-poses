const express = require('express')
const path = require('path')
const axios = require('axios');
const url = require('url');
const fs = require('fs');
const app = express();

// Get the json file containg the poses
let data = JSON.parse(fs.readFileSync('poses.json'));
let poses = data["poses:"]

app.get('/:query&:pose_name?&:category?&:difficulty?&:benefits?', (req, res) => {
  var pose_filter = req.params
  console.clear()
  console.log("FILTER:", pose_filter)

  var result = poses.filter(item => {
    for (let key in pose_filter) {

      // Skip first param and params that are undefined
      if (key == "query" || pose_filter[key] == undefined) {
        continue;
      }

      console.log("\n\nkey:", key, "\nfilter:", pose_filter[key], "\nitem:", item[key])

      if (item[key] === undefined) {
        return true;
      }

      // if (item[key].toLowerCase().includes(pose_filter[key].toLowerCase())) {
      //   return true;
      // }
      // if (item[key] === undefined || item[key] != pose_filter[key])
      if (item[key] != pose_filter[key])
        return false;
    }
    return true;
  });

  res.send(result)
})

// axios.get('https://yoga-poses-api.herokuapp.com/search?', { 
// app.get('http://localhost:5000/get?', {
//   params: {
//     pose: this.pose,
//   }
// })
// .then(response => {
//   console.log(params)
//   // console.log(response.data.url);
//   // console.log(response.data.explanation);
// })
// .catch(error => {
//   console.log(error);
// });


// let testing = JSON.stringify(poses2)
// fs.writeFile('myjsonfile.json', testing, function(err) {
//   if (err) throw err;
//   console.log('complete');
//   }
// );

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
