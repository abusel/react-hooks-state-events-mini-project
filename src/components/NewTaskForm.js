import React from "react";

function NewTaskForm({categories, newCat, setNewCat, newTask, setNewTask, addTask}) {
 
  return (
    <form className="new-task-form" onSubmit={(e)=>{
      e.preventDefault()
      addTask({
        text: newTask,
        category: newCat,
        key: newTask
      })
    }}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={(e)=>{
          setNewTask(e.target.value)
        }}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>{
              setNewCat(e.target.value)}}>
          {/* render <option> elements for each category here */}
          {categories.filter((cat)=>{
            return cat !== 'All'
          }).map((cat)=>{
            return <option value= {cat} >{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
