const express = require('express');
const router = express.Router();
const feedbackController = require("../controller/feedbackController")


router.post("/create", feedbackController.createFeedback)
router.get("/getallfeedback", feedbackController.getAllFeedback)

router.post('/like/:feedbackId', feedbackController.likeFeedback);


module.exports = router