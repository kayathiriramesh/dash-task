import React from 'react'
import { faMicrophone, faPodcast, faScissors, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card() {
  return (
    <>
<div className="row ml-5 mb-5 mt-2">
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-lg font-weight-bold  text-uppercase mb-1`}>   <i >< FontAwesomeIcon icon={faScissors} class="iconscissor"/> </i>Create Project</div>
              </div>        
             </div>
          </div>
        </div>
      </div> 
    

    
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-lg font-weight-bold  text-uppercase mb-1`}>   <i >< FontAwesomeIcon icon={faVideo} class="iconvideo"/> </i>Record vedio</div>
              </div>    
            </div>
          </div>
        </div>
      </div>
  

  
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-lg font-weight-bold  text-uppercase mb-1`}> 
                   <i >< FontAwesomeIcon icon={faPodcast} class="iconpodcast"/> </i>
                 Go Live</div>
              </div>
            </div>
          </div>
        </div>
      </div> 



   
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-lg font-weight-bold  text-uppercase mb-1`}>   <i >< FontAwesomeIcon icon={faMicrophone} class="iconrecord"/> </i>Record Podcast</div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    </>
    )
}

export default Card;