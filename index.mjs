import express from "express";
import open from "open";
import serialport from "serialport";

let app = express();

app.get("/", async (req, res) => {
    res.json(await serialport.SerialPort.list());
});

app.listen(8888, () => {
	open("http://localhost:8888");
});
