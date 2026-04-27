const {readTasks} = require('./tasks');
const [,, cmd] = process.argv;

if(!cmd) {
    console.log('Taskmaster CLI - usa: node index.js <comando>')
}
