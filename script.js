document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove';
            removeButton.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            // Mark task as completed
            li.addEventListener('click', function () {
                li.classList.toggle('completed');
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = ""; // Clear input field
        } else {
            alert("Please enter a task!");
        }
    });
});
