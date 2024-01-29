import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';


function RestReview({review}) {
  const [reviews,setreview]=useState([])
  const [open, setOpen] = useState(false);
  console.log("props",review)


  return (


    <>
      <button className='btn btn-warning ms-3'  onClick={() => setOpen(!open)}>click here to cee reviews</button>
      <Collapse in={open}>

      <div className='my-2'>
        <hr />
        {
          review?.length>0?
          review?.map((data)=>(
            <div className='mt-2'>
            <h6>name:{data.name}</h6>
            <h6>Rating:{data.rating}</h6>
            <h6>{data.comments}</h6>
            <hr></hr>
  
          </div>

          ))
:
        <h3>no data</h3>


        }
      </div>
      
      
      </Collapse>
    </>

  )
}

export default RestReview