const express = require('express')
const { exec } = require("child_process");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  exec("playerctl play", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})