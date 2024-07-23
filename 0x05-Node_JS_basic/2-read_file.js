const fs = require('fs');

function countStudents(dataPath) {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  fileLines.shift();

  const fields = {};

  for (const line of fileLines) {
    const data = line.split(',');
    const field = data[3].trim();
    const name = data[0];
    if (Object.keys(fields).includes(field)) {
      fields[field].push(name);
    } else {
      fields[field] = [name];
    }
  }

  console.log(`Number of students: ${fileLines.length}`);
  for (const field of Object.keys(fields)) {
    console.log(`Number of students in ${field}: ${fields[field].length}. ${fields[field].join(', ')}`);
  }
}

module.exports = countStudents;
