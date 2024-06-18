function countStudents(file_path) {
    const fs = require('fs');
    try {
        const data = fs.readFileSync(file_path, 'utf8').split('\n');
        const headers = data.shift().split(',');
        const students = data.map((line) => line.split(','));
        const studentsByField = {};
        students.forEach((student) => {
            if (!studentsByField[student[3]]) {
                studentsByField[student[3]] = [];
            }
            studentsByField[student[3]].push(student[0]);
        });
        console.log(`Number of students: ${students.length}`);
        for (const field in studentsByField) {
            if (field) {
                const list = studentsByField[field];
                console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
            }
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}
module.exports = countStudents;
