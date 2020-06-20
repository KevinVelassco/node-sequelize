const express = require("express");
const { Task } = require("../models");
const paginate = require("../paginate/paginate");
const { handlingRequests } = require("../middlewares/handling-requests");
const requestDataAllowed = ["title", "description", "state"];
const router = express.Router();

router.get("/", (req, res) => {
    const { page } = req.query;
    paginate(Task, page, {
        order: [["id", "DESC"]]
    })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
});

router.get("/:id", (req, res) => {
    Task.findByPk(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

router.post("/", handlingRequests(requestDataAllowed), (req, res) => {
    Task.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.json(err));
});

router.put("/:id", handlingRequests(requestDataAllowed), (req, res) => {
    Task.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(task => res.json(task))
    .catch(err => res.json(err));
});

router.delete("/:id", (req, res) => {
    Task.destroy({
        where: {
            id: req.params.id
        }
    }).then(task => res.json(task))
    .catch(err => res.json(err));
});

module.exports = router;
