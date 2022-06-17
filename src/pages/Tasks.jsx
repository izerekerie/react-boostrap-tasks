import React from 'react'
import Navbar from '../components/Navbar'
function Tasks() {
  return (
    <div>
<Navbar/>

     <div className="container">
        <div className=" h4 text-primary p-4 d-flex justify-content-between w-80">
            <p>Welcome kerie</p>
            <button className="tn btn-primary btn-lg text-light rounded"
            
            data-bs-toggle="modal"  data-bs-target="#taskForm"
            >Add task</button>
        </div>
        <div  className='container'>
        <div className=" row g-4 ">
            <div className="col-12 col-md-4 p-4  ">
              <div className='card bg-dark text-light  shadow-sm rounded'>
              <div className="card-body ">
              <p className='h5'>Task name</p>
                <p className="">12-06-2022 10:00 PM</p>
                <button className="btn btn-light rounded p-2 mx-1">
                <i className='bi bi-pencil-fill text-success mx-2'/> edit
            </button>
            <button className="btn btn-light rounded p-2 mx-1">
            <i className='bi bi-trash-fill text-danger mx-2'/> delete
            </button>
              
             
              </div>
              </div>
            </div>
            
            <div className="col-12 col-md-4 p-4  ">
              <div className='card bg-dark text-light  shadow-sm rounded'>
              <div className="card-body ">
              <p className='h5'>Task name</p>
                <p className="">12-06-2022 10:00 PM</p>
                <button className="btn btn-light rounded p-2 mx-1">
                <i className='bi bi-pencil-fill text-success mx-2'/> edit
            </button>
            <button className="btn btn-light rounded p-2 mx-1">
            <i className='bi bi-trash-fill text-danger mx-2'/> delete
            </button>
              
             
              </div>
              </div>
            </div>
        </div>
      </div>

      </div>

      <div className="modal fade" id='taskForm'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add task</h5>
              <button type='button' className="btn-close"
              data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body p-5">
              <form action="">
              <div className="form-group my-4">
              
                <input className='form-control' type="text" name='name' placeholder="Enter task name" />
              </div>
              <select name="" id="" className="form-select my-4">
                <option selected>Choose category</option>
                <option value="category1">category1</option>
                <option value="category1">category1</option>
              </select>
              </form>
             
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger"
              data-bs-dismiss="modal"
              >close</button>
            <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks