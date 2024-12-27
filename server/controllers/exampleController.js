const ExampleModel = require('../models/exampleModel');

// @desc    Get all examples
// @route   GET /api/examples
// @access  Public
exports.getExamples = async (req, res) => {
  try {
    const examples = await ExampleModel.find();
    res.json(examples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
