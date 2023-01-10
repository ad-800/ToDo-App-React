import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditTasks() {
  let navigate = useNavigate();

  const {id} = useParams();

  const [task, setTask] = useState({
    name:'',
    status:''
  });

  const {name, status} = task;

  useEffect(() => {
    loadTask();
  }, [])

  const onInputChange = (e) => {
    setTask({...task, [e.target.name]:e.target.value});
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/task/${id}`, task);
    navigate('/');
  }

  const loadTask = async() => {
    const result = await axios.get(`http://localhost:8080/task/${id}`, task);
    setTask(result.data);
  }

  return (
    <div className='container'>
      <div className='row py-5'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit Task</h2>

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
            <Link className='btn btn-danger mx-2' to='/'>Cancel</Link>
            <button type='submit' className='btn btn-success'>Submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}
