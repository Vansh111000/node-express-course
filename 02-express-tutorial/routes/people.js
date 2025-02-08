const express = require("express");
const router = express.Router();
let { people } = require("../data");
const {
    getPeople,
    createPerson,
    updatePerson,
    createPersonPostman,
    deletePerson,
} = require("../controllers/people");

//this is the way to use the controller in the routes and there are 2 ways
// 1. by using this way

// router.get("/", getPeople);

// router.post("/", createPerson);

// router.put("/:id", updatePerson);

// router.post("/postman",createPersonPostman);

// router.delete("/:id", deletePerson );

// or 

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;
