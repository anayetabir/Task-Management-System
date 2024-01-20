const feedbackModel = require("../model/feedbackModel")


exports.createFeedback = async (req, res) => {
    const reqBody = req.body;

    try {
        const result = await feedbackModel.create(reqBody);
        res.status(200).json({
            message: 'created successfully',
            feedback: result,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getAllFeedback = async (req, res) => {
    try {
        let allFeedback;


        if (req.query.sort === 'trending') {

            allFeedback = await feedbackModel.find().sort({ like: -1 });
        } else {

            allFeedback = await feedbackModel.find().sort({ createdAt: -1 });
        }

        res.status(200).json({
            message: 'All feedback fetched successfully',
            feedback: allFeedback,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.likeFeedback = async (req, res) => {
    const { feedbackId } = req.params;

    try {

        const feedbackItem = await feedbackModel.findById(feedbackId);

        if (!feedbackItem) {
            return res.status(404).json({ message: 'Feedback not found' });
        }


        feedbackItem.isLiked = !feedbackItem.isLiked;


        feedbackItem.like = feedbackItem.isLiked ? feedbackItem.like + 1 : feedbackItem.like - 1;


        await feedbackItem.save();


        res.status(200).json({ message: 'Like updated successfully', feedbackItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};




