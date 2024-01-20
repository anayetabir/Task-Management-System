const express = require('express');
const router = express.Router();
const taskController = require("../controller/taskController")
const eventController = require("../controller/eventController")

router.post("/task", taskController.createTask)
router.get("/task/:id", taskController.getTask)
router.get("/tasks", taskController.getTasks)
router.put("/task/:id", taskController.updateTask)
router.delete("/task/:id", taskController.deleteTask)




router.post("/event", eventController.createEvent)
router.get("/event/:id", eventController.getEvent)
router.get("/events", eventController.getEvents)
router.put("/event/:id", eventController.updateEvent)
router.delete("/event/:id", eventController.deleteEvent)


module.exports = router