const Itinerary = require('../models/itinerary')

const commentsControllers = {
    addComment: async (req, res) => {
      const user = req.user._id; 
      const {comment, itineraryId} = req.body.comment; 
 
      try {
        const newComment = await Itinerary.findOneAndUpdate(
          { _id: itineraryId },{ $push: { comments: { comment: comment, userId: user }}}, { new: true }
        ).populate("comments.userId", { firstName: 1, image: 1 });
        res.json({
          success: true,
          response: { newComment },
          message: "Thanks for your comments",
        });
      } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: "Something went wrong please try again in a few seconds",
        });
      }
    },
    modifyComment: async (req, res) => {

      const {comment} = req.body;
      const user = req.user._id;
      
      try {
        const newComment = await Itinerary.findOneAndUpdate(
          { "comments._id": req.body.commentID },{ $set: { "comments.$.comment": req.body.comment }}, { new: true }).populate("comments.userId", { firstName: 1, image: 1 })

        res.json({
          success: true,
          response: { newComment },
          message: "Your comment has been modified",
        });

      } catch (error) {
        console.log(error);
        res.json({
          success: true,
          message: "Something went wrong please try again in a few seconds",
        });
      }
    },
  
    deleteComment: async (req, res) => {
        const id = req.params.id

      try {
        const deleteComment = await Itinerary.findOneAndUpdate(
          { "comments._id":id }, {$pull: {comments: {_id:id}}},{ new: true }).populate("comments.userId", { firstName: 1, image: 1 });

        res.json({
          success: true,
          response: {deleteComment},
          message: "You have deleted the comment",
        });
      } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: "Something went wrong, try it again in some minutes",
        });
      }
    },
  };
  module.exports = commentsControllers;