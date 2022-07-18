import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import tsLogo from './assets/TypescriptLogo.svg';
import jsLogo from './assets/jsLogo.webp';
import Task from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Props {
  title?: string;
}

let idValue: number = 0;

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getId = (): number => idValue = idValue + 1;

  const addANewTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: getId(), completed: false}]);
  }

  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand bg-warning p-1 rounded-1">
            {title}
          </a>
          <img src={logo} alt="React Logo" style={{ width: '5rem' }} />
          <img src={jsLogo} alt="Javascript Logo" style={{ width: '4rem' }} />
          <img src={tsLogo} alt="Typescript Logo" style={{ width: '4rem' }} />
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
