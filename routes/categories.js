const express = require("express");
const { Category } = require("../models");
const paginate = require("../paginate/paginate");
const { handlingRequests } = require("../middlewares/handling-requests");
const requestDataAllowed = ["title", "description", "alias", "color"];
const router = express.Router();

router.get("/", (req, res) => {
    const { page } = req.query;
    paginate(Category, page, {
        order: [["id", "DESC"]]
    })
    .then(categories => res.json(categories))
    .catch(err => res.json(err));
});

router.get("/:id", (req, res) => {
    Category.findByPk(req.params.id)
    .then(category => res.json(category))
    .catch(err => res.json(err));
});

router.post("/", handlingRequests(requestDataAllowed), (req, res) => {
    Category.create(req.body)
    .then(category => res.json(category))
    .catch(err => res.json(err));
});

router.put("/:id", handlingRequests(requestDataAllowed), (req, res) => {
    Category.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(category => res.json(category))
    .catch(err => res.json(err));
});

router.delete("/:id", (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(category => res.json(category))
    .catch(err => res.json(err));
});

module.exports = router;
