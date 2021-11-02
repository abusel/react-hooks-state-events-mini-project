import React from "react";
import Task from "./Task";

function TaskList({displayedTasks, handleDelete, selectedCat}) {
  const filteredTasks = displayedTasks.filter((task)=>{
    if (selectedCat === 'All'){
      return task
    }
    else{
      return task.category === selectedCat
    }
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map((task)=>{
        return <Task text= {task.text} category= {task.category} key= {task.text} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

export default TaskList;
