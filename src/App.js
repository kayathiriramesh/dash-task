import './App.css';
import  './sb-admin-2.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Login from './SidePages/Login'
import Portal from './Portal'
import Home from './SidePages/Home'
import NewVideo from './SidePages/NewVideo'
import Templates from './SidePages/Templates'
import AllVideos from './SidePages/AllVideos'
import Podcasts from './SidePages/Podcasts'
import BrandKit from './SidePages/BrandKit'

function App() {
  return (
   
    
    <BrowserRouter>
      
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Portal/>}>
            <Route path="home" element={<Home/>} />
            <Route path="newvideo" element={<NewVideo/>} />
            <Route path="templates" element={<Templates/>} />
            <Route path="allvideos" element={<AllVideos/>} />
            <Route path="podcasts" element={<Podcasts/>} />
            <Route path="brandkit" element={<BrandKit/>} />
          </Route>
        </Routes>
      
    </BrowserRouter>
  );
}
export default App;
