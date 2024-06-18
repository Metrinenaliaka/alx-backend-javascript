const http = require('http');
const countStudents = require('./3-read_file_async');

const filePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(filePath)
      .then((data) => {
        res.write(data.join('\n'));
        res.end();
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245, () => {
  console.log('Server running at localhost:1245');
});

module.exports = app;