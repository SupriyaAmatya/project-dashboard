const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Project Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  businessGoal: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  techStacks: {
    type: [String],
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
}, { timestamps: true });

module.exports = Project = mongoose.model('project', ProjectSchema);
