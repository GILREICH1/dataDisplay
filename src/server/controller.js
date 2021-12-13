const endpoint = "https://storage.googleapis.com/pxtask-eng/dummy_data.json";
const axios = require("axios").default;

async function getEvents(req, res) {
  try {
    const now = new Date();
    console.log({ timeOfRequest: now, requestIP: req.ip });
    const response = await axios.get(endpoint);
    const dataResponse = response.data;
    res.status(200).send(dataResponse);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = getEvents;
