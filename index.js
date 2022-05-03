const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const accountSid = "AC119ab9903ec939d17f9c5cab938e5c8f";
const authToken = "6a2133a014090afc5b727218cc44bfb8";
const client = new twilio(accountSid, authToken);

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("server running...");
});

app.get("/send-text", (req, res) => {
  const { recipient, textmessage } = req.query;
  client.messages
    .create({
      body: textmessage,
      to: recipient,
      from: +17438004182,
    })
    .then((message) => console.log(message.body));
  res.send("successfull...");
});

app.listen(4000, () => console.log("Running on Port 4000"));
