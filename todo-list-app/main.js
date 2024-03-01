/* 
changeStatus:
- find a task by name

addTask:
- create new object

deleteTask:
- splice

showList:
- simply show all the tasks

showByPriority:
- make an array sorted by grouping:
arr[0] = array of todo
arr[1] = array of in progress
arr[2] = array of done
- print it
*/

const list = [
    {name: "create a new practice task", status: "In Progress", priority: "low"},
    {name: "make a bed", status: "Done", priority: "low"},
    {name: "write a post", status: "To Do", priority: "high"},
]

list.changeStatus = function(taskName, newStatus) {
    let task = this.find((item) => item.name == taskName);
    this[this.indexOf(task)].status = newStatus;
}

list.addTask = function(taskName, taskStatus = "To Do", taskPriority = "low") {
    this.push({name: taskName, status: taskStatus, priority: taskPriority});
}

list.deleteTask = function(taskName) {
    let task = this.find((item) => item.name == taskName);
    this.splice(this.indexOf(task), 1);
}

list.showList = function() {
    for(let el of this)
    {
        console.log(`- ${el.name}, status: ${el.status}`);
    }
}

list.showBy = function(grouping) {
    
    if(grouping == "status")
    {
        let arr = [[], [], []];
        for(let el of this)
        {
            if(el.status == "To Do") arr[0].push(el);
            else if (el.status == "In Progress") arr[1].push(el);
            else if (el.status == "Done") arr[2].push(el);
        }
        for (let i = 0; i < arr.length; i++)
        {
            if(i == 0) console.log("To Do:");
            else if(i == 1) console.log("In Progress:");
            else console.log("Done:");
            
            for (let j = 0; j < arr[i].length; j++) console.log(`- ${arr[i][j].name}`);
        }
    }
    
    else if(grouping == "priority")
    {
        let arr = [[], []];
        for(let el of this)
        {
            if(el.priority == "low") arr[0].push(el);
            else if (el.priority == "high") arr[1].push(el);
        }
        for (let i = 0; i < arr.length; i++)
        {
            if(i == 0) console.log("Low priority:");
            else console.log("High priority:");
            
            for (let j = 0; j < arr[i].length; j++) console.log(`- ${arr[i][j].name}`);
        }
    }
    else console.log("invalid input");
}


list.addTask("make dinner", "To Do", "high");
list.addTask("play with children", "To Do", "low");
list.addTask("do homework", "To Do", "high");
list.addTask("clean the kitchen", "To Do", "low");
list.addTask("exercise", "To Do", "high");
list.addTask("do laundry", "high");

list.changeStatus("write a post", "Done");
list.changeStatus("do laundry", "In Progress");
list.changeStatus("do homework", "Done");
list.changeStatus("play with children", "In Progress");

list.deleteTask("write a post");
list.deleteTask("create a new practise task");

list.showList();
console.log("\n");
list.showBy("status");
console.log("\n");
list.showBy("priority");

/*
fix:
- exception catching: another status/priority
*/