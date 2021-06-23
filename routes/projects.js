const express = require("express");
const { Project } = require("../models");
const paginate = require("../paginate/paginate");
const { handlingRequests } = require("../middlewares/handling-requests");
const requestDataAllowed = ["title", "description", "state", "categoryId"];
const router = express.Router();

router.get("/", (req, res) => {
    const { page } = req.query;
    paginate(Project, page, {
        order: [["id", "DESC"]]
    })
        .then(projects => res.json(projects))
        .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
    Project.findByPk(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(500).json(err));
});

router.post("/", handlingRequests(requestDataAllowed), (req, res) => {
    Project.create(req.body)
        .then(project => res.json(project))
        .catch(err => res.status(500).json(err));
});

router.put("/:id", handlingRequests(requestDataAllowed), (req, res) => {
    Project.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(project => res.json(project))
        .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
    Project.destroy({
        where: {
            id: req.params.id
        }
    }).then(project => res.json(project))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
