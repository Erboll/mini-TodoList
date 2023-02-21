import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  const [tasks, setTasks] = useState([
    {task: 'Do home work', id: Math.random() },
    {task: 'Play video games', id: Math.random()},
    {task: 'Wash dishes', id: Math.random()}
  ]);
  const [task, setTask] = useState('');

  const onSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    setTasks(prev => [...prev, {task , id: Math.random()}]);
    setTask('');
  };
  const onDelete = (id:number) => {
    setTasks(prevState => prevState.filter(item => item.id !== id));
  };


  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }



  return (
    <div className="App">
      <AddTaskForm onSubmit={onSubmit} onChange={changeInput}/>
      {tasks.map(task => (
        <Task onDelete={() => onDelete(task.id)} key={task.id} text={task.task}></Task>
      ))}
    </div>
  );
}

export default App;
