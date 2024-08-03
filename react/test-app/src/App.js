import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "make bed",
      day: "Aug 10th at 2:30pm",
      reminder: true,
    },
  ])

  return (
    <div className="container">
      <Header title="hello"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
