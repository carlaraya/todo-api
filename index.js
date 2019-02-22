const app = require('express')();
const routes = require('./routes');
const tasksRoutes = require('./routes/tasks');

var mongoose = require('mongoose');
var mongoDB = process.env.TODODB;
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', routes);
app.use('/tasks', tasksRoutes);

app.set('port', (process.env.PORT || 8080))
app.listen(app.get('port'), () => {
  console.log('App listening on port ' + app.get('port'));

});
