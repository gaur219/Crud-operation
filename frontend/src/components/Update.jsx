import { useEffect, useState } from 'react';
import './Addtask.css';
import { useNavigate, useParams } from 'react-router-dom';

export const Update= () => {
  const [taskdata, setTaskdata]= useState();
  const {id} = useParams()
  const navigate = useNavigate()
   
  useEffect(()=>{
     getTaskdata(id)
  }, []) 

  const getTaskdata =async(id)=>{
   let task = await fetch("http://localhost:3000/task/"+id);
   task = await task.json()
   if(task.result){
      setTaskdata(task.result)
   }
  }

  const updateTask=async()=>{
    console.log("task",taskdata);
    let task = await fetch("http://localhost:3000/update-task",{
      method:'put',
      body:JSON.stringify(taskdata),
      headers:{
         'Content-Type':'Application/Json'
      }
    })
    task= await task.json() 
    if(task){
      navigate('/')
    }
  }

  return (
    <div className='container'>
      <h1>Update task</h1>
     
        <label htmlFor=''>Name</label>
        <input value={taskdata?.name} onChange={(event)=>setTaskdata({...taskdata,name:event.target.value})}type='text' name='name' placeholder='Enter the name' />
        <label htmlFor=''>Email</label>
        <input value={taskdata?.email} onChange={(event)=>setTaskdata({...taskdata,email:event.target.value})}type='text' name='email' placeholder='Enter the name' />
        <label htmlFor=''>Age</label>
        <input value={taskdata?.age} onChange={(event)=>setTaskdata({...taskdata,age:event.target.value})}type='text' name='age' placeholder='Enter the age' />
        <button onClick={updateTask} className='submit'>Update</button>
    </div>
  )
}
