import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask, switchReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => switchReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
