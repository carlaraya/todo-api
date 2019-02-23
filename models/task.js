const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var TaskSchema = Schema({
  name: {type: String, required: true, max: 100},
  done: {type: Boolean, default: false},
  notes: {type: String, max: 300},
  priority: {type: Number, min: 0, max: 1000}
});

TaskSchema.plugin(timestamps);
//Export model
module.exports = mongoose.model('Task', TaskSchema);
