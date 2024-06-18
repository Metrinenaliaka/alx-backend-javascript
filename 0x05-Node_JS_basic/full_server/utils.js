const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const jsonData = JSON.parse(data);
                    const result = {};

                    for (const field in jsonData) {
                        result[field] = jsonData[field].map((student) => student.firstname);
                    }

                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            }
        });
    });
}

module.exports = readDatabase;
