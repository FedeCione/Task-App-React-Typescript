import Task from "../interfaces/Task";
import { AiFillDelete } from 'react-icons/ai'

interface Props {
    task: Task;
    deleteTask: (id: number) => void;
}

function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-1 text-dark">
        <h2>{task.title}</h2>
        <p className="">ID: {task.id}</p>
        <p>{task.description}</p>
        <button className="btn btn-danger" onClick={() => task.id && deleteTask(task.id)}>
          <AiFillDelete className="mb-1"/>
            Delete
        </button>
    </div>
  )
}

export default TaskCard;
