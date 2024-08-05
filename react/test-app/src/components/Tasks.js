import Task from "./Task";

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </>
  );
};

export default Tasks;
