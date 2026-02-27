const express = require("express");
const router = express.Router();
const queryController = require("../controllers/query");
const wrapAsync = require("../utils/wrapAsync");

router.post("/sql", wrapAsync(queryController.executeQuery));
router.post("/hint", wrapAsync(queryController.hint));

module.exports = router;
