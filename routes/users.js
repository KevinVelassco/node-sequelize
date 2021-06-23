const express = require("express");
const { User } = require("../models");
const { handlingRequests } = require("../middlewares/handling-requests");
const paginate = require("../paginate/paginate");
const requestDataAllowed = ["name", "email", "identification", "phone"];
const router = express.Router();

router.get("/", (req, res) => {
    const { page } = req.query;
    paginate(User, page, {
        order: [["id", "DESC"]]
    })
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
    User.findByPk(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

router.post("/", handlingRequests(requestDataAllowed), (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

router.put("/:id", handlingRequests(requestDataAllowed), (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(user => res.json(user))
        .catch(err => res.status(500).json(err));

});

router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(user => res.json(user))
        .catch(err => res.status(500).json(err));
})

module.exports = router;
