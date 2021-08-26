import 'bootstrap/dist/css/bootstrap.css';
import './JourneyDetails.css'
import '../../style/Cards.css'

const JourneyDetails = () => {
    
       

    return (
        <div class="card FirstColumn"  >
        <div class="card-body" >
          <h5 class="card-title required">Journey Details</h5>
          <div style = {{display: "grid",gridTemplateColumns: "auto auto", padding: "10px" }}>
            <div class= "header">
                <h5 class="card-subtitle mb-2 text-muted">Pick up</h5>
                <div class = "inputContainer1" style={{display: "grid",gridTemplateColumns: "auto auto", padding: "10px" }}>
                <img src="./Location1.png" alt=""class="inputIcon" />
                    <input type="text" class="inputField" placeholder="Enter location" />
                </div>
                
            </div>
            <div class="header" >
                <h5 class="card-subtitle mb-2 text-muted">Drop off</h5>
                <div class = "inputContainer1" style={{display: "grid",gridTemplateColumns: "auto auto", padding: "10px" }}>
                <img src="./Location.png" alt=""class="inputIcon" />
                
                    <input type="text" class="inputField" placeholder="Enter location" />
                </div>
            </div>
            <div class="header">
                <h5 class="card-subtitle mb-2 text-muted">Date of journey</h5>
                <div class = "inputContainer1" style={{display: "grid",gridTemplateColumns: "auto auto", padding: "10px" }}>
                    <img src="./Calendar.png" alt="" class="inputIcon"/>
                
                    <input type="text" class="inputField" placeholder="Enter date"/>
                </div>
            </div>
          </div>
        </div>
      </div>
       
    );
}

export default JourneyDetails;