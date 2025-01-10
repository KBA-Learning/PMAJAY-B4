import readline from 'readline';

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const taskMap = new Map(); // Map to store tasks with unique IDs

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

// Handle the user's menu choice
function handleOption(option) {
    switch (option.trim()) {
        case '1': // Add Task
            rl.question('Enter task to add: ', (task) => {
                if (task.trim() !== '') {
                    const taskId = taskMap.size + 1; // Generate a unique ID
                    taskMap.set(taskId, task.trim());
                    console.log(`Task added: [${taskId}] ${task}`);
                } else {
                    console.log('Please specify a valid task.');
                }
                showMenu(); // Return to menu
            });
            break;

        case '2': // List Tasks
            if (taskMap.size > 0) {
                console.log('Tasks:');
                for (const [id, task] of taskMap.entries()) {
                    console.log(`[${id}] ${task}`);
                }
            } else {
                console.log('No tasks available.');
            }
            showMenu(); // Return to menu
            break;

        case '3': // Exit
            console.log('Exiting Task Manager');
            rl.close(); // Close the readline interface
            break;

        default: // Invalid option
            console.log('Invalid option. Please choose 1, 2, or 3.');
            showMenu(); // Return to menu
            break;
    }
}

// Start the program by showing the menu
showMenu();
