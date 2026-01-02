import { useState } from 'react';
import './Addtask.css';
import { useNavigate } from 'react-router-dom';

export const Addtask= () => {
  const [taskdata, setTaskdata]= useState();
  const navigate=useNavigate()
  
  const handleAddtask =async()=>{
    console.log(taskdata);
    let result = await fetch('http://localhost:3000/add-task',{
      method:'Post',
      body:JSON.stringify(taskdata),
      headers:{
        'Content-Type':'Application/Json'
      }
    })
     result = await result.json()
    if(result){
      navigate('/')
      console.log("success");
    }
    else{
      console.log("not seccess");
    }
  }
  return (
    <div className='container'>
      <h1>Add new task</h1>
        <label htmlFor=''>Name</label>
        <input onChange={(event)=>setTaskdata({...taskdata,name:event.target.value})}type='text' name='name' placeholder='Enter the Name' />
        <label htmlFor=''>Email</label>
        <input onChange={(event)=>setTaskdata({...taskdata,email:event.target.value})}type='text' name='email' placeholder='Enter the Email' />
        <label htmlFor=''>Age</label>
        <input onChange={(event)=>setTaskdata({...taskdata,age:event.target.value})}type='text' name='age' placeholder='Enter the add Age' />

        <button onClick={handleAddtask} className='submit'>Add Task</button>
    </div>
  )
}
