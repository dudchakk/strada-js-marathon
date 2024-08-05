import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "make bed",
      day: "Aug 10th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "cook dinner",
      day: "Aug 10th at 4:30pm",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="container">
      <Header title="hello" />
      {tasks.length ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        "You have to tasks to do! <3"
      )}
    </div>
  );
}

export default App;
