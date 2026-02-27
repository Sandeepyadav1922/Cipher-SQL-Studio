const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");

const assignmentControllers = require("../controllers/assignments");

router.get("/", wrapAsync(assignmentControllers.index));
router.get("/:id", wrapAsync(assignmentControllers.showAssignment));

module.exports = router;