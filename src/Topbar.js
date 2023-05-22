import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBolt, faUserPlus,} from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

function Topbar() {
  return (
    <div class="container mb-5 mt-2 ml-5">
      <div class="row">
      <form class="navbar-form navbar-left col-3" action="/action_page.php">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search" />
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
            <i class="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
      <div class="flex-container col-9">
        <div class="topbutton col-2">
          <button class="button-right" style={{backgroundColor:"lightpink"}}>  Upgrade <i >< FontAwesomeIcon icon={faBolt} class="icon" id="iconbolt"/> </i></button>
        </div>
        <div class="topbutton col-2">
          <button class="button-right">  invite <i >< FontAwesomeIcon icon={faUserPlus} class="icon"/> </i></button>
        </div>
        <div class="topicon col-1">
           <i >< FontAwesomeIcon icon={faCircleQuestion} class="icon"/></i>
        </div>
        <div class="topicon col-1">
          <i >< FontAwesomeIcon icon={faBell} class="icon"/></i>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar