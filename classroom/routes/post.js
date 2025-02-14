const express = require("express");
const app = express();
const router = express.Router();

// Post
//Index route
router.get("/posts", (req, res) => {
    res.send("GET for posts");
});

// Show route
router.get("/posts/:id", (req, res) => {
    res.send("GET for show posts");
});

// POST
router.post("/posts", (req, res) => {
    res.send("POST for posts");
});

// DELETE
router.delete("/posts/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;