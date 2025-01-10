const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const task_array = [];//Array to store tasks

// Display menu options to the user
function showMenu() {
    console.log(`
=== Task Manager ===
1. Add Task
2. List Tasks
3. Exit
====================
`);
    rl.question('Choose an option (1, 2, or 3): ', handleOption);
}

// Handle the user's menu choice using switch case

function handleOption(option) {
    switch (option.trim()) {

            case '1': // Add Task
                rl.question('Enter task to add: ', (task) => {
                if (task.trim() !== '') {
                    task_array.push(task.trim());
                    console.log(`Task added: ${task}`);
                } else {
                    console.log('Please specify a valid task.');
                }
                showMenu(); // Return to menu
                });
                break;
        
        
        
            case '2':
                    const taskList = task_array.length ? task_array.join(', ') : 'No tasks available.';
                    console.log('Tasks:', taskList);
                    showMenu(); // Return to menu
                    break;
            case '3': 
                    console.log('Exiting Task Manager');
                    rl.close(); // Close the readline interface
                    break;
            default: 
                    console.log('Invalid option. Please choose 1, 2, or 3.');
                    showMenu(); // Return to menu
                    break;
    }
}

// Start the program by showing the menu
showMenu();
