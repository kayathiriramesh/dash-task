import React from 'react'
import Card from './Card'
import Video from './Video'
function NewVideo() {
return (
  <>
    <div className="d-sm-flex align-items-center justify-content-between mb-3 mt-2 ml-5">
        <h4 className="h4 mb-0 text-gray-800">Let's Create Some <b>Videos!</b></h4>
    </div>
    <Card />
    <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2 ml-5">
        <h5 className="h5 mb-0 text-gray-600">My Recent Videos</h5>
        <h6 className="h6 mb-0 text-gray-500">All Videos  </h6>
    </div>
    <Video  />
    
  </>
  )
  }
   
 
  


export default NewVideo ;