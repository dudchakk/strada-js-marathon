/* 
changeStatus:
- (task, status)
- this[task] = status

addTask:
- (task, status = undefined)
- if status, add status

deleteTask:
- (task)
- delete this[task]

showList:
-
*/

const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
    }

list.changeStatus = function(task, status) {
    this[task] = status;
}

list.addTask = function(task, status = undefined) {
    this[task] = status;
}

list.deleteTask = function(task) {
    delete this[task];
}

list.showList = function() {
    function printTasksForStatus(status, list)
    {
        console.log(status + ":");
        let checkIfTask = false;
        for(let task in list)
        {
            if(list[task] == status)
            {
                checkIfTask = true;
                console.log("- " + task);
            }
        }
        if(!checkIfTask) console.log("no tasks with this status");
    }

    printTasksForStatus("To Do", this);
    printTasksForStatus("In Progress", this);
    printTasksForStatus("Done", this);
}

list.addTask("do laundry", "To Do");
list.addTask("do homework", "In Progress");
list.deleteTask("write a post");
list.changeStatus("create a new practice task", "Done");

// list.addTask("bbb", "bbb");

list.showList();

/*
fix:
- if there's another status
*/