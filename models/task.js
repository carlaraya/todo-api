const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var TaskSchema = Schema({
  name: {type: String, required: true, max: 100},
  done: {type: Boolean, required: true},
  notes: {type: String, max: 300}
});

TaskSchema.plugin(timestamps);
//Export model
module.exports = mongoose.model('Task', TaskSchema);
