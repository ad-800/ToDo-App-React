import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddTasks() {
  let navigate = useNavigate();

  const [task, setTask] = useState({
    name:'',
    status:''
  });

  const {name, status} = task;

  const onInputChange = (e) => {
    setTask({...task, [e.target.name]:e.target.value})
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/task', task);
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='py-5 row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add New Task</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className='mb-3'>
            <label htmlfor="Name" className="form-label">
              Name
            </label>
            <input type={"text"} className='form-control' placeholder='Task name' name='name' value={name} onChange={(e) => onInputChange(e)} />
          </div>

          <div className='mb-3'>
            <label htmlfor="Status" className="form-label">
              Status
            </label>
            <input type={"text"} className='form-control' placeholder='Current task status' name='status' value={status} onChange={(e) => onInputChange(e)} />
          </div>

          <div className="mt-4 d-flex flex-row justify-content-between">
            <Link className='btn btn-danger mx-2 align-item-end' to='/'>Cancel</Link>
            <button type='submit' className='btn btn-success'>Submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}
