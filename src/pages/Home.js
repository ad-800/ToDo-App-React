import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { async } from 'q';

export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  },[])

  const loadTasks = async() => {
    const results = await axios.get('http://localhost:8080/tasks');
    setTasks(results.data);
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
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
                    <button className="btn btn-outline-success mx-2">Edit</button>
                    <button className="btn btn-danger mx-2">Remove</button>
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
