const express = require('express');
const app = express();
const port = 80;
app.use(express.json());

app.get('/getlist', (req, res) => {
    res.send({ sensor_suhu: [{ suhu: 38, waktu: "2023-01-23 15:03" }, { suhu: 39, waktu: "2023-01-23" }] })
});

app.get('/sensor1', (req, res) => {
    res.send({ sensor1: "200" });
});

app.post("/sensorpost", (req, res) => {
    //nyimpan ke database
    res.send("data yang terkirim adalah" + req.body.suhu);
});

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});