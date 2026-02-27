const Assignment = require("../models/assignment");
const ExpressError = require("../utils/ExpressError");

module.exports.index = async(req, res) => {
    const allAssignment = await Assignment.find();
    res.status(200).json(allAssignment);
};

module.exports.showAssignment = async(req, res) => {
    const { id } = req.params;
    let assignment = await Assignment.findById(id);
    if(!assignment) {
        throw new ExpressError(404, "Assignment Not Found")
    }
    res.status(200).json(assignment);
}