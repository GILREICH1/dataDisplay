const { append } = require("express/lib/response");
const getEvents = require("./controller");

const router = require("express").Router();

router.get("/api/getSomething", (req, res) => res.send({ sounds: "good" }));
router.get("/events", getEvents);

module.exports = router;
