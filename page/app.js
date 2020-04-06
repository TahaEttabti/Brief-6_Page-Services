const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.set('view engine' , 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : false}))

const  data = fs.readFileSync('data/service.json')
array = JSON.parse(data)
// send Data to Browser //
app.get('/service', (req, res) => {
    res.render('services', {array})
});
// Add Service to json //
app.post('/service',(req,res)=>{
  array.push({
    "ID": array.length +1,
    "image": req.body.image,
    "Name": req.body.Name,
    "Description": req.body.Description
  })
  const data = JSON.stringify(array)
  fs.writeFileSync('data/service.json', data, 'utf-8')
  res.redirect('/service')
});
app.listen(8080, () => console.log('server listen on port 8080'));
