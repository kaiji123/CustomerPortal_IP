import 'bootstrap/dist/css/bootstrap.css';
import {BsBook} from 'react-icons/bs' 
import {BiLogIn} from "react-icons/bi"
import {RiFootprintFill} from "react-icons/ri"
const Navigation = () => {
    
       

    return (
        <div >
            <nav class="navbar navbar-expand-md navbar-dark fixed-top" style={{background:"green"}} >
            <div class="container-fluid" >
            
            <a class="navbar-brand" href="#">
              <img src="./Logo.png" alt="" />

            </a>

            <label style={{marginLeft:"30px"}} > <b><big>Dashboard</big></b> 
              <br />
              Moving towards a clean and better journey
            </label>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><div><BsBook/></div>
                    Bookings </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><div><RiFootprintFill/></div>Footprints</a>
                </li>
              
              </ul>
            </div>
            <div class="navbar-nav ml-auto">
                <a href="#" class="nav-item nav-link"><div><BiLogIn/></div>Login</a>
            </div>
            </div>
    
           </div>
            </nav>
      </div>
       
    );
}

export default Navigation;