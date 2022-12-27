const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", async (req, res) => {
	const event = req.body;

	await axios.post("http://localhost:4000/events", event).catch((err) => {
		console.log(err.message, "4000");
	});

	await axios.post("http://localhost:4001/events", event).catch((err) => {
		console.log(err.message, "4001");
	});

	await axios.post("http://localhost:4002/posts", event).catch((err) => {
		console.log(err.message, "4002");
	});

	await axios.post("http://localhost:4003/events", event).catch((err) => {
		console.log(err.message, "4003");
	});
	res.send({ status: "OK" });
});

app.listen(4005, () => {
	console.log("Listeniing on 4005");
});
