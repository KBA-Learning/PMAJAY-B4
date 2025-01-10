const tasks = [];
const args = process.argv.slice(2);
const command = args[0];
const task = args[1];
if (command === 'add') {
    if (task) {
        tasks.push(task);
        console.log(`Task added: ${task}`);
        console.log(tasks);
    } 
    else {
        console.log('Please specify a task to add.');
    }
} 
else
{
console.log("Invalid Command");

}