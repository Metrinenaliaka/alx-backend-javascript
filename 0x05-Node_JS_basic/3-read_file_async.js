const fs = require('fs');

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');

    const lines = data.split('\n');
    if (lines[lines.length - 1] === '') {
      lines.pop();
    }

    const students = lines.map((line) => line.split(','));
    const fields = [...new Set(students.map((student) => student[3]))];
    fields.shift();

    const results = [];

    console.log(`Number of students: ${students.length - 1}`);
    results.push(`Number of students: ${students.length - 1}`);
    for (const field of fields) {
      const fieldStudents = students.filter((student) => student[3] === field);
      const fieldStudentsNames = fieldStudents.map((student) => student[0]);
      results.push(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudentsNames.join(', ')}`);
      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudentsNames.join(', ')}`);
    }

    return results;
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;