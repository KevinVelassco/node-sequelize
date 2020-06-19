const express = require("express");
const Task = require("../models/task");
const router = express.Router();

router.get("/", (req, res) => {
    Task.findAll()
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
});

router.post("/", (req, res) => {
    const {title, description, state} = req.body;

    Task.create({
        title, 
        description,
        state
    }).then(task => res.json(task))
    .catch(err => res.json(err));
});

module.exports = router;
