const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
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

const feedback = mongoose.model("feedback", feedbackSchema)

module.exports = feedback;