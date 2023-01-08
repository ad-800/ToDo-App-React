import React from 'react'

export default function AddTasks() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add New Task</h2>

          <div className='mb-3'>
            <label htmlfor="Name" className="form-label">
              Name
            </label>
            <input type={"text"} className='form-control' placeholder='Task name' name='name' />
          </div>

          <div className='mb-3'>
            <label htmlfor="Status" className="form-label">
              Status
            </label>
            <input type={"text"} className='form-control' placeholder='Current task status' name='status' />
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
          <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
