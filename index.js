const express = require('express')
const path = require('path')
const axios = require('axios');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

axios.get('https://yoga-poses-api.herokuapp.com/search?q=', { 
  params: {
    pose: this.pose,
    category: this.cateogry,
    difficulty: this.difficulty
  }
})
.then(response => {
  console.log(params)
  // console.log(response.data.url);
  // console.log(response.data.explanation);
})
.catch(error => {
  console.log(error);
});
