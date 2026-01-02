import React, { Fragment, useEffect, useState } from 'react'
import './List.css'
import { Link } from 'react-router-dom';


export const List = () => {
    const [datalist, setDatalist] = useState();
    

    useEffect(() => {
        getTaskdata();
    }, [])
   
    const getTaskdata = async () => {
        let list = await fetch("http://localhost:3000/tasks")
        list = await list.json()
        if (list.success) {
            setDatalist(list.result)
        }
    }

    const deletetask = async (id) => {
        let item = await fetch("http://localhost:3000/delete/"+id,{method:'delete'});
        item = await item.json();
        if (item.success) {
            getTaskdata();
        }
    }

    

    return (
        <div className='list-container'>
            <h1>List data</h1>
            <ul className='task-list'>
                <li className='list-header'>S.No</li>
                <li className='list-header'>Name</li>
                <li className='list-header'>Email</li>
                <li className='list-header'>Age</li>
                <li className='list-header'>Action</li>

                {
                    datalist && datalist.map((item,index) => (
                       
                        <Fragment key={item._id}>
                            <li className='list-item'>{index + 1}</li>
                            <li className='list-item'>{item.name}</li>
                            <li className='list-item'>{item.email}</li>
                            <li className='list-item'>{item.age}</li>
                            <li className='list-item'><button onClick={()=> deletetask(item._id)} className='delete-item'>Delete</button>
                                <Link to={"update/" + item._id} className='update-item'>Update</Link>
                            </li>
                        </Fragment>  
                    ))
                }
            </ul>
        </div>
    )
}
