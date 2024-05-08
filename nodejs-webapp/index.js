const express = require('express');
var os = require("os");

const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

const dotenv = require('dotenv');
dotenv.config();



app.get('/', function(req, res) {
  var remoteAddress = req.headers['x-forwarded-for'] ||
     req.socket.remoteAddress ||
     null;
  const server_details = {
    hostname: os.hostname(),
    userip: remoteAddress, 
    time: new Date()
  };
  const env_details = {
    PORT: process.env.PORT,
    BG_COLOR: process.env.BG_COLOR,
    FG_COLOR: process.env.FG_COLOR
  };
  res.render('pages/index', {data:server_details, env: env_details});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});