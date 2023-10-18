function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskcategory = document.getElementById("taskcategory");
    var taskdeadline = document.getElementById("taskdeadline");
    var taskpriority = document.getElementById("taskpriority");
    var taskText = taskInput.value;
    var taskCategory = taskcategory.value;
    var taskDeadline = taskdeadline.value;
    var taskPriority = taskpriority.value;

    if (taskText === "" || taskCategory === "" || taskDeadline === "" || taskPriority ==="") {
        alert("All Field's are Mandatory!");
        return;
    };

    var taskCon = document.getElementById('task-contain');
    var taskitem = document.createElement('li');

    taskitem.innerHTML = `
        <div class="task-container">
                <input type="checkbox" class="check">
                <span class="sub-title">Task Title:<br>
                    <span class="T-Title">${taskText}</span>
                </span><br>
                <span class="sub-title">Category:
                    <span class="T-sub-Title">${taskCategory}</span>
                </span><br>
                <span class="sub-title">Deadline:
                    <span class="T-sub-Title">${taskDeadline}</span>
                </span><br>
                <span class="sub-title">Priority:
                    <span class="T-sub-Title">${taskPriority}</span>
                </span>
                <div class="btn-section">
                    <button class="btn complete">Complete</button>
                    <button class="btn delete">Remove</button>
                </div>
            </div>
    `;

    taskCon.appendChild(taskitem);
    taskInput.value="";
    taskcategory.value="";
    taskdeadline.value="";
    taskpriority.value="#";

    taskitem.querySelector('.delete').addEventListener('click', function () {
        taskitem.remove();
    });
    
};

