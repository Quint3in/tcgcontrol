const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // ...existing code...
});

module.exports = mongoose.model('Example', ExampleSchema);
