import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder} from "@fortawesome/free-regular-svg-icons";
import { faHome, faPodcast} from "@fortawesome/free-solid-svg-icons";
import UserContext from './SidePages/UserContext';


function Sidebar () {
    const userData = useContext(UserContext)
  return (
    <ul class="navbar-nav  sidebar sidebar-dark accordion" id="accordionSidebar" >
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">VEED.IO</div>
        </a>
        <hr class="sidebar-divider my-0"/>
        <li class="nav-item active">
            <Link  class="nav-link" to="/newvideo">
                
                <button class="button-new">NewVideo<span> + </span></button>
            </Link>
        </li>
        
        <li class="nav-item active">
            <Link  class="nav-link" to="/home">
             
              <button class="button"> <i >< FontAwesomeIcon icon={faHome} class="icon"/> </i> Home</button>
            </Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link" to="/templates">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <button class="button">Templates</button>
            </Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link" to="/allvideos">
                <button class="button"> <i >< FontAwesomeIcon icon={faFolder} class="icon"/> </i> All Videos</button>
            </Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link" to="/podcasts">
                <button class="button"> <i >< FontAwesomeIcon icon={faPodcast} class="icon"/> </i> Podcasts & Shows</button>
            </Link>
        </li>
        <li class="nav-item active">
            <Link class="nav-link" to="/brantkit">
                <button class="button">Brand Kit</button>
            </Link>
        </li>
    </ul>
  );
}
export default Sidebar;



