import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {

  const [tasks, setTasks] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    loadTasks();
  },[])

  const loadTasks = async() => {
    const results = await axios.get('http://localhost:8080/tasks');
    setTasks(results.data);
  }

  const deleteTask = async(id) => {
    await axios.delete(`http://localhost:8080/task/${id}`);
    loadTasks();
  }

  return (
    <div className='container'>
      <div className='py-5'>
        <table className="table border shadow table-hover">
          <thead>
            <tr className='table-success'>
              <th scope="col">#</th>
              <th scope="col">Status</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((task, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{task.status}</td>
                  <td>{task.name}</td>
                  <td>
                    <Link className="btn btn-outline-success mx-2" to={`/task/${task.id}`}>Edit</Link>
                    <button className="btn btn-danger mx-2" onClick={() => deleteTask(task.id)}>Remove</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
