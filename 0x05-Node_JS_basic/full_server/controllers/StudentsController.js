import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    res.status(200).write('This is the list of our students\n');
    readDatabase('database.csv')
      .then((data) => {
        const lines = [];
        for (const [field, names] of Object.entries(data)) {
          lines.push(`Number of students in ${field}. List: ${names.join(', ')}`);
        }
        res.write(lines.join('\n'));
        res.end();
      })
      .catch((err) => {
        res.status(500).write(err);
        res.end();
      });
  }

  static getAllStudentsByMajor(req, res) {
    if (req.params.major !== 'CS' && req.params.major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      const { major } = req.params;
      readDatabase('database.csv')
        .then((data) => {
          res.write(`List: ${data[major].join(', ')}`);
          res.end();
        }).catch((err) => {
          res.status(500).write(err);
          res.end();
        });
    }
  }
}