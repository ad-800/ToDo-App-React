import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import StopWatch from '../components/StopWatch/StopWatch';
import CheckBox from '../components/CheckBox';

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
      <StopWatch />
      <div className='py-5 tasktable'>
        <table className="table border shadow table-hover align-middle">
          <thead>
            <tr className='table-heading-green'>
              <th scope="col"></th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((task, index) => (
                <tr>
                  <th scope="row" key={index}>
                    <CheckBox />
                  </th>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                  <td>
                    <Link className="btn btn-outline-success mx-2" to={`/task/${task.id}`}>
                    <FontAwesomeIcon className='penbutton' icon={faPen} />
                    </Link>
                    <button className="btn btn-danger mx-2" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon className='trashbutton' icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <span className='notasks'>{tasks.length === 0 ? 'Add a task to begin' : null}</span>
      </div>
    </div>
  )
}
