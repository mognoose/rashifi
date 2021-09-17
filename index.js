const express = require('express')
const { exec } = require("child_process");
const cors = require('cors')
const app = express()
const port = 3000

var corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions))

app.get('/', (req, res, next) => {
  res.send('Hello World!')
  let result = command("echo 'Hello World!'")
})
app.get('/spotify', (req, res) => {
  command("spotify")
  res.send('Spotify: Opened')
})
app.get('/spotify/:cmd', (req, res) => {
  command("playerctl "+req.params.cmd)
  res.send('Spotify: '+req.params.cmd)
})
app.get('/youtube/:url', (req, res) => {
  command("brave-browser --app='https://www.youtube.com/watch?v='"+req.params.url)
  res.send('Playing video on Youtube')
})

const command = function(cmd){
  result = exec(cmd, (error, stdout, stderr) => {
    if(error){console.log(`error: ${error.message}`);return;}
    if(stderr){console.log(`stderr: ${stderr}`);return;}
    console.log(`server: ${stdout}`);
});
}

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})