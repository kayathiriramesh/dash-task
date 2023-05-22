import React from 'react'

function Video() {
  return (
    <div className='video ml-5 mb-5 mt-2'>
        <video controls class="col-3">
            <source src="video1.mb4" type="video/mp4"></source> 
        </video>
    </div>
  )
}

export default Video