const routes = require('express').Router();
const showdown = require('showdown');
const fs = require('fs');
const converter = new showdown.Converter({completeHTMLDocument: true});
converter.setFlavor('github');

routes.get('/', (req, res) => {
  fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
    readmeHtml = converter.makeHtml(data);
    console.log(readmeHtml);
    res.status(200).send(readmeHtml);
  });
});

module.exports = routes;
