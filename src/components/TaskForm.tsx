import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import Task from '../interfaces/Task';

interface Props {
  addANewTask: (task: Task) => void;
}

type handleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>;

const initialState = {
  title: '',
  description: ''
}

function TaskForm({ addANewTask }: Props) {
  const [task, setTask] = useState(initialState);
  const handleInputChange = ({target: {name, value}}: handleInputChange) => {
    setTask({...task, [name]: value});
  }

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialState);
  }

  return (
    <div className="card card-body bg-secondary text-dark rounded-1">
        <h1>Add Task</h1>
        <form onSubmit={handleNewTask}>
            <input type="text" placeholder="Write a title" name="title" className="form-control mb-3 rounded-1 shadow-none border-1" onChange={handleInputChange} value={task.title} required/>

            <textarea name="description" rows={2} placeholder="Place a Description" className="form-control mb-3 shadow-none border-1" onChange={handleInputChange} value={task.description}></textarea>

            <button className="btn btn-primary rounded-1">
            <AiOutlinePlus className='mb-1'/> ADD
            </button>
        </form>
    </div>
  )
}

export default TaskForm;