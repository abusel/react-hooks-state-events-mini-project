import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [displayedTasks, setDisplayedTasks] = useState(TASKS)
  const [selectedCat, setSelectedCat]= useState('All')
  const [newCat, setNewCat] = useState('Code')
  const [newTask, setNewTask] = useState('')

  function handleCatSelection(cat){
    setSelectedCat(cat)
  }
  

  function handleDelete(deletedTaskText){
    setDisplayedTasks(displayedTasks.filter((task)=>{
     return task.text !== deletedTaskText
    }))
  }
  
  function addTask(task){
    setDisplayedTasks([...displayedTasks, task])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCat={selectedCat} handleCatSelection={handleCatSelection}/>
      <NewTaskForm categories={CATEGORIES} newCat={newCat} setNewCat={setNewCat} newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
      <TaskList displayedTasks={displayedTasks} handleDelete={handleDelete} selectedCat={selectedCat}/>
    </div>
  );
}

export default App;
