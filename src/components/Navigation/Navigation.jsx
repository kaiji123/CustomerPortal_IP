import 'bootstrap/dist/css/bootstrap.css';
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
              Moving towards better science
            </label>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Download</a>
                </li>
              </ul>
            </div>
            <div class="navbar-nav ml-auto">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
            </div>
    
           </div>
            </nav>
      </div>
       
    );
}

export default Navigation;