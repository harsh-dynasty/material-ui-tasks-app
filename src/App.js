import './App.css';
import React, { useState } from 'react';
import SimpleBottomNavigation from './components/BottomNavigation';
import Tasks from './components/tasks'
import Create from './components/create'
function App() {
  const [value,setValue]=useState(0)
  const [tasks,addTasks]=useState([{id:1,title:'title',body:'body',completed:true}])

  const handleTasks =(title,body)=>{
      var newTask = {
        id:tasks.length+1,
        title,
        body,
        completed:false
      }
      addTasks([...tasks,newTask])
      setValue(0)
  }
  const handleCompleted=(taskid)=>{
  
    var t=tasks.map(task=>{
      if(task.id===taskid) task.completed=!task.completed
      return task
    })
    addTasks(t)
    
  }
  const handleDelete=(id)=>{
    var newTasks=tasks.filter(t=>t.id!=id)
    addTasks(newTasks)
  }
  return (
    
    <div className="App">
      <h1 className="heading">{value==0?"Tasks":"Create a new Task"}</h1>
      
      {
        value==0?
          <Tasks alltasks={tasks} handleCompleted={handleCompleted} handleDelete={handleDelete}/>
        :
          <Create handleTasks={handleTasks}/>
      }
      
      <SimpleBottomNavigation className="bottom-nav" value={value} setValue={setValue}/>
    </div>
  );
}

export default App;
