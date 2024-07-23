const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  fileLines.shift();
  
  console.log(`Number of students: ${fileLines.length}`);

  const fields = {};

  for (const line of fileLines){
    data = line.split(',');
    const field = data[3].trim();
    const name = data[0];
    if (Object.keys(fields).includes(field))
      fields[field].push(name)
    else
      fields[field] = [name];
  }

  console.log(fields);

  for (const field of Object.keys(fields)){
    console.log(`Number of students in ${field}: ${fields[field].length}. ${fields[field].join(', ')}`)
  }
};

module.exports = countStudents;
