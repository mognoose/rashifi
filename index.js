const express = require('express')
const { exec } = require("child_process");
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const port = 3000

var corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));

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
app.post('/youtube/', (req, res) => {
  console.log("Loading video from ",req.body.url);
  command("mpv --fullscreen "+req.body.url)
  return
})
app.get('/cmd/:cmd', (req, res) => {
  let result = command(req.params.cmd)
  res.send(result)
  return result
})

const command = function(cmd){
  let result = exec(cmd, (error, stdout, stderr) => {
    if(error){console.log(`error: ${error.message}`);return;}
    if(stderr){console.log(`stderr: ${stderr}`);return;}
    console.log(`server: ${stdout}`);
    return (`${stdout}`);
});
return result
}

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})