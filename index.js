const app = require('express')();
const formidable = require('express-formidable');
const routes = require('./routes');
const tasksRoutes = require('./routes/tasks');

const mongoose = require('mongoose');
const mongoDB = process.env.TODO_DB;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(formidable());
app.use('/', routes);
app.use('/tasks', tasksRoutes);

app.set('port', (process.env.PORT || 8080))
app.listen(app.get('port'), () => {
  console.log('App listening on port ' + app.get('port'));

});
