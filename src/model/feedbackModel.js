const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    title: {
        type: String,
       
    },
    details: {
        type: String,
        
    },
    like: {
        type: Number,
        default: 0   
    }
},{
    timestamps: true,
    versionKey: false
}
)

const feedback = mongoose.model("feedback", feedbackSchema)

module.exports = feedback;