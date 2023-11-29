const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
       
    },
    description: {
        type: String,
        
    },
    status: {
        type: String,
        
    },
    dueDate: {
        type: String,
        
    },
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task;